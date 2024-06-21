import { useQuery } from '@tanstack/react-query'
import axios from "axios";
const api_fetch_user = import.meta.env.VITE_FETCH_USER;


const FetchUser = (userName) => {
  return useQuery({
    queryKey: ["userPost", userName],
    queryFn: ({queryKey})=> axios.get(`${api_fetch_user}${queryKey[1]}`)
  });
}

export default FetchUser;