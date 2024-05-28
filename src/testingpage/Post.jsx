// import axiosclinet from "../https/axios-clinet";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { storage } from "../../firebase";
import { useStateContext } from "../contexts/ContextProvider";
import oneimage from "./Ellipse3.png";
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
import PostButtons from "../components/PostButtons.jsx";
import data from "../../state.json";
import Dropzone from 'react-dropzone';
import uploadImg from '../assests/cloud-upload-regular-240.png';
import { Toaster, toast } from 'sonner';

const api_freeads = import.meta.env.VITE_ADS_FREEADS;
//note after the success post upload reload the componetns
const Post = () => {
  // console.log(categories)
  const [categoriesValues, setCategoriesValues] = useState("");
  const [headlinevalues, setHeadlinesValue] = useState(headlines);
  const { user, setUser } = useStateContext();
  const [makepic, setmakepic] = useState("");
  const token = useStateContext();
  const [imageUpload, setImageUpload] = useState([]);
  // console.log(token?.token);
  const [files, setFile] = useState(null);
  const handleValues = (e) => {
    setCategoriesValues(e.target.value);
  };
  const schema = yup.object().shape({
    // price: yup.string().required(),
    // categories: yup.string().required(),
    // description: yup.string().required(),
    // headlines: yup.string().required(),
    // categories: yup.string().required(),
    // state: yup.string().required(),
    // localGovernment: yup.string().required(),
    picture: yup
      .mixed()
      .test(
        "required",
        "You need to provide more then one  image ",
        (value) => {
          return value && value.length;
        }
      )
      // .test("fileSize", "The file is too large", (value, context) => {
      //     return value && value[0] && value[0].size <= 200000;
      // })
      .test("type", "We only support jpeg, ", function (value) {
        return (
          (value && value[0] && value[0].type === "image/jpeg") ||
          (value && value[0] && value[0].type === "image/png")
        );
      }),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

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

  const dragOrClick = (images) => {
    const selectedFiles = images;
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
  }

  const imagesListRef = ref(storage, "images/");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Preview the selected image (optional)
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const [localGvt, setLocalGvt] = useState();
  const result = Object.entries(data.full);
  function selectState(e) {
    setLocalGvt();
    const selectedState = e.target.value;
    if (selectedState) {
      const filterState = result.filter((x) => {
        return x[0].toLowerCase() === selectedState.toLowerCase();
      });
      setLocalGvt(filterState[0][1]);
    } else {
      setLocalGvt([]);
    }
  }

  const formSubmit = (data) => {
    console.log(data.state, data.localGovernment, 'use state loca=', localGvt)
    console.log(makepic);
    const formData = new FormData();
    const myArray = [
      "Lagos",
      "lagos", // Case-sensitive
      "Oyo",
      "Abuja",
      "Ogun",
      "Rivers",
      "Kano",
    ];
    const randomIndex = Math.floor(Math.random() * myArray.length);

    // Access the random string using the index
    const randomString = myArray[randomIndex];

    formData.append("titleImageurl", data.picture[0]);
    formData.append("headlines", data.headlines);
    formData.append("categories", data.categories);
    formData.append("description", data.description);
    formData.append("price_range", data.price);
    formData.append("state", data.state);
    formData.append("local_gov", data.localGovernment);
    formData.append("user_image", token?.token.profileImage);
    axios
      .post(api_freeads, formData, {
        headers: {
          // Accept: "application/json",
          Accept: "application/vnd.api+json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token?.token.token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("worked");
          console.log(res.data.item);
          return res.data.item;
        } else if (res.status === 500 || res.status === 401) {
          console.log(res.data.message);
        }
      })
      .then((response) => {
        console.log(response);
        for (let i = 0; i < data.picture.length; i++) {
          const imageRef = ref(
            storage,
            `/mulitpleFiles/${data.picture[i].name} ${token?.token.user}`
          );
          const uploadTask = uploadBytesResumable(imageRef, data.picture[i]);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
                console.log("these are the images  ", [downloadURL]);
                const second_payload = {
                  itemadsimagesurls: downloadURL,
                  id: token?.token.id,
                };
                axios
                  .post(`${api_freeads}/${response}`, second_payload, {
                    headers: {
                      // Accept: "application/json",
                      Accept: "application/vnd.api+json",
                      Authorization: `Bearer ${token?.token.token}`,
                    },
                  })
                  .then((res) => {
                    if (res.status === 200) {
                      console.log("worked with second ...................");
                      console.log(res.data.item);
                    } else if (res.status === 500 || res.status === 401) {
                      console.log(res.data.message);
                    }
                  })
                  .catch((err) => console.log(err.message));
              });
            }
          );
        }
      })
      .catch((err) => console.log(err.message));
  };
  if (errors.picture) {
    toast.error(errors.picture?.message);
  }
  if (errors.categories) {
    toast.error(errors.categories?.message)
  }
  if (errors.description) {
    toast.error(errors.description?.message)
  }
  if (errors.headlines) {
    toast.error(errors.headlines?.message)
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="px-4 lg:px-40">
        <PostButtons />
        {/* <h1 className="my-5 lg:text-3xl lg:font-bold font-['poppins']">
          UPLOAD YOUR DETAILS TO MYPROMOSPHERE
        </h1> */}
        <form onSubmit={handleSubmit(formSubmit)} encType="multipart/form-data" action="#">
          <Dropzone onDrop={acceptedFiles => dragOrClick(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section className="flex justify-center items-center border-2 border-[#3D217A] border-dashed rounded-2xl">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className="text-center py-2">
                    <img src={uploadImg} className="mx-auto" alt="" />
                    <p className="text-sm">Drag &apos;n&apos; drop some files here, or <span className="underline">click</span> to select files</p>
                  </div>
                </div>
              </section>
            )}
          </Dropzone>
          {/* <input
            type="file"
            {...register("picture")}
            multiple
            id="photo-upload"
            onChange={handleSetimageUpload}
            className="hidden"
          /> */}
          <div className="flex gap-4 flex-wrap my-3">
            {imageUpload.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt="Uploaded Image"
                className="w-[150px] h-[150px] rounded-md"
                width={"200px"}
                height={"200px"}
              />
            ))}
          </div>
          <select
            {...register("categories")}
            // onChange={handleValues}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            {categories.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
          {/* <p className="text-red-600  text-sm">{errors.categories?.message}</p> */}
          <div>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="price"
            />
          </div>
          {/* <p className="text-red pt-2">{errors.categories?.message}</p> */}
          <div>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="description"
              {...register("description", { required: true })}
            />
          </div>
          {/* <p className="text-red pt-2">{errors.description?.message}</p> */}
          <div>
            <select
              {...register("state")}
              name=""
              id=""
              {...register("state", { required: true })}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
              onChange={selectState}
            >
              <option value="">--Select State--</option>
              {data.States.map((state, i) => (
                <option key={i} value={state}>{state.state}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              {...register("localGovernment")}
              name=""
              {...register("localGovernment", { required: true })}
              id=""
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
            >
              <option value="">--Select Local Government--</option>
              {localGvt && localGvt.map((x, i) => <option key={i} >{x.lga}</option>)}
            </select>
          </div>
          <div>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="NEW COMING GOING  headlines"
              {...register("headlines", { required: true })}
            />
          </div>
          {/* <p className="text-red pt-2">{errors.headlines?.message}</p> */}
          <div>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-ou
                    tline"
              id="password"
              type="text"
              placeholder="******************"
            />
          </div>
          <button type="submit" className="bg-[#3D217A] py-2 md:py-4 w-full text-white rounded-md">
            Post Normal Ad
          </button>
        </form>
      </div>
    </>
  );
};

export default Post;

{
  /* <ImageUploader
multiple
onFileAdded={(img) => getImageFileObject(img)}
onFileRemoved={(img) => runAfterImageDelete(img)}
/> */
}
//   //  uploadFiles()
//   function getImageFileObject(imageFile) {
//     console.log({ imageFile })
// }

// function runAfterImageDelete(file) {
//     console.log({ file })
// }

{
  /* 
            <select className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                {headlines.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
                onChange={(event) => {
                    setHeadlinesValue(event.target.value);
                }}
            </select> */
}
