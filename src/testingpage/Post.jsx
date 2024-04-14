import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import axios from "axios";
// import axiosclinet from "../https/axios-clinet";
import { useState } from "react";
import firebase from '../../firebase'

const Post = () => {
    const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))

    const schema = yup.object().shape({
        // price: yup.string().required(),
        categories: yup.string().required(),
        description: yup.string().required(),
        headlines: yup.string().required(),
        // categories: yup.string().required(),
    });
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const formSubmit = (data) => {
        const payload = {
            price_range: data.price,
            headlines: data.headlines,
            categories: data.categories,
            description: data.description,
        }
        console.log(payload)
        axios.post('/api/freeads', payload, {
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
            let str = 'OKAY MAN '
            let repeatedString = 'Helll';
            for (let i = 0; i < 20; i++) {
                repeatedString += str;
            }
            // return repeatedString;
            const second_payload = {
                itemadsimagesurls: repeatedString
            }
            axios.post(`/api/freeads/${response}`, second_payload, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                if (res.status === 200) {
                    console.log('worked with second ...................')
                    console.log(res.data.item)
                    firebase
                        .storage()
                        .ref("lintang_foto") // folder name in Firebase
                        .child("")
                        .getDownloadURL()
                        .then(url => setAvatarURL(url));
                }
                else if (res.status === 500 || res.status === 401) {
                    console.log(res.data.message)
                }
            }).catch((err) => console.log(err.message))

        })
            .catch((err) => console.log(err.message))



    }
    return (
        <div className="pt-32 px-4 lg:px-40">

            <h1 className="my-5 lg:text-3xl lg:font-bold font=['poppins']">UPLOAD YOUR DETAILS TO MYPROMOSPHERE</h1>


            <form onSubmit={handleSubmit(formSubmit)}>

                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="price" />


                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="categories"  {...register("categories", { required: true })} />
                <p className="text-red pt-2" >{errors.categories?.message}</p>




                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="description"  {...register("description", { required: true })} />
                <p className="text-red pt-2" >{errors.description?.message}</p>

                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="NEW COMING GOING  headlines"   {...register("headlines", { required: true })} />
                <p className="text-red pt-2" >{errors.headlines?.message}</p>


                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-ou
                tline" id="password" type="text" placeholder="******************" />

            
                <button type="submit" className="px-4 py-2 bg-purple rounded-lg text-xl font-medium text-white">
                    Post
                </button>


            </form>


        </div>
    )
}


export default Post