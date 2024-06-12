import axios from "axios";
import { useStateContext } from "../contexts/ContextProvider";
const axiox_api     = import.meta.env.VITE_baseURL;

const axiosclinet = axios.create({
    // baseURL:`${ import.meta.env.API_KEY}/api`
    baseURL:axiox_api
});

axiosclinet.defaults.headers.post["Content-Type"] = "application/vnd.api+json";
axiosclinet.defaults.headers.post["Accept"] = "application/json";
axiosclinet.defaults.withCredentials = true; // generate 

axiosclinet.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN")
    config.headers.Authorization = token ? `Bearer ${  token?.token}` : "";
    return config
})

axiosclinet.interceptors.response.use((respone) => {
    return respone;
}, (error) => {
    try {
        const { response } = error;
        if (response.status === 401) {
            localStorage.removeItem("ACCESS_TOKEN")
        }
    } catch (err) {
        console.log(err)
    }
    throw error;
})
export default axiosclinet;