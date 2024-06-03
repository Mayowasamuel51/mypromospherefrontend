import { useQuery } from '@tanstack/react-query'
import axios from "axios";
  
const api_load_v2 =  import.meta.env.VITE_POSTS_UPLOADS;
const FetchUserposts = () => {
    
  return useQuery({
    queryKey: ["userposts"],
    queryFn: ()=> axios.get(api_load_v2)
  })
}

export default FetchUserposts