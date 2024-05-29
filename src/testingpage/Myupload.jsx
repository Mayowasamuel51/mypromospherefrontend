// this is the user upload page for the noraml ads (which is just images ) video ads 
import { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";

const api_load_v1 = import.meta.env.VITE_POSTSV_UPLOADS
const api_load_v2 =  import.meta.env.VITE_POSTS_UPLOADS
const Myuploads =  ()  =>{
    const token = useStateContext();
    console.log(token.token.token)
    const userPostUploads = async  () => {
        const response = await axios.get(`${api_load_v2}${token.token?.id}`,{
            Accept: "application/json",
            Authorization: `Bearer ${token.token.token}`,
        })
        const data = await response.data.posts
        if(response.data.status === 200){
            console.log(data)
        }else if (response.data.status === 404){
            console.log('SOMETHING IS WONRG SOMEWELL ')
        }
    
    }
    useEffect(()=>{
        userPostUploads()
    }, [])  

    return ( 
        <div>

            <h1>ACCCC  _ __ _ TTTTT __  __  ___    </h1>

        </div>
    )

}

export default Myuploads;