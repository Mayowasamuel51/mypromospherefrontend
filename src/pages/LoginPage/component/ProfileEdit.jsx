import React, { useRef } from "react";
import blankImage from "../../../assests/images/blank Image.png";
// import axiosclinet from "../https/axios-clinet";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { storage } from "../../../../firebase";
import { useStateContext } from "../../../contexts/ContextProvider";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axiosclinet from "../../../https/axios-clinet";

const api_edit_profile_endpoint = import.meta.env.VITE_EDIT_PROFILE;
const api_edit_profile_put_endpoint = import.meta.env.VITE_EDIT_PROFILE_PUT;
const api_backgroundimage = import.meta.env.VITE_EDIT_BACKGROUND;
/*
1) Able to update the profile images (Done)
2) Able to view image after uploading in real time 
3) Able to change Image anytime (Done)
4) Error input validation form 
5) Change all fetch to reactquery 
6) Timi i am setting the Id manueliy ,make it automatic please
*/

const ProfileEdit = () => {
  const { user, setUser } = useStateContext();
  const inputRef = useRef(null);
  const secoundRef = useRef(null);
  const [image, setImage] = useState("");
  const [background, setBackground] = useState("");
  const [backgroundImage, setBackgroundImage] = useState([]);
  const [data, setData] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files;
    const profilePhoto = e.target.files[0];
    setImage(profilePhoto);
  };

  const backgroundHandle = (e) => {
    const file = e.target.files;
    const profilePhot = e.target.files[0];
    setBackground(profilePhot);
  };

  const deleteImage = () => {
    setImage("");
  };

  const schema = yup.object().shape({
    // aboutMe: yup.string().required(),
    // messageCompany: yup.string().required(),
    // brandName: yup.string().required("Please enter your Brand Name"),
    // websiteName: yup.string().required(),
    // picture: yup
    //   .mixed()
    //   .test(
    //     "required",
    //     "You need to provide more than one image",
    //     (value) => {
    //       return value && value.length;
    //     }
    //   )
    // .test("fileSize", "The file is too large", (value, context) => {
    //     return value && value[0] && value[0].size <= 200000;
    // })
    // .test("type", "We only support jpeg, ", function (value) {
    //   return (
    //     (value && value[0] && value[0].type === "image/jpeg") ||
    //     (value && value[0] && value[0].type === "image/png")
    //   );
    // }),
  });
  const { token } = useStateContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const formSubmit = (data) => {
    // e.preventDefault();
    console.log(data);
    console.log(image.name);
    console.log("hello");
    const imageRef = ref(storage, `/profile/${image.name} ${token?.user}`);
    const uploadTask = uploadBytesResumable(imageRef, image);
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
          const payload = {
            profileImage: downloadURL,
            aboutMe: data.aboutMe,
            brandName: data.brandName,

            websiteName: data.websiteName,
            messageCompany: "i sell anything goood ",
          };
          console.log("Updated edit profile successfully", [downloadURL]);
          axios
            .put(`${api_edit_profile_put_endpoint}${token?.id}`, payload, {
              headers: {
                Accept: "application/json",
                // "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token?.token}`,
              },
            })
            .then((res) => {
              if (res.data.status === 200) {
                console.log("updated the profile image ...................");
                console.log(res.data.item);
              } else if (res.data.status === 500 || res.data.status === 422) {
                console.log(res.data.message);
              }
            })
            .catch((err) => console.log(err.message));
        });
      }
    );
  };

  const formSubmit1 = (data) => {
    // e.preventDefault();

    console.log("hello formsumbit 21");
    const imageRef = ref(storage, `/profile/${background.name} ${token?.user}`);
    const uploadTask = uploadBytesResumable(imageRef, background);
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
          const payload = {
            backgroundimage: downloadURL,
            messageCompany: "backgroundImage ",
          };
          console.log("Updated edit profile successfully", [downloadURL]);
          axios
            .put(`${api_backgroundimage}${token?.id}`, payload, {
              headers: {
                Accept: "application/json",
                // "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token?.token}`,
              },
            })
            .then((res) => {
              if (res.data.status === 200) {
                console.log("updated the profile image ...................");
                console.log(res.data.item);
              } else if (res.data.status === 500 || res.data.status === 422) {
                console.log(res.data.message);
              }
            })
            .catch((err) => console.log(err.message));
        });
      }
    );
  };

  useEffect(() => {
    axios(`${api_edit_profile_endpoint}/${token?.id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token?.token}`,
      },
    }).then((res) => {
      if (res.data.status === 200) {
        console.log(res.data.data);
        setData(res.data.data);
        setBackgroundImage(res.data.data);
      }
    });

    console.log("seeing things./////////////");
  }, []);

  return (
    <section className="">
      <header>
        <h3 className="font-600 md:text-xl text-xl">Edit Profile</h3>
        <p className="font-400">Set up your presence and hiring needs</p>
        {/* upload-image  */}
      </header>
      {/* form  */}
      <article className="">
        <form onSubmit={handleSubmit(formSubmit1)}>
          <h1>Backgrond Image</h1>
          <article className="flex items-center">
            {/* image  */}
            {backgroundImage.map((item) => {
              return (
                <div key={item.id}>
             

                  {background ? (
                    <img
                      src={URL.createObjectURL(background)}
                      alt="profilephoto"
                      className="w-[88px] h-[84.56px] rounded-[5rem]"
                    />
                  ) : (
                    <img
                      // src={blankImage}
                      alt="blankImage"
                      src={item.backgroundimage}
                      className="w-[80px]"
                    />
                  )}
                  {/* btns  */}
                  <div className="flex gap-x-[.5rem] items-center">
                    {/* upload button */}
                    <button className="relative cursor-pointer ml-[.4rem]">
                      <input
                        type="file"
                        className="relative z-20 opacity-[0] cursor-pointer"
                        ref={secoundRef}
                        onChange={backgroundHandle}
                      />
                      {/* upload  */}
                      <button
                        className={`flex gap-x-2 border px-3 py-2 rounded-md absolute top-[-.3rem] left-0 z-10 cursor-pointer`}
                      >
                        <h3>Upload Background Image</h3>
                      </button>
                      {/* end of upload  */}
                    </button>
                  </div>
                </div>
              );
            })}
          </article>
          <button
            type="submit"
            className="bg-[#3D217A] py-2 md:py-4 w-full text-white rounded-md mt-2"
          >
            Change Backgorund Image
          </button>
        </form>
        <form onSubmit={handleSubmit(formSubmit)}>
          <article className="flex items-center">
            {/* image  */}
            {data.map((item) => {
              return (
                <div key={item.id}>
                  {/* {item.profileImage ? (
                    <img
                      href={item.profileImage}
                      src={item.profileImage}
                      className="w-[88px] h-[84.56px] rounded-[5rem]"
                    />
                  ) : (
                    ""
                  )} */}

                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="profilephoto"
                      className="w-[88px] h-[84.56px] rounded-[5rem]"
                    />
                  ) : (
                    <img
                      // src={blankImage}
                      alt="blankImage"
                      src={item.profileImage}
                      className="w-[80px]"
                    />
                  )}
                  {/* btns  */}
                  <div className="flex gap-x-[.5rem] items-center">
                    {/* upload button */}
                    <button className="relative cursor-pointer ml-[.4rem]">
                      <input
                        type="file"
                        className="relative z-20 opacity-[0] cursor-pointer"
                        ref={inputRef}
                        onChange={handleImageChange}
                      />
                      {/* upload  */}
                      <button
                        className={`flex gap-x-2 border px-3 py-2 rounded-md absolute top-[-.3rem] left-0 z-10 cursor-pointer`}
                      >
                        <h3>Upload new picture</h3>
                      </button>
                      {/* end of upload  */}
                    </button>
                    {/* end of upload-button  */}
                    {/* delete  */}
                    {/* <button
                      className="bg-[#D9D9D9] text-[.8rem] smd:text-[1rem] h-[3.2rem] px-4 rounded-md"
                      onClick={deleteImage}>
                      <p>Delete</p>
                    </button> */}
                  </div>
                </div>
              );
            })}
          </article>
          <br /> <br />
          <br />
          <br />
          <div className="">
            <label htmlFor="About" className="font-600">
              About
            </label>{" "}
            <br />
            <input
              type="text"
              className="border border-[#3D217A] mt-1 w-[100%] focus:outline-none p-3 text-[1rem] rounded-md pb-20 placeholder:text-black "
              placeholder="Tell Us About You"
              {...register("aboutMe", { required: true })}
            />
            <p className="text-red  text-sm">{errors.aboutMe?.message}</p>
          </div>
          {/* Website  */}
          <div className="">
            <label htmlFor="website" className="font-600">
              Website
            </label>{" "}
            <br />
            <input
              type="text"
              className="border border-[#3D217A] mt-1 w-[100%] focus:outline-none p-3 text-[1rem] rounded-md placeholder:text-black"
              {...register("websiteName", { required: true })}
              placeholder="Add a link to drive traffic to your site "
            />
            <p className="text-red  text-sm">{errors.websiteName?.message}</p>
          </div>
          {/*Brand Name*/}
          <div className="">
            <label htmlFor="website" className="font-600">
              Brand Name
            </label>{" "}
            <br />
            <input
              type="text"
              className="border border-[#3D217A] mt-1 w-[100%] focus:outline-none p-3 text-[1rem] rounded-md placeholder:text-black"
              {...register("brandName", { required: true })}
            />
            <p className="text-red  text-sm">{errors.brandName?.message}</p>
          </div>
          <button
            type="submit"
            className="bg-[#3D217A] py-2 md:py-4 w-full text-white rounded-md mt-2"
          >
            Edit
          </button>
        </form>
      </article>
      {/* end of form  */}
    </section>
  );
};

export default ProfileEdit;
