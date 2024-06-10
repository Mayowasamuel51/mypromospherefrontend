import { useRef } from "react";
import blankImage from "../../../assests/images/blank Image.png";
import anon from "../../../assests/images/anon.png";
// import axiosclinet from "../https/axios-clinet";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { storage } from "../../../../firebase";
import { useStateContext } from "../../../contexts/ContextProvider";
import Loader from "../../../loader";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axiosclinet from "../../../https/axios-clinet";
import { toast, Toaster } from 'sonner';

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
  const [loading, setLoading] = useState(false)

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
    aboutMe: yup.string().required("Write what you want people to know about You and Your Business"),
    messageCompany: yup.string().required(),
    brandName: yup.string().required("Enter your Brand Name"),
    websiteName: yup.string().required(),
    picture: yup
      .mixed()
      .test(
        "required",
        "You need to provide more than one image",
        (value) => {
          return value && value.length;
        }
      )
      .test("fileSize", "The file is too large", (value, context) => {
        return value && value[0] && value[0].size <= 200000;
      })
      .test("type", "We only support jpeg & png, ", function (value) {
        return (
          (value && value[0] && value[0].type === "image/jpeg") ||
          (value && value[0] && value[0].type === "image/png")
        );
      }),
  });
  const { token } = useStateContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });
  const formSubmit = (data) => {
    // e.preventDefault();
    setLoading(true)
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
        setLoading(false)
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
                setLoading(false)
                console.log(res.data.item);
              } else if (res.data.status === 500 || res.data.status === 422) {
                console.log(res.data.message);
                setLoading(false)
              }
            })
            .catch((err) => console.log(err.message)); setLoading(false)
        });
      }
    );
  };

  const formSubmit1 = (data) => {
    // e.preventDefault();
    setLoading(true)
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
        setLoading(false)
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
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token?.token}`,
              },
            })
            .then((res) => {
              if (res.data.status === 200) {
                console.log("updated the profile image ...................");
                console.log(res.data.item);
                reset()
              } else if (res.data.status === 500 || res.data.status === 422) {
                console.log(res.data.message);
              }
            })
            .catch((err) => console.log(err.message)); setLoading(false)
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
        setLoading(false)
      }
    });
    console.log(data)
  }, []);


  if (errors?.aboutMe) {
    toast.error(errors?.aboutMe.message)
  }
  if (errors?.websiteName) {
    toast.error(errors?.websiteName.message)
  }
  if (errors?.brandName) {
    toast.error(errors?.brandName.message)
  }

  return (
    <section className="relative">
      <Toaster position="top-center" />
      {loading &&
        <div className="z-[999999999999999] fixed inset-0 bg-black bg-opacity-60">
          <Loader />
        </div>
      }
      <header>
        <h3 className="font-600 md:text-xl text-xl">Edit Profile</h3>
        <p className="font-400">Set up your presence and hiring needs</p>
      </header>
      {/* form  */}
      <article className="">
        <form onSubmit={handleSubmit(formSubmit1)}>
          <h1 className="font-medium my-1">👇Click to changeBackgrond Image</h1>
          <article className="flex items-center">
            <div>
              {background ? (
                <img
                  src={URL.createObjectURL(background)}
                  alt="Background-photo"
                  className="w-[100px] aspect-square rounded-full object-cover"
                />
              ) : (
                <label htmlFor="background-image">
                  <img
                    src={backgroundImage ? data[0]?.backgroundimage : blankImage}
                    alt="blankImage"
                    className="w-[100px] aspect-square rounded-full border duration-200 hover:scale-110 cursor-pointer"
                  />
                </label>
              )}
              <div className="flex gap-x-[.5rem] items-center">
                <button className="cursor-pointer">
                  <input
                    type="file"
                    id="background-image"
                    className="cursor-pointer hidden"
                    ref={secoundRef}
                    onChange={backgroundHandle}
                  />
                </button>
              </div>
            </div>
          </article>
          <button type="submit" className="bg-[#3D217A] py-2 md:py-4 w-full text-white rounded-md my-2">
            Change Backgorund Image
          </button>
        </form>
        <form onSubmit={handleSubmit(formSubmit)}>
          <article className="flex items-center">
            <div>
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="profilephoto"
                  className="w-[100px] aspect-square rounded-full object-cover"
                />
              ) : (
                <label htmlFor="profile-image">
                  <img
                    src={data ? data[0]?.profileImage : anon}
                    alt="blank-Image"
                    className="w-[100px] aspect-square rounded-full object-cover border duration-200 hover:scale-110 cursor-pointer"
                  />
                </label>
              )}
              <div className="flex gap-x-[.5rem] items-center">
                <button className="relative cursor-pointer">
                  <input
                    type="file"
                    id="profile-image"
                    className="cursor-pointer hidden"
                    ref={inputRef}
                    onChange={handleImageChange}
                  />
                </button>
              </div>
            </div>
          </article>
          <div className="flex flex-col gap-4 my-2">
            <div className="">
              <div>
                <label htmlFor="About" className="font-medium my-2">
                  About
                </label>{" "}
                <textarea
                  type="text"
                  value={data?.aboutMe && data?.aboutMe}
                  className="resize-none h-32 border border-[#3D217A] w-[100%] focus:outline-none p-3 text-[1rem] rounded-sm placeholder:text-black "
                  placeholder="Tell Us About You"
                  {...register("aboutMe", { required: true })}
                ></textarea>
              </div>
            </div>
            <div className="">
              <div>
                <label htmlFor="website" className="font-medium my-2">
                  Website
                </label>{" "}
                <input
                  type="text"
                  value={data?.user_website && data?.user_website}
                  className="border border-[#3D217A] w-[100%] focus:outline-none p-3 text-[1rem] rounded-sm placeholder:text-black"
                  {...register("websiteName", { required: true })}
                  placeholder="Add a link to drive traffic to your site"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="website" className="font-medium my-2">
                Brand Name
              </label>{" "}
              <input
                type="text"
                value={token?.brandName && token?.brandName}
                className="border border-[#3D217A] w-full focus:outline-none p-3 text-[1rem] rounded-sm placeholder:text-black"
                {...register("brandName", { required: true })}
                placeholder="Enter Your Brand Name"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#3D217A] py-2 md:py-4 w-full text-white rounded-md mt-2">
            Edit
          </button>
        </form>
      </article>
    </section>
  );
};

export default ProfileEdit;
