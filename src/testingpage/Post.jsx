import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import axios from "axios";
import axiosclinet from "../https/axios-clinet";
import { useState } from "react";
import { storage } from '../../firebase'
import {
    uploadBytes, getStorage, ref, uploadBytesResumable, getDownloadURL, listAll,
    list,
} from "firebase/storage";
import baker from "./Baker.jpeg"
import { useStateContext } from "../contexts/ContextProvider";
const Post = () => {
    const { user } = useStateContext()
    const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    const [files, setFile] = useState(null)
    const schema = yup.object().shape({
        // price: yup.string().required(),
        categories: yup.string().required(),
        description: yup.string().required(),
        headlines: yup.string().required(),
        // categories: yup.string().required(),
        // picture: yup.mixed()
        // .test('required', "You need to provide a muiple images ", (value) => {
        //     return value && value.length
        // })
        // .test("fileSize", "The file is too large", (value, context) => {
        //     return value && value[0] && value[0].size <= 200000;
        // })
        // .test("type", "We only support jpeg, ", function (value) {
        //     return value && value[0] && value[0].type === "text/plain" || value && value[0] && value[0].type === "png" 
        // }),
    });
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
    })
    const [imageUpload, setImageUpload] = useState();

    const imagesListRef = ref(storage, "images/");

    const formSubmit = (data) => {
        const payload = {
            price_range: data.price,
            headlines: data.headlines,
            categories: data.categories,
            description: data.description,
        }
        console.log(payload)
        axios.post('http://127.0.0.1:8000/api/freeads', payload, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
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
                const imageRef = ref(storage, `/mulitpleFiles/${imageUpload[i].name}  ${user.email} `);
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
                                itemadsimagesurls: downloadURL
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


        }).catch((err) => console.log(err.message))
    }

    //  uploadFiles()
    return (
        <div>
            <h1>UPLOAD YOUR DETAILS TO MYPROMOSPHERE</h1>
            {/* <input
                type="file"
                multiple
                onChange={(event) => {
                    setImageUpload(event.target.files);
                }}
            />
            <button onClick={uploadFiles}>Submit</button> */}
            <form onSubmit={handleSubmit(formSubmit)}>
                <input
                    type="file"
                    {...register("picture")} 
                    multiple
                    onChange={(event) => {
                        setImageUpload(event.target.files);
                    }}
                />
                
                <p className='text-red-600  text-sm'>{errors.picture?.message}</p>
                {/* <input type="file" multiple onChange={handleFile} /> */}

                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="price" />


                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="categories"  {...register("categories", { required: true })} />


                <p className="text-red pt-2" >{errors.categories?.message}</p>
                <br />
                <br />

                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="description"  {...register("description", { required: true })} />
                <p className="text-red pt-2" >{errors.description?.message}</p>
                <br />
                <br />

                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="NEW COMING GOING  headlines"   {...register("headlines", { required: true })} />
                <p className="text-red pt-2" >{errors.headlines?.message}</p>
                <br />
                <br />

                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-ou
                tline" id="password" type="text" placeholder="******************" />

                <br />
                <br />
                <button type="submit" >
                    Post
                </button>


            </form>


        </div>
    )
}


export default Post