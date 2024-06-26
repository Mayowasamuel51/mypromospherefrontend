// import axiosclinet from "../https/axios-clinet";
import PropTypes from 'prop-types';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import React, { useCallback } from 'react'
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
import { FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import Loader from '../loader.jsx';

const api_freeads = import.meta.env.VITE_ADS_FREEADS;
//note after the success post upload reload the componetns
const Post = () => {
  const queryClient = useQueryClient()
  const [categoriesValues, setCategoriesValues] = useState("");
  const [headlinevalues, setHeadlinesValue] = useState(headlines);
  const { user, setUser } = useStateContext();
  const [makepic, setmakepic] = useState("");
  const { token } = useStateContext();
  const [imageUpload, setImageUpload] = useState([]);
  const [files, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleValues = (e) => {
    setCategoriesValues(e.target.value);
  };

  const SUPPORTED_FORMATS = ["image/jpeg", "image/png"];

  const schema = yup.object().shape({
    price: yup.string().required("Price is required"),
    categories: yup.string().required("Category is required"),
    description: yup.string().required("Description is required"),
    // headlines: yup.string().required("Headline is required"),
    state: yup.string().required("State is required"),
    localGovernment: yup.string().required("Local Government is required"),
    picture: yup
      .mixed()
      .test(
        "required",
        "You need to provide more than one image ",
        (value) => {
          return value && value.length > 1;
        }
      )
      // .test("fileSize", "The file is too large", (value, context) => {
      //   return value && value[0] && value[0].size <= 200000;
      // })
      .test("type", "We only support jpeg and png", (value) =>
        value ? SUPPORTED_FORMATS.includes(value[0].type) : true
      ),
  });
  

  const [testfile, setTestFile] = useState(null)

  function handleChange(e) {
    console.log(e.target.files);
    setTestFile(URL.createObjectURL(e.target.files[0]));
  }

  const dragOrClick = (images) => {
    const selectedFiles = images;
    if (!selectedFiles.length) return;
    const newImages = [...imageUpload];
    for (const file of selectedFiles) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages.push(e.target.result);
        setTestFile(newImages)
        setImageUpload(newImages);
      };
      reader.readAsDataURL(file);
    }

  }

  const fileRemove = (file) => {
    const updatedList = [...imageUpload];
    updatedList.splice(imageUpload.indexOf(file), 1);
    setImageUpload(updatedList);
  }

  const imagesListRef = ref(storage, "images/");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

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

  // const formSubmit = (data) => {
  //   console.log("i was clicked")
  //   setLoading(true)
  //   console.log(data.state, data.localGovernment, 'use state loca=', localGvt)
  //   console.log(makepic);
  //   const formData = new FormData();
  //   const myArray = [
  //     "Lagos",
  //     "lagos", // Case-sensitive
  //     "Oyo",
  //     "Abuja",
  //     "Ogun",
  //     "Rivers",
  //     "Kano",
  //   ];
  //   const randomIndex = Math.floor(Math.random() * myArray.length);

  //   // Access the random string using the index
  //   const randomString = myArray[randomIndex];
  //   formData.append("titleImageurl", data.picture[0]);
  //   formData.append("headlines", data.headlines);
  //   formData.append("categories", data.categories);
  //   formData.append("description", data.description);
  //   formData.append("price_range", data.price);
  //   formData.append("state", data.state);
  //   formData.append("local_gov", data.localGovernment);
  //   formData.append("user_image", token?.token.profileImage);
  //   axios
  //     .post(api_freeads, formData, {
  //       headers: {
  //         // Accept: "application/json",
  //         Accept: "application/vnd.api+json",
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${token?.token.token}`,
  //       },
  //     })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         console.log("worked");
  //         console.log(res.data.item);
  //         setLoading(false)
  //         return res.data.item;

  //       } else if (res.status === 500 || res.status === 401) {
  //         setLoading(false)
  //         console.log(res.data.message);
  //       }
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       for (let i = 0; i < data.picture.length; i++) {
  //         const imageRef = ref(
  //           storage,
  //           `/mulitpleFiles/${data.picture[i].name} ${token?.token.user}`
  //         );
  //         const uploadTask = uploadBytesResumable(imageRef, data.picture[i]);
  //         uploadTask.on(
  //           "state_changed",
  //           (snapshot) => {
  //             // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //             const progress =
  //               (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //             console.log("Upload is " + progress + "% done");
  //             switch (snapshot.state) {
  //               case "paused":
  //                 console.log("Upload is paused");
  //                 break;
  //               case "running":
  //                 console.log("Upload is running");
  //                 break;
  //             }
  //           },
  //           (error) => {
  //             // A full list of error codes is available at
  //             // https://firebase.google.com/docs/storage/web/handle-errors
  //             switch (error.code) {
  //               case "storage/unauthorized":
  //                 // User doesn't have permission to access the object
  //                 break;
  //               case "storage/canceled":
  //                 // User canceled the upload
  //                 break;
  //               // ..
  //               case "storage/unknown":
  //                 // Unknown error occurred, inspect error.serverResponse
  //                 break;
  //             }
  //           },
  //           () => {
  //             // Upload completed successfully, now we can get the download URL
  //             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //               console.log("these are the images  ", [downloadURL]);
  //               const second_payload = {
  //                 itemadsimagesurls: downloadURL,
  //                 id: token?.token.id,
  //               };
  //               axios
  //                 .post(`${api_freeads}/${response}`, second_payload, {
  //                   headers: {
  //                     // Accept: "application/json",
  //                     Accept: "application/vnd.api+json",
  //                     Authorization: `Bearer ${token?.token.token}`,
  //                   },
  //                 })
  //                 .then((res) => {
  //                   if (res.status === 200) {
  //                     console.log("worked with second ...................");
  //                     console.log(res.data.item);
  //                   } else if (res.status === 500 || res.status === 401) {
  //                     console.log(res.data.message);
  //                   }
  //                 })
  //                 .catch((err) => console.log(err.message));
  //             });
  //           }
  //         );
  //       }
  //     })
  //     .catch((err) => console.log(err.message));
  // };

  // const { register, formState: { errors }, handleSubmit, reset} = useForm({
  //   resolver: yupResolver(schema),
  // });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const uploadPostMutation = useMutation({
    mutationFn: payload => {
      try {
        const response = axios.post(api_freeads, payload, {
          headers: {
            Authorization: `Bearer ${token?.token}`,
          },
        });
        console.log('Response:', response);
        return response;
      } catch (error) {
        console.error('Error uploading post:', error);
      }
    },
  })

  // const onSubmit = (data) => {
  //   console.log("working")
  //   uploadPostMutation.mutate({
  //     titleImageurl: data.picture[0],
  //     categories: data.categories,
  //     description: data.description,
  //     price_range: data.price,
  //     state: data.state,
  //     local_gov: data.localGovernment,
  //     user_image: token?.profileImage,
  //   })
  // }

  const onSubmit = (data) => console.log(data)

  // if (errors.categories) {
  //   toast.error(errors.categories?.message)
  // }
  // if (errors.description) {
  //   toast.error(errors.description?.message)
  // }
  // if (errors.headlines) {
  //   toast.error(errors.headlines?.message)
  // }

  return (
    <>
      <Toaster position="top-center" />
      {loading &&
        <div className="z-[999999999999999] fixed inset-0 bg-black bg-opacity-60">
          <Loader />
        </div>
      }
      <div className="px-4 lg:px-40">
        <PostButtons />
        <h1 className="my-5 lg:text-2xl lg:font-semibold text-center">
          UPLOAD YOUR DETAILS TO MYPROMOSPHERE
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <Dropzone onDrop={acceptedFiles => dragOrClick(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section className="flex justify-center items-center border-2 border-purple border-dashed rounded-2xl">
                  <div {...getRootProps()}>
                    <input id="dragOrDrop" {...getInputProps()} />
                    <div className="text-center py-4">
                      <img src={uploadImg} className="mx-auto w-[100px] md:w-[200px]" alt="" />
                      <p className="font-semibold text-xs">Drag &apos;n&apos; drop some files here, or <span className="underline">click</span> to select files</p>
                    </div>
                  </div>
                </section>
              )}
            </Dropzone>
            <div className="flex items-center justify-center gap-4 flex-wrap my-4">
              {imageUpload.map((imageUrl, index) => (
                <div key={index} className="relative">
                  <img
                    src={imageUrl}
                    alt="Uploaded Image"
                    className="md:w-[200px] md:h-[200px] rounded-md object-cover"
                  />
                  <FaXmark size={25} color='#3D217A' onClick={() => fileRemove(imageUrl)} className="absolute top-2 right-2" />
                </div>
              ))}
              {4 - imageUpload.length > 0 && Array.from({ length: 4 - imageUpload.length }).map((_, index) => (
                <label key={index} htmlFor="dragOrDrop" className="cursor-pointer duration-300 hover:scale-110">
                  <div className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] rounded-md bg-slate-200 flex items-center justify-center">
                    <FaPlus size={25} />
                  </div>
                </label>
              ))}
            </div>
            <select
              {...register("categories")}
              // onChange={handleValues}
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


            <div>
              <input
                className="md:h-14 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-ou
                      tline"
                id="productName"
                type="text"
                placeholder="Product Name"
              />
            </div>


            {/* <p className="text-red-600  text-sm">{errors.categories?.message}</p> */}
            <div>
              <input
                className="md:h-14 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="price"
              />
            </div>
            {/* <p className="text-red pt-2">{errors.categories?.message}</p> */}

            <div>
              <select
                {...register("state")}
                name=""
                id=""
                {...register("state", { required: true })}
                className="md:h-14 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
                onChange={(e) => selectState(e)}
              >
                <option value="">--Select State--</option>
                {data.States.map((state, i) => (
                  <option key={i} value={state.state}>{state.state}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                {...register("localGovernment")}
                name=""
                {...register("localGovernment", { required: true })}
                id=""
                className="md:h-14 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
              >
                <option value="">--Select Local Government--</option>
                {localGvt && localGvt.map((x, i) => <option key={i} >{x.lga}</option>)}
              </select>
            </div>

            <div>
              <select
                className="md:h-14 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
              >
                <option value="">Discount</option>
                <option value="">Yes</option>
                <option value="">No</option>

              </select>
            </div>

            <div>
              <textarea
                className="md:h-14 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="description"
                {...register("description", { required: true })}
              />
            </div>

            
          </div>
          <button type="submit" className="bg-purple py-2 md:py-4 w-full text-white rounded-md">
            Post Normal Ad
          </button>
        </form>
      </div>
    </>
  );
};

export default Post;


{/* <div>
              <input
                className="md:h-14 h-10 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="NEW COMING GOING  headlines"
                {...register("headlines", { required: true })}
              />
            </div> */}
{/* <p className="text-red pt-2">{errors.headlines?.message}</p> */ }