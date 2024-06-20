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
import { FaWhatsapp } from "react-icons/fa";
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
const api_info     = import.meta.env.VITE_EDIT_PROFILE_EDIT;
const ProfileEdit = () => {
  const { token } = useStateContext();
  const { user, setUser } = useStateContext();
  const inputRef = useRef(null);
  const secoundRef = useRef(null);
  const [image, setImage] = useState("");
  const [background, setBackground] = useState("");
  const [backgroundImage, setBackgroundImage] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [userEditProfile, setUserEditProfile] = useState([])
  useEffect(() => {
    axios(`${api_edit_profile_endpoint}/${token?.id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token?.token}`,
      },
    }).then((res) => {
      if (res.data.status === 200) {
        console.log(res.data.data);
        setUserEditProfile(res.data.data)
        setData(res.data.data);
        setBackgroundImage(res.data.data);
        setLoading(false)
      }
    });
  // console.log(data)
  }, []);

  const [profileedit , setProfileEdit ] = useState({
    brandName:token?.brandName,
    aboutMe:token?.aboutMe,
    whatapp:token?.whatapp,
    user_phone:token?.user_phone,
    websiteName:token?.websiteName
  })

  console.log(profileedit)
  const handleProfileEdit = (  e   ) => {
    const { name, value } = e.target;
    setProfileEdit((prevProfileEdit)=>({...prevProfileEdit, [name]: value})); };
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
    // aboutMe: yup.string().required("Write what you want people to know about You and Your Business"),
    // messageCompany: yup.string().required(),
    // brandName: yup.string().required("Enter your Brand Name"),
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
    //   .test("fileSize", "The file is too large", (value, context) => {
    //     return value && value[0] && value[0].size <= 200000;
    //   })
    //   .test("type", "We only support jpeg & png, ", function (value) {
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
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });
  const formSubmit = (data) => {
    console.log('LOADING......................')
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
            aboutMe:profileedit.aboutMe,
            brandName: profileedit.brandName,
            websiteName: profileedit.websiteName,
            whatapp:profileedit.whatapp,
            user_phone:profileedit.user_phone,
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
                toast.success("Your profile has been successfully updated for your client")
                reset()
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
  const formSubmit1 = (e) => {
    e.preventDefault();
    setLoading(true)
    console.log("hello formsumbit 21");
    const imageRef = ref(storage, `/profile/${background.name} ${token?.user}`);
    const uploadTask = uploadBytesResumable(imageRef, background);
    // console.log(background)
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
            backgroundimage:downloadURL,
            // messageCompany: "backgroundImage wait ",
          };
          console.log("Updated edit profile successfully", [downloadURL]);
          axios.put(`${api_backgroundimage}${token?.id}`, payload, {
              headers: {
                Accept: "application/vnd.api+json",
                Authorization: `Bearer ${token?.token}`,
              },
            })
            .then((res) => {
              if (res.data.status === 200) {
                console.log("updated the profile backgorund image ...................");
                // console.log(res.data.item);
                toast.success("Your background image profile has been successfully updated for your client.")
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
  // console.log(token)


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
        <p className="font-400 text-sm my-2">Set up your presence and hiring needs</p>
      </header>
      {/* form  */}
      <article className="">
        <h1 className="font-medium my-2 text-xs">👇Click to changeBackgrond Image</h1>
        <form onSubmit={formSubmit1}  encType="multipart/form-data" className="flex items-center gap-4">
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
          <button type="submit"
           className="bg-[#3D217A] py-2 px-2 md:py-3 md:px-4 text-white rounded-md my-2">
            Change Backgorund Image
          </button>
        </form>

        <hr className="my-4" />

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
          <div className="flex flex-col gap-5 my-4">
            <div className="">
              <div>
                <label htmlFor="About" className="font-medium my-2">
                  About
                </label>{" "}
                <textarea
                  type="text"
                  value={profileedit.aboutMe}
                  onChange={handleProfileEdit}
                  name="aboutMe"
                  className="resize-none h-32 border border-[#3D217A] w-[100%] focus:outline-none p-3 text-[1rem] rounded-sm placeholder:text-black "
                  placeholder="Tell Us About You"

                ></textarea>
                <p className='text-red  text-sm'>{errors.aboutMe?.message}</p>
              </div>
            </div>
            <div className="">
              <div>
                <label htmlFor="website" className="font-medium my-2">
                  Website
                </label>{" "}
                <input
                  type="url"
                  value={profileedit.websiteName}
                  onChange={handleProfileEdit}
                  name="websiteName"
                  // value={token?.websiteName && token?.websiteName}
                  className="border border-[#3D217A] w-[100%] focus:outline-none p-3 text-[1rem] rounded-sm placeholder:text-black"
                  placeholder="Add a link to drive traffic to your site"
                />
                     <p className='text-red  text-sm'>{errors.websiteName?.message}</p>
              </div>
            </div>
            <div className="">
              <label htmlFor="website" className="font-medium my-2">
                Contact Phone one
              </label>{" "}
              <input
                value={profileedit.user_phone}
                onChange={handleProfileEdit}
                type="number"
                name="user_phone"
                className="border border-[#3D217A] w-full focus:outline-none p-3 text-[1rem] rounded-sm placeholder:text-black"
                placeholder="Enter Your  Contact number "/>
               {/* <p className='text-red  text-sm'>{errors.brandName?.message}</p> */}
            </div>

            <div className="">
              <label htmlFor="website" className="font-medium my-2 flex items-center gap-2">
                <p>Contact Two</p><div><FaWhatsapp  size={20} color="green"/></div>
              </label>{" "}
              <input
                value={profileedit.whatapp}
                onChange={handleProfileEdit}
                type="number"
                name="whatapp"
                className="border border-[#3D217A] w-full focus:outline-none p-3 text-[1rem] rounded-sm placeholder:text-black"
                placeholder="Enter Your  Whatapp number"/>
               {/* <p className='text-red  text-sm'>{errors.brandName?.message}</p> */}
            </div>



            <div className="">
              <label htmlFor="website" className="font-medium my-2">
                Brand Name
              </label>{" "}
              <input
                value={profileedit.brandName}
                onChange={handleProfileEdit}
                type="text"
                name="brandName"
                className="border border-[#3D217A] w-full focus:outline-none p-3 text-[1rem] rounded-sm placeholder:text-black"
                placeholder="Enter Your Brand Name"/>
               <p className='text-red  text-sm'>{errors.brandName?.message}</p>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#3D217A] py-2 md:py-4 w-full text-white rounded-md mt-2">
            Update
          </button>
        </form>
      </article>
    </section>
  );
};

export default ProfileEdit;



  // if (errors?.aboutMe) {
  //   toast.error(errors?.aboutMe.message)
  // }
  // if (errors?.websiteName) {
  //   toast.error(errors?.websiteName.message)
  // }
  // if (errors?.brandName) {
  //   toast.error(errors?.brandName.message)
  // }