import { useQuery } from '@tanstack/react-query'
import axios from "axios";
const api_fetch_other_user = import.meta.env.VITE_OTHER_USER_POST;

const OtherUsersPosts = (id) => {
    return useQuery({
        queryKey: ["user-post", id],
        queryFn: ({ queryKey }) => axios.get(`${api_fetch_other_user}${queryKey[1]}`)
    });
}

export default OtherUsersPosts