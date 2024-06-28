import { useQuery } from '@tanstack/react-query'
import axios from "axios";
const api_fetch_other_user_videos = import.meta.env.VITE_OTHER_USER_VIDEOS;

const OtherUsersVideos = (id) => {
    return useQuery({
        queryKey: ["other-users-videos", id],
        queryFn: ({ queryKey }) => axios.get(`${api_fetch_other_user_videos}${queryKey[1]}`),
        retry: false
    });
}

export default OtherUsersVideos;