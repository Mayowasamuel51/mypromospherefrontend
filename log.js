function repeatString(str) {
  let repeatedString = '';
  for (let i = 0; i < 20; i++) {
    repeatedString += str;
  }
  return repeatedString;
}

// Example usage
const originalString = 'Hello!';
const repeatedString = repeatString(originalString);
console.log(repeatedString); // Output will be 'Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!Hello!'



// const storage = getStorage();
// // Create a reference to 'mountains.jpg'
// const storageRef = ref(storage, baker);
// uploadBytes(storageRef, baker).then((snapshot) => {
//     console.log('Uploaded a blob or file!');
// });
// const storage = getStorage();
// const storageRef = ref(storage, imageUpload.file);
// const uploadTask = uploadBytesResumable(storageRef,imageUpload.file);
// // Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
// uploadTask.on('state_changed', 
//   (snapshot) => {
//     // Observe state change events such as progress, pause, and resume
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//     }
//   }, 
//   (error) => {
//     // Handle unsuccessful uploads
//   }, 
//   () => {
//     // Handle successful uploads on complete
//     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//     });
//   }
// );
// Assuming fileList is an array containing multiple File objects
// Assuming fileList is an array containing multiple File objects





for (let i = 0; i < imageUpload.length; i++) {
  const imageRef = ref(storage, `/mulitpleFiles/${imageUpload[i].name}`);
  const result = uploadBytes(imageRef, imageUpload[i])
    .then(() => {
      console.log("success");
    })
    .catch((error) => {
      console.log("error");
    });

  console.log(result)
}




for (let i = 0; i < imageUpload.length; i++) {
  const imageRef = ref(storage, `/mulitpleFiles/${imageUpload[i].name}`);
  const uploadTask = uploadBytesResumable(imageRef, imageUpload[i]);
  uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
        // ..
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        const second_payload = {
          itemadsimagesurls: "cxCzxczvsdvsdvsvs"
        }
        axios.post(`http://127.0.0.1:8000/api/freeads/${response}`, second_payload, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
          }
        }).then((res) => {
          if (res.status === 200) {
            console.log('worked with second ...................')
            console.log(res.data.item)
          }
          else if (res.status === 500 || res.status === 401) {
            console.log(res.data.message)
          }
        }).catch((err) => console.log(err.message))
      })
    })


}








import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import axios from "axios";
import { useEffect, useState } from "react";
import { storage } from '../../firebase'
import { useStateContext } from "../contexts/ContextProvider";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axiosclinet from "../https/axios-clinet";
import Select from "react-dropdown-select";
import { categories } from "../../src/json/categories.jsx"
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import { headlines } from "../../src/json/headlines.jsx"
import DropFileInput from '../components/drop-file-input/DropFileInput';
// import UploadButton from '../components/upload-button/UploadButton';
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
const uploader = Uploader({
    apiKey: "free" // Get production API keys from Bytescale
});
const options = { multi: true };
const Video = () => {
    const [file, setFile] = useState(null)

    const onFileChange = (files) => {
        const currentFile = files[0]
        setFile(currentFile)
        console.log(files);
    }

    const uploadToDatabase = (url) => {
        let docData = {
            mostRecentUploadURL: url,
            username: "jasondubon"
        }
        const userRef = doc(db, "users", docData.username)
        setDoc(userRef, docData, { merge: true }).then(() => {
            console.log("successfully updated DB")
        }).catch((error) => {
            console.log("errrror")
        })
    }

    const handleClick = () => {
        if (file === null) return;
        const fileRef = ref(storage, `videos/${file.name}`)
        const uploadTask = uploadBytesResumable(fileRef, file)

        uploadTask.on('state_changed', (snapshot) => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(progress)
        }, (error) => {
            console.log("error :(")
        }, () => {
            console.log("success!!")
            getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                uploadToDatabase(downloadURL)
                console.log(downloadURL)
            })
        })
    }

    const schema = yup.object().shape({
        // price: yup.string().required(),
        // categories: yup.string().required(),
        // description: yup.string().required(),
        // headlines: yup.string().required(),
        // categories: yup.string().required(),
        picture: yup.mixed()
            .test('required', "You need to provide a  valid video", (value) => {
                return value && value.length
            })
            .test("fileSize", "The  vidoe is too large", (value, context) => {
                return value && value[0] && value[0].size <= 2000;
            })
            .test("type", "We only support mb3, ", function (value) {
                return value && value[0] && value[0].type === ".mp4"
            }),
    });
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const formSubmit = (data) => {

        console.log(data.picture)

        console.log("logging file")

        if (data.picture === null) return;

        const fileRef = ref(storage, `videos/${data.picture.name}`)

        const uploadTask = uploadBytesResumable(fileRef, data.picture)

        uploadTask.on('state_changed', (snapshot) => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(progress)
        }, (error) => {
            console.log("error :(")
        }, () => {
            console.log("success!!")
            getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
                uploadToDatabase(downloadURL)
                console.log(downloadURL)
            })
        })
    }

    return (
        <div>
            <h1 className="my-5 lg:text-3xl lg:font-bold font=['poppins']">UPLOAD YOUR VIDEO  DETAILS TO MYPROMOSPHERE</h1>
            {/* <DropFileInput
                    {...register("picture")}
                    onFileChange={(files) => onFileChange(files)}
                />
                <p className='text-red-600  text-sm'>{errors.picture?.message}</p>
                <br></br>
                <UploadButton
               
                onClick={() => handleClick()}
                > </UploadButton> */}
            {/* <UploadButton uploader={uploader}
                options={options}
                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
                {({ onClick }) =>
                    <button onClick={onClick}>
                        Upload a file...
                    </button>
                }
            </UploadButton> */}
            <form onSubmit={handleSubmit(formSubmit)}>

                <DropFileInput
                    // {...register("picture")}
                    onFileChange={(files) => onFileChange(files)}
                />
                <p className='text-red-600  text-sm'>{errors.picture?.message}</p>
                <br></br>
                <button type="sumbit">upload button</button>
                {/* <UploadButton
                type="submit"
                // onClick={() => handleClick()}
                > </UploadButton> */}

            </form>
        </div>
    )
}


export default Video;
















*  // <div cl
// assName="overflow-x-hidden"> <section className="relative grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
                {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
                {data?.data.posts.map((item) => (
                    <Link to={`/feed/${item.id}`} key={item.id} className="flex flex-col gap-2 md:gap-4">
                    
                      <ReactPlayer           width='100%'
      height='100%'   className='react-player'
       url={`${item.titlevideourl}`} 
       playing={true} 
       controls={true} 
        />      */}
                            {/* {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                                <SplideSlide key={img.id} className='rounded-md w-fit border-2'>
                                    <LazyLoadImage effect='blur' src={img.itemadsimagesurls} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                                </SplideSlide>
                            ))} */}
                        
    //                     <Link to="/profile/timilehin babade">
    //                         <div className="flex items-center gap-2">
    //                             <LazyLoadImage effect="blur" src={item.user_image} alt="" className="rounded-full w-8 md:w-10 aspect-square" />
    //                             <p className="text-sm font-medium">USER-ID {item.user_id}</p>
    //                         </div>
    //                     </Link>
                       
    //                 </Link>
    //             ))}
    //         </section>
    // </div>









































    // this is the user upload page for the noraml ads (which is just images ) video ads
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import FetchUserposts from "../hooks/UserPost";
=======
import { Link } from 'react-router-dom';
import FetchUserposts from "../hooks/LoggedInUserPost";
>>>>>>> 9e5173fa9c4c8d08a314745525aa0c75d65773c9
import { useQuery } from "@tanstack/react-query";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Loader from "../loader";
import React from "react";
import ReactPlayer from "react-player";
import anon from "../assests/images/anon.png";
import thumbnail1 from "../assests/images/feed1.svg";
import thumbnail2 from "../assests/images/feed2.svg";
import thumbnail3 from "../assests/images/feed3.svg";
import thumbnail4 from "../assests/images/feed4.svg";
import { FaRegCirclePlay } from "react-icons/fa6";
const api_load_v1 = import.meta.env.VITE_POSTSV_UPLOADS;
const api_thumbnails  = import.meta.env.VITE_thumbnails;

const MyVidoes = () => {
<<<<<<< HEAD
  const { FullScreen } = useStateContext();
=======
  const { FullScreen } = useStateContext()
>>>>>>> 9e5173fa9c4c8d08a314745525aa0c75d65773c9
  const token = useStateContext();
  const { isPending, isError, data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      axios.get(`${api_load_v1}${token.token?.id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token.token.token}`,
        },
      }),
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

<<<<<<< HEAD
  if (error)
    return (
      <div className="min-h-screen grid place-items-center">
        <p>
          <h1>Sorry you dont have any Video uploads</h1>
        </p>
      </div>
    );

  return (
    <section className="relative grid md:gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-10 py-4">
      {isLoading && (
        <div className="md:col-span-2 lg:col-span-3 exl:col-span-4">
          <Loader />
        </div>
      )}
      {data?.data.posts.map((video) => (
        <div key={video.id} className="flex flex-col gap-4">
          <div className="w-full aspect-ratio-box rounded-lg overflow-hidden">
            <ReactPlayer
              width={280}
              height={300}
              url={video?.titlevideourl}
              playing={true}
              light={video.id % 2 === 0 ? `${api_thumbnails}/thumbnails/${video.thumbnails.slice(11)}` :`${api_thumbnails}/thumbnails/${video.thumbnails.slice(11)}`}
              // loop={true}
            controls={true}
              muted={true}
              playIcon={<FaRegCirclePlay size={50} color="#fff" />}
              className="w-fit hover:outline hover:scale-105 duration-300"
            />
          </div>
          <Link to={`/profile/user/${video.user_id}`} className="w-fit">
            <div className="flex items-center gap-2">
              <img
                src={video.user_image === null ? anon : video.user_image}
                alt="user-profile-image"
                className="rounded-full w-8 md:w-10 aspect-square"
              />
              {token && (
                <p className="text-sm font-medium">
                  {video.user_id === token.id && "me"}
                </p>
              )}
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};
=======
  if (error) return <div className='min-h-screen grid place-items-center'><p><h1>Sorry you dont have any Video uploads</h1></p></div>

  return (
    <div className="overflow-x-hidden">
      <section className="relative grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
        {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
        {data?.data.posts.map((item) => (
          <Link to={`/feed/${item.id}`} key={item.id} className="flex flex-col gap-2 md:gap-4">

            <ReactPlayer width='100%'
              height='100%' className='react-player'
              url={`${item.titlevideourl}`} playing={true} controls={true} />
            {/* {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                                    <SplideSlide key={img.id} className='rounded-md w-fit border-2'>
                                        <LazyLoadImage effect='blur' src={img.itemadsimagesurls} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                                    </SplideSlide>
                                ))} */}

            <Link to="/profile/timilehin babade">
              <div className="flex items-center gap-2">
                <LazyLoadImage effect="blur" src={item.user_image} alt="" className="rounded-full w-8 md:w-10 aspect-square" />
                <p className="text-sm font-medium">USER-ID {item.user_id}</p>
              </div>
            </Link>

          </Link>
        ))}
      </section>
    </div>
  );

}
>>>>>>> 9e5173fa9c4c8d08a314745525aa0c75d65773c9

export default MyVidoes;
