import { useQuery } from '@tanstack/react-query'
import axios from "axios";
const api_fetch_user = import.meta.env.VITE_FETCH_USER;


const FetchUser = (id) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: ({queryKey})=> axios.get(`${api_fetch_user}${queryKey[1]}`)
  });
}

export default FetchUser;