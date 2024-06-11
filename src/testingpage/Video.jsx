import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { storage } from "../../firebase";
import { useStateContext } from "../contexts/ContextProvider";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axiosclinet from "../https/axios-clinet";
import Select from "react-dropdown-select";
import { categories } from "../../src/json/categories.jsx";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
import { headlines } from "../../src/json/headlines.jsx";
import DropFileInput from "../components/drop-file-input/DropFileInput.jsx";
import UploadButton from "../components/upload-button/UploadButton";
import PostButtons from "../components/PostButtons.jsx";
import data from "../../state.json";
import { Toaster, toast } from "sonner";
const api_freeads = import.meta.env.VITE_ADS_VIDEO_FREEADS;

// console.log(data.States);
const options = { multi: true };
const Video = () => {
  const { token } = useStateContext();
  const [CategoriesValues, setCategoriesValues] = useState("");
  const [file, setFile] = useState(null);
  const [localGvt, setLocalGvt] = useState();
  const result = Object.entries(data.full);

  const onFileChange = (files) => {
    const currentFile = files[0];
    setFile(currentFile);
    console.log(files);
  };
  const onChangecategories = (e) => {
    setCategoriesValues(e.target.value);
    console.log(CategoriesValues);
  };
  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;
  };

  const handleClick = (data) => {
    console.log(data);
    if (file === null || file === 0) return;
    const fileRef = ref(storage, `videos/${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => {
        console.log("error :(");
      },
      () => {
        console.log("success!!");
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          axios
            .post("")
            .then((response) => {})
            .catch((err) => {
              console.log(err.message);
            });
          console.log(downloadURL);
        });
      }
    );
  };

  const SUPPORTED_VIDEO_FORMATS = ["video/mp4", "video/avi", "video/mov"];
  const MAX_VIDEO_SIZE = 50 * 1024 * 1024;

  const schema = yup.object().shape({
    // video: yup.string().required(),
    productName: yup.string().required(),
    price: yup.string().required(),
    categories: yup.string().required("Category is required"),
    description: yup.string().required("Description is required"),
    state: yup.string().required("State is required"),
    localGovernment: yup.string().required("Local Government is required"),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const watchedState = watch("state");

  useEffect(() => {
    console.log(data.state);
    if (watchedState) {
      const filterState = result.find(
        (x) => x[0].toLowerCase() === watchedState.toLowerCase()
      );
      if (filterState) {
        setLocalGvt(filterState[1]);
      }
    }
  }, [watchedState, data?.state]);

  const formSubmit = (data) => {
    console.log("logging file", CategoriesValues);
    if (file === null) {
      toast.error("You have not uploaded any file");
      return;
    }
    const fileRef = ref(storage, `videos/${file.name}`);

    const uploadTask = uploadBytesResumable(fileRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          // ..
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          console.log(CategoriesValues)
          const payload = {
            price_range: data.price,
            headlines: data.headlines,
            categories: data.categories,
            titlevideourl: downloadURL,
            description: data.description,
          };
          axios
            .post(api_freeads, payload, {
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token?.token}`,
              },
            })
            .then((res) => {
              if (res.status === 200) {
                console.log("success!!");
                console.log("worked in database for vidoes ");
                console.log(CategoriesValues);
                return res.data.item;
              } else if (res.status === 500 || res.status === 401) {
                console.log(res.data.message);
              }
            })
            .catch((err) => console.log(err.message));
        });
      }
    );
  };
  if (errors.price) {
    toast.error(errors.price?.message);
    return;
  }
  if (errors.description) {
    toast.error(errors.description?.message);
    return;
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="px-4 lg:px-40">
        <PostButtons />
        <h1 className="my-5 lg:text-2xl lg:font-semibold text-center">
          UPLOAD YOUR VIDEO DETAILS TO MYPROMOSPHERE
        </h1>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="flex flex-col gap-3">
            <div className="">
              <DropFileInput
                onFileChange={(files) => onFileChange(files)}
                className=""
              />
            </div>
            <div>
              <select
                onChange={onChangecategories}
                id="categories"
                name="categories"
                {...register("categories", { required: true })}
                className="md:h-14 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              >
                {categories.map((option, index) => {
                  return (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
            {CategoriesValues}

            <div>
              <input
                className="md:h-14 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="productName"
                name="productName"
                {...register("productName", { required: true })}
                type="text"
                placeholder="Product Name"
              />
            </div>

            <div>
              <input
                className="md:h-14 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                name="price"
                type="text"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>
            {/* <p className='text-red  text-sm'>{errors.price?.message}</p> */}
            <div>
              <select
                name="state"
                id="state"
                {...register("state", { required: true })}
                className="md:h-14 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
              >
                <option value="">--Select your State--</option>
                {data.States.map((state, i) => (
                  <option key={i} value={state.state}>
                    {state.state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                id="localGovernment"
                name="localGovernment"
                {...register("localGovernment", { required: true })}
                className="md:h-14 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
              >
                <option value="">--Select Local Government--</option>
                {localGvt &&
                  localGvt.map((x, i) => (
                    <option key={i} value={x.lga}>
                      {x.lga}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <input
                className="md:h-14 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="description"
                type="text"
                placeholder="Description"
                {...register("description", { required: true })}
              />
            </div>
            {/* <p className="text-red pt-2" >{errors.description?.message}</p> */}
            <button
              type="sumbit"
              className="bg-[#3D217A] py-2 md:py-4 w-full text-white rounded-md"
            >
              Release
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
// What  remamins in this component is

// validation on all input
// proper UI interface
// Valiation errors
//  validate only videos should be uploaded not images

export default Video;

// searcity auditor --- how to get there
