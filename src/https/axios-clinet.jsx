import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useStateContext } from "../contexts/ContextProvider";
const axiox_api = import.meta.env.VITE_baseURL;

const axiosclinet = axios.create({
  // baseURL:`${ import.meta.env.API_KEY}/api`
  baseURL: axiox_api,
});

axiosclinet.defaults.headers.post["Content-Type"] = "application/vnd.api+json";
axiosclinet.defaults.headers.post["Accept"] = "application/json";
axiosclinet.defaults.withCredentials = true; // generate

axiosclinet.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = token ? `Bearer ${token?.token}` : "";
  return config;
});

axiosclinet.interceptors.response.use(
  (respone) => {
    return respone;
  },
  (error) => {
    try {
      const { response } = error;
      if (response.status === 401) {
        localStorage.removeItem("ACCESS_TOKEN");
      }
    } catch (err) {
      console.log(err);
    }
    throw error;
  }

);
export default axiosclinet;


// const { isPending, isError, data, isLoading, error } = useQuery({
//     queryKey: ["startingApp"],
//     queryFn: () => {const token = localStorage.getItem("ACCESS_TOKEN");
//       axios.get(axiox_api, {
//         headers: {
//           Accept: "application/json",
//           Authorization: token ? `Bearer ${token?.token}` : ""
//         },
    
//       })},
   
//   });
  
//   if (isPending) {
//     return <span>Loading...</span>;
//   }

//   if (isError)
//     return (
//       <div className="min-h-screen grid place-items-center">
//         <p>
//           <h1>INVAILD TOKEN </h1>
//         </p>
//       </div>
//     );

//     if(data){
//         return respone;
//     }
// };
