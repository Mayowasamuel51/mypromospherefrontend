// import axiosclinet from "../https/axios-clinet";
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
const Post = () => {
    // console.log(categories)
    const [categoriesValues, setCategoriesValues] = useState('')
    const [headlinevalues, setHeadlinesValue] = useState(headlines)
    const { user, setUser } = useStateContext()
    const token = useStateContext()
    console.log(token?.token.token)
    const [files, setFile] = useState(null)
    const handleValues = (e) => {
        setCategoriesValues(e.target.value)
    }
    const schema = yup.object().shape({
        // price: yup.string().required(),
        categories: yup.string().required(),
        description: yup.string().required(),
        headlines: yup.string().required(),
        // categories: yup.string().required(),
        picture: yup.mixed()
            .test('required', "You need to provide more then one  image ", (value) => {
                return value && value.length
            })
            // .test("fileSize", "The file is too large", (value, context) => {
            //     return value && value[0] && value[0].size <= 200000;
            // })
            .test("type", "We only support jpeg, ", function (value) {
                return value && value[0] && value[0].type === "image/jpeg" || value && value[0] && value[0].type === "image/png"
            }),
    });
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
    })
    const [imageUpload, setImageUpload] = useState([]);


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
    }
    const imagesListRef = ref(storage, "images/");
    //// this one as to be global around the application
    // useEffect(() => {
    //     axiosclinet.get("api/getuser").then(({ data }) => {
    //         console.log('see messages')
    //         console.log(data.message)
    //         setUser(data.message)
    //     })
    // }, [])
    const formSubmit = (data) => {
        const payload = {
            price_range: data.price,
            headlines: data.headlines,
            categories: data.categories,
            description: data.description,
        }
        console.log(payload)
        axios.post('http://localhost:8000/api/freeads', payload, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token?.token.token}`
            }
        }).then((res) => {
            if (res.status === 200) {
                console.log('worked')
                // console.log(res.data.item)
                return res.data.item
            }
            else if (res.status === 500 || res.status === 401) {
                console.log(res.data.message)
            }
        }).then((response) => {
            console.log(response)
            for (let i = 0; i < data.picture.length; i++) {
                const imageRef = ref(storage, `/mulitpleFiles/${data.picture[i].name}`);
                const uploadTask = uploadBytesResumable(imageRef, data.picture[i]);
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
                                itemadsimagesurls: downloadURL
                            }
                            axios.post(`http://localhost:8000/api/freeads/${response}`, second_payload, {
                                headers: {
                                    Accept: "application/json",
                                    Authorization: `Bearer ${token?.token.token}`
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

        }).catch((err) => console.log(err.message))
    }

    return (
        <div className="pt-32 px-4 lg:px-40">
            <h1 className="my-5 lg:text-3xl lg:font-bold font=['poppins']">UPLOAD YOUR DETAILS TO MYPROMOSPHERE</h1>

            <form onSubmit={handleSubmit(formSubmit)}>

                <select
                    {...register("categories")}
                    // onChange={handleValues}
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                    {categories.map((option, index) => {
                        return (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        );
                    })}

                </select>
                <p className='text-red-600  text-sm'>{errors.categories?.message}</p>
                {/* <h1 className="">{categories}</h1> */}
                <p className='text-red-600  text-sm'>{errors.picture?.message}</p>

                <input type="file"{...register("picture")} multiple onChange={handleSetimageUpload} />
                {imageUpload.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt="Uploaded Image" width={"200px"} height={"200px"} />
                ))}
                {/* {imageUpload.map((item, index)=>{
                    return ( 
                        <img  key={index} src={item} />
                    )
                })} */}

                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="price" />


               
                <p className="text-red pt-2" >{errors.categories?.message}</p>


                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="description"  {...register("description", { required: true })} />
                <p className="text-red pt-2" >{errors.description?.message}</p>

                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="NEW COMING GOING  headlines"   {...register("headlines", { required: true })} />
                <p className="text-red pt-2" >{errors.headlines?.message}</p>


                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-ou
                tline" id="password" type="text" placeholder="******************" />


                <button type="submit" className="px-4 py-2 bg-purple rounded-lg text-xl font-medium text-white">
                    Post Noraml Ads
                </button>


            </form>


        </div>
    )
}


export default Post

{/* <ImageUploader
multiple
onFileAdded={(img) => getImageFileObject(img)}
onFileRemoved={(img) => runAfterImageDelete(img)}
/> */}
//   //  uploadFiles()
//   function getImageFileObject(imageFile) {
//     console.log({ imageFile })
// }

// function runAfterImageDelete(file) {
//     console.log({ file })
// }

{/* 
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
            </select> */}