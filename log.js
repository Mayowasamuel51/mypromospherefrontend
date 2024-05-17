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
