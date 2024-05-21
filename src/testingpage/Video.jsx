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
import DropFileInput from '../components/drop-file-input/DropFileInput.jsx';
import UploadButton from '../components/upload-button/UploadButton';
import PostButtons from "../components/PostButtons.jsx";
// import { Uploader } from "uploader"; // Installed by "react-uploader".
// import { UploadButton } from "react-uploader";
const options = { multi: true };
const Video = () => {
    const { token } = useStateContext()
    const [CategoriesValues, setCategoriesValues] = useState('')
    // const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    const [file, setFile] = useState(null)
  
    const onFileChange = (files) => {
        const currentFile = files[0]
        setFile(currentFile)
        console.log(files);
    }
    const onChangecategories =(e)=>{
       
        setCategoriesValues(e.target.value)
        console.log(CategoriesValues)
      
    }

    // const uploadToDatabase = (url) => {
    //     let docData = {
    //         mostRecentUploadURL: url,
    //         username: "jasondubon"
    //     }
    //     const userRef = doc(db, "users", docData.username)
    //     setDoc(userRef, docData, { merge: true }).then(() => {
    //         console.log("successfully updated DB")
    //     }).catch((error) => {
    //         console.log("errrror")
    //     })
    // }

    const handleClick = (data) => {
        console.log(data)
        if (file === null || file === 0) return;
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
                // uploadToDatabase(downloadURL)
                axios.post('').then((response) => {

                }).catch((err) => {
                    console.log(err.message)
                })
                console.log(downloadURL)
            })
        })
    }

    const schema = yup.object().shape({
        price: yup.string().required(),
        // categories: yup.string().required(),
        description: yup.string().required(),
        // headlines: yup.string().required(),
        // categories: yup.string().required(),
        // picture: yup.mixed()
        //     .test('required', "You need to provide a  valid video", (value) => {
        //         return value && value.length
        //     })
        //     .test("fileSize", "The  vidoe is too large", (value, context) => {
        //         return value && value[0] && value[0].size <= 2000;
        //     })
        //     .test("type", "We only support mb3, ", function (value) {
        //         return value && value[0] && value[0].type === ".mp4"
        //     }),
    });
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const formSubmit = (data) => {
        console.log("logging file", CategoriesValues)
        if (file === null) return;

        const fileRef = ref(storage, `videos/${file.name}`)

        const uploadTask = uploadBytesResumable(fileRef, file)
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
                    const payload = {
                        price_range: data.price,
                        headlines: data.headlines,
                        categories: CategoriesValues,
                        
                        titlevideourl: downloadURL,
                        description: data.description,
                    }
                    axios.post('http://127.0.0.1:8000/api/vidoesfreeads', payload, {
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token?.token}`
                        }
                    }).then((res) => {
                        if (res.status === 200) {
                            console.log("success!!")
                            console.log('worked in database for vidoes ')
                            console.log(CategoriesValues)
                            // console.log(res.data.item)
                        
                            return res.data.item
                        }
                        else if (res.status === 500 || res.status === 401) {
                            console.log(res.data.message)
                        }
                    }).catch((err) => console.log(err.message))
                })
            })

    }
    // useEffect(() => {

    //     axiosclinet.get("api/getuser").then(({ data }) => {
    //         console.log('see messages')
    //         console.log(data.message)
    //         setUser(data.message)
    //     })
    // }, [])
    return (
        <div>
            <PostButtons />
            <h1 className="my-5 lg:text-3xl lg:font-bold font=['poppins']">UPLOAD YOUR VIDEO  DETAILS TO MYPROMOSPHERE</h1>

            <form onSubmit={handleSubmit(formSubmit)}>
                <select onChange={ onChangecategories} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                    {categories.map((option, index) => {
                        return (
                            <option key={index}   value={option} >
                                {option}
                            </option>
                        );
                    })}
                    
                </select>
                {CategoriesValues}

                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="price" {...register("price", { required: true })} />

                <p className='text-red  text-sm'>{errors.price?.message}</p>

                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="description"  {...register("description", { required: true })} />
                <p className="text-red pt-2" >{errors.description?.message}</p>


                <DropFileInput
                    onFileChange={(files) => onFileChange(files)}
                />
                {/* <UploadButton
                    type="submit"
                // onClick={() => handleClick()}
                > </UploadButton> */}
                {/* <p className='text-red  text-sm'>{errors.picture?.message}</p> */}
                <br></br>
                <button type="sumbit">upload button</button>

            </form>
        </div>
    )
}
// What  remamins in this component is 


// validation on all input 
// proper UI interface 
// Valiation errors 
//  validate only videos should be uploaded not images 

export default Video;


// searcity auditor --- how to get there 