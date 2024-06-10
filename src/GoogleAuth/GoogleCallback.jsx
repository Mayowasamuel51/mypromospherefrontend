import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
// import axiosclinet from '../https/axios-clinet';
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';
import { toast } from 'sonner';
const api = import.meta.env.VITE_SERVER_CALLBACK;
function GoogleCallback() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const [data, setData] = useState({});
    // const [user, setUser] = useState(null);
    const location = useLocation();
    const { user, token ,setUser,setToken} = useStateContext()
    // On page load, we take "search" parameters
    // and proxy them to /api/auth/callback on our Laravel API
    
    useEffect(() => {
        axios.get(`${api}${location.search}`).then((res) => {
            setToken(res.data)
            setUser(res.data)
            localStorage.setItem("user-details", JSON.stringify(res.data))
            navigate("/dashboard")
            toast.success("successfully Logged In")


        }).catch((err)=>console.log(err.message))
    },[])
    
}

function DisplayLoading() {
    return <div>Loading....</div>;
}

function DisplayData(data) {
    return (
        <div>
            <samp>{JSON.stringify(data, null, 2)}</samp>
        </div>
    );
}

export default GoogleCallback;