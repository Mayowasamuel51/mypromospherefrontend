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
import { FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Loader from "../loader.jsx";
import { useQuery } from "@tanstack/react-query";
// import { FaPlus, FaXmark } from "react-icons/fa6";
const api_freeads = import.meta.env.VITE_ADS_VIDEO_FREEADS;

// console.log(data.States);
const options = { multi: true };
const Video = () => {
  const { token } = useStateContext();
  const [CategoriesValues, setCategoriesValues] = useState("");
  const [file, setFile] = useState(null);

  const [imageUpload, setImageUpload] = useState([]);
  const [files, setFiles] = useState(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [localGvt, setLocalGvt] = useState();
  const result = Object.entries(data.full);

  const { isPending, isError, data: profile, isLoading, error } = useQuery({
    queryKey: ["fetch"],
    queryFn: () =>
      axios.get(`${api_fetch}/${token?.id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token?.token}`,
        },
      }),
  });

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
            .then((response) => { })
            .catch((err) => {
              console.log(err.message);
            });
          console.log(downloadURL);
        });
      }
    );
  };
  const fileRemove = (file) => {
    const updatedList = [...imageUpload];
    updatedList.splice(imageUpload.indexOf(file), 1);
    setImageUpload(updatedList);
    // props.onFileChange(updatedList);
  };
  const handleSetimageUpload = (e) => {
    // setImageUpload(URL.createObjectURL(e.target.files[0]));
    const selectedFiles = event.target.files;
    if (!selectedFiles.length) return; // Handle empty selection

    const newImages = [...imageUpload];

    for (const file of selectedFiles) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages.push(e.target.result);
        setImageUpload(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const SUPPORTED_VIDEO_FORMATS = ["video/mp4", "video/avi", "video/mov"];
  const MAX_VIDEO_SIZE = 50 * 1024 * 1024;

  const schema = yup.object().shape({
    // video: yup.string().required(),
    // productName: yup.string().required(),
    // price: yup.string().required(),
    // categories: yup.string().required("Category is required"),
    // description: yup.string().required("Description is required"),
    // state: yup.string().required("State is required"),
    // localGovernment: yup.string().required("Local Government is required"),
    // picture: yup
    //   .mixed()
    //   .test(
    //     "required",
    //     "You need to provide more then one  image ",
    //     (value) => {
    //       return value && value.length;
    //     }
    //   )
    //   // .test("fileSize", "The file is too large", (value, context) => {
    //   //     return value && value[0] && value[0].size <= 200000;
    //   // })
    //   .test("type", "We only support jpeg, ", function (value) {
    //     return (
    //       (value && value[0] && value[0].type === "image/jpeg") ||
    //       (value && value[0] && value[0].type === "image/png")
    //     );
    //   }),
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
    // const fileThumnaill = ref(storage, `Thumnail/${files.name}`)
    // const uploadThumnaill = uploadBytesResumable(fileThumnaill, files)
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
          const formData = new FormData();
          console.log(CategoriesValues);
          formData.append("categories", data.categories);
          formData.append("titlevideourl", downloadURL);
          formData.append("description", data.description);
          formData.append("price_range", data.price_range);
          formData.append("thumbnails", data.picture[0]);
          formData.append("productName", data.productName);

          formData.append('user_name', token?.user_name)
          // formData.append('aboutMe', profile?.data?.data[0].aboutMe)
          formData.append('whatapp', profile?.data?.data[0].whatapp)
          formData.append('user_phone', profile?.data?.data[0].user_phone)

          console.log(data.picture[0]);
          // formData.append("local_gov",data.local_gov);
          // formData.append("discount",data.discount);
          // formData.append("user_image",data.user_image)
          axios
            .post(api_freeads, formData, {
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
      {/* <div className="z-[999999999999999] fixed inset-0 bg-black bg-opacity-60">
          <Loader />
        </div> */}
      <div className="w-full">
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
              {/* <p className="text-red  text-sm">{errors.video?.message}</p> */}
            </div>
            <div>
              <select
                onChange={onChangecategories}
                id="categories"
                name="categories"
                {...register("categories", { required: true })}
                className="md:h-12 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              >
                {categories.map((option, index) => {
                  return (
                    <option key={index} value={option.name}>
                      {option.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {CategoriesValues}
            <div className="">
              <input
                type="file"
                {...register("picture")}
                onChange={handleSetimageUpload}
                className="w-full"
              />
              <p className="text-red  text-sm">{errors.picture?.message}</p>
              <div className="flex items-center justify-center gap-4 flex-wrap my-4">
                {imageUpload.map((imageUrl, index) => (
                  <div key={index} className="relative">
                    <img
                      src={imageUrl}
                      alt="Uploaded Image"
                      className="md:w-[200px] md:h-[200px] rounded-md object-cover"
                    />
                    <FaXmark
                      size={25}
                      color="#3D217A"
                      onClick={() => fileRemove(imageUrl)}
                      className="absolute top-2 right-2"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* {4 - imageUpload.length > 0 && Array.from({ length: 4 - imageUpload.length }).map((_, index) => (
                  <label key={index} htmlFor="dragOrDrop" className="cursor-pointer duration-300 hover:scale-110">
                    <div className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] rounded-md bg-slate-200 flex items-center justify-center">
                      <FaPlus size={25} />
                    </div>
                  </label>
                ))} */}
            <div>
              <input
                className="md:h-12 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="productName"
                name="productName"
                {...register("productName", { required: true })}
                type="text"
                placeholder="Product Name"
              />
            </div>

            <div>
              <input
                className="md:h-12 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                name="price"
                type="text"
                placeholder="Price"
                {...register("price", { required: true })}
              />
            </div>
            <p className="text-red  text-sm">{errors.price?.message}</p>
            <div>
              <select
                name="state"
                id="state"
                {...register("state", { required: true })}
                className="md:h-12 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
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
                className="md:h-12 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
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
              <textarea
                className="resize-none md:h-20 h-16 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="description"
                type="text"
                placeholder="Description"
                {...register("description", { required: true })}
              ></textarea>
            </div>
            {/* <p className="text-red pt-2" >{errors.description?.message}</p> */}
            <button
              type="sumbit"
              className="bg-[#3D217A] py-2 md:py-4 w-full text-white rounded-md font-bold"
            >
              Release Video Ad
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
