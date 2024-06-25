// import axiosclinet from "../https/axios-clinet";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import React, { useCallback } from "react";
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
import "react-image-upload/dist/index.css";
import { headlines } from "../../src/json/headlines.jsx";
import PostButtons from "../components/PostButtons.jsx";
import data from "../../state.json";
import Dropzone from "react-dropzone";
import { Toaster, toast } from "sonner";
import { FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loader from "../loader.jsx";

const api_edit_profile_endpoint = import.meta.env.VITE_EDIT_PROFILE;
const api_freeads = import.meta.env.VITE_ADS_FREEADS;
const api_fetch = import.meta.env.VITE_EDIT_PROFILE;
//note after the success post upload reload the componetns
const Post = () => {
  const queryClient = useQueryClient();
  const [categoriesValues, setCategoriesValues] = useState("");
  const [headlinevalues, setHeadlinesValue] = useState(headlines);
  const { user, setUser } = useStateContext();
  const [makepic, setmakepic] = useState("");
  const { token } = useStateContext();
  const [imageUpload, setImageUpload] = useState([]);
  const [files, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const imagesListRef = ref(storage, "images/");
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [localGvt, setLocalGvt] = useState();
  const result = Object.entries(data.full);
  const [userEditProfile, setUserEditProfile] = useState([])


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

  const [profileedit , setProfileEdit ] = useState({
    brandName:profile?.data?.data[0].brandName,
    aboutMe:profile?.data?.data[0].aboutMe,
    whatapp:profile?.data?.data[0].whatapp,
    user_phone:profile?.data?.data[0].user_phone,
    websiteName:profile?.data?.data[0].websiteName
  })

  // console.log( profile.data.data.aboutMe    )
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
  //   formData.append("titleImage", data.picture[0]);
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
  const [uploadData, setUploadData] = useState({
    images: [] || null,
    category: "",
    productName: "",
    description: "",
    price_range: "",
    state: "",
    discount: "",
    local_gov: "",
    aboutMe: token?.aboutMe,
    whatapp: token?.whatapp,
    user_phone: token?.user_phone,
    backgroundimage: token?.backgroundimage,
    user_image: token?.profileImage,
  });
  useEffect(() => {
    if (uploadData?.state) {
      const filterState = result.filter(
        (x) => x[0].toLowerCase() === uploadData?.state.toLowerCase()
      );
      if (filterState.length > 0) {
        setLocalGvt(filterState[0][1]);
      }
    }
  }, [uploadData?.state]);
  const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/webp", "image/"];
  const handleInputChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    setUploadData((prevState) => {
      if (name === "images") {
        const selectedFilesArray = Array.from(files);
        setSelectedFiles(selectedFilesArray);
        if (!selectedFilesArray.length) return;
        const newImages = [...imageUpload];
        selectedFilesArray.forEach((image) => {
          if (SUPPORTED_FORMATS.includes(image.type)) {
            const reader = new FileReader();
            reader.onload = (e) => {
              newImages.push({
                url: e.target.result,
                type: image.type,
                name: image.name,
              });
              selectedFilesArray.forEach((image) => {
                console.log(image);
                if (newImages.length < 5) {
                  setImageUpload(newImages);
                  console.log("new image", newImages)
                  console.log("image upload", imageUpload)
                  return {
                    ...prevState,
                    images: selectedFilesArray,
                  };
                } else {
                  toast.error("You can only upload four images");
                }
              });
            };
            reader.readAsDataURL(image);
          } else {
            toast.error("Invalid file Format");
            return {
              ...prevState,
              images: selectedFilesArray.filter((image) =>
                SUPPORTED_FORMATS.includes(image.type)
              ),
            };
          }
        });
        return {
          ...prevState,
          images: selectedFilesArray.filter((image) =>
            SUPPORTED_FORMATS.includes(image.type)
          ),
        };
      } else if (type === "checkbox") {
        return {
          ...prevState,
          [name]: checked,
        };
      } else {
        return {
          ...prevState,
          [name]: value,
        };
      }
    });
  };
  const fileRemove = (file) => {
    setImageUpload((prevImages) =>
      prevImages.filter((img) => img.name !== file.name)
    );
    // setUploadData()
  };
  // console.log("image upload",imageUpload)

  const uploadPostMutation = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await axios.post(api_freeads, payload, {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token?.token}`,
          },
        });
        // console.log(response.data.item);
        // for (let i = 0; i < imageUpload.length; i++) {
        uploadData?.images.forEach((image) => {
          const imageRef = ref(
            storage,
            `/newuploads/${image.name} ${token?.user}`
          );
          const uploadTask = uploadBytesResumable(imageRef, image);
          // console.log(image)
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
                  .post(`${api_freeads}/${response.data.item}`, second_payload, {
                    headers: {
                      // Accept: "application/json",
                      Accept: "application/vnd.api+json",
                      Authorization: `Bearer ${token?.token}`,
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
        )

        // const second_repsone = await axios.post();
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trendingAds"] });
      queryClient.invalidateQueries({ queryKey: ["userPost"] });
      toast.success("You have just made a post");
      setUploadData((prev) => ({
        ...prev,
        images: null,
        category: "",
        productName: "",
        description: "",
        price_range: "",
        state: "",
        discount: "",
        local_gov: "",
        aboutMe: token?.aboutMe,
        whatapp: token?.whatapp,
        user_phone: token?.user_phone,
        backgroundimage: token?.backgroundimage,
        user_image: token?.profileImage,
      }));
      setImageUpload([]);
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to upload post");
    },
  });
  const uploadPost = (e) => {
    e.preventDefault();
    if (imageUpload?.length > 5) {
      toast.error(`You can upload a maximum of 5 images.`);
      return;
    }
    if (!imageUpload || imageUpload?.length === 0) {
      toast.error("Please select at least one image.");
      return;
    }
    imageUpload?.forEach((image) => {
      if (!SUPPORTED_FORMATS.includes(image.type)) {
        toast.error(`Unsupported image format: ${image.name}`);
        return;
      }
      return;
    });
    if (!uploadData?.productName) {
      toast.error("You have not added your product name.");
      return;
    }
    if (!uploadData?.category) {
      toast.error("Category is required.");
      return;
    }
    if (!uploadData?.description) {
      toast.error("Description is required.");
      return;
    }
    if (!uploadData?.price_range) {
      toast.error("Price range is required.");
      return;
    }
    if (!uploadData?.state) {
      toast.error("State is required.");
      return;
    }
    if (!uploadData?.local_gov) {
      toast.error("Local government is required.");
      return;
    }
    if (!uploadData?.discount) {
      toast.error("Discount is required.");
      return;
    }
    const formData = new FormData();
    uploadData?.images.forEach((image, index) => {
      if (index === 0) {
        console.log(image.name);
        formData.append(`titleImageurl`, image);
      } else {
        console.log(image);
      }
    });
    formData.append('user_name', token?.user_name)
    formData.append('aboutMe', profile?.data?.data[0].aboutMe)
    formData.append('whatapp', profile?.data?.data[0].whatapp)
    formData.append('user_phone', profile?.data?.data[0].user_phone)
    
    
    formData.append("categories", uploadData?.category);
    formData.append("description", uploadData?.description);
    formData.append("price_range", uploadData?.price_range);
    formData.append("state", uploadData?.state);
    formData.append("local_gov", uploadData?.local_gov);
    formData.append("discount", uploadData?.discount);
    formData.append("user_image", uploadData?.user_image);
    formData.append('productName', uploadData?.productName)
    uploadPostMutation.mutate(formData);
  };

 
  return (
    <>
      <Toaster position="top-center" />
      {uploadPostMutation.isPending && (
        <div className="z-[999999999999999] fixed inset-0 bg-black bg-opacity-60">
          <Loader />
        </div>
      )}
      <div className="">
        <PostButtons />
        <h1 className="my-5 lg:text-2xl lg:font-semibold text-center">
          UPLOAD YOUR DETAILS TO MYPROMOSPHERE
        </h1>
        <form
          onSubmit={(e) => uploadPost(e)}
          encType="multipart/form-data"
          action="#"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="">
              <input
                type="file"
                multiple
                onChange={handleInputChange}
                name="images"
                id="images"
                className="hidden"
              />
            </label>
            <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
              {imageUpload.map((image, index) => (
                <div
                  key={index}
                  className={`relative ${image?.type === "image/jpeg" || image?.type === "image/png"
                    ? ""
                    : "border-2 border-red"
                    }`}
                >
                  <img
                    src={image.url}
                    alt={`${image?.type === "image/jpeg" ||
                      image?.type === "image/png"
                      ? "Uploaded Image"
                      : `Please Remove wrong image format`
                      }`}
                    className=":w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-md object-cover"
                  />
                  <FaXmark
                    size={25}
                    color="#3D217A"
                    onClick={() => fileRemove(image)}
                    className="absolute top-2 right-2"
                  />
                </div>
              ))}
              {5 - imageUpload.length > 0 &&
                Array.from({ length: 5 - imageUpload.length }).map(
                  (_, index) => (
                    <label
                      key={index}
                      htmlFor="images"
                      className="cursor-pointer duration-300 hover:scale-110"
                    >
                      <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-md bg-slate-200 flex items-center justify-center">
                        <FaPlus size={25} />
                      </div>
                    </label>
                  )
                )}
            </div>
            <select
              onChange={handleInputChange}
              value={uploadData?.category || ""}
              name="category"
              id="category"
              className="md:h-12 h-10 bg-slate-100 dark:bg-inputDark appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
            >
              <option value="">--Select a Category--</option>
              {categories.map((option, index) => {
                return (
                  <option key={index} value={option.name}>
                    {option.name}
                  </option>
                );
              })}
            </select>
            <div>
              <input
                className="md:h-12 h-10 bg-slate-100 dark:bg-inputDark appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
                id="productName"
                name="productName"
                type="text"
                onChange={handleInputChange}
                value={uploadData?.productName || ""}
                placeholder="Product Name"
              />
            </div>
            <div>
              <input
                className="md:h-12 h-10 bg-slate-100 dark:bg-inputDark appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
                id="price_range"
                name="price_range"
                onChange={handleInputChange}
                value={uploadData?.price_range || ""}
                type="text"
                placeholder="price"
              />
            </div>
            <div>
              <select
                name="state"
                id="state"
                className="md:h-12 h-10 bg-slate-100 dark:bg-inputDark appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
                onChange={handleInputChange}
                value={uploadData?.state || ""}
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
                id="local_gov"
                name="local_gov"
                value={uploadData?.local_gov || ""}
                onChange={handleInputChange}
                className="md:h-12 h-10 bg-slate-100 dark:bg-inputDark appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
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
              <select
                id="discount"
                name="discount"
                onChange={handleInputChange}
                value={uploadData?.discount || ""}
                className="md:h-12 h-10 bg-slate-100 dark:bg-inputDark appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
              >
                <option value="">Discount</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <textarea
                className="resize-none md:h-20 h-16 bg-slate-100 dark:bg-inputDark appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
                id="description"
                name="description"
                onChange={handleInputChange}
                value={uploadData?.description || ""}
                type="text"
                placeholder="description"
              />
            </div>
          </div>
          <button
            type="submit"

            className="bg-purple py-2 md:py-4 w-full text-white rounded-md font-bold"
          >
            Promote
          </button>
        </form>
      </div>
    </>
  );
};

export default Post;
