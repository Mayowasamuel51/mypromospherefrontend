import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import axiosclinet from '../https/axios-clinet';
import { useStateContext } from '../contexts/ContextProvider';

function GoogleCallback() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    // const [user, setUser] = useState(null);
    const location = useLocation();
    const { user, token ,setUser,setToken} = useStateContext()
    // On page load, we take "search" parameters
    // and proxy them to /api/auth/callback on our Laravel API
    
    useEffect(() => {
        axiosclinet.get(`http://localhost:8000/api/auth/callback${location.search}`).then((res) => {
            setUser(res.data.users)
            console.log(res.data.token)
            setToken(res.data.token)
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