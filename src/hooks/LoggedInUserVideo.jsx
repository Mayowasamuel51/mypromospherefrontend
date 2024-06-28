import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const api_load_v1 = import.meta.env.VITE_POSTSV_UPLOADS;

const LoggedInUserVideo = (token) => {
  return useQuery({
    queryKey: ["my-Videos", token] ,
    queryFn: ({queryKey}) =>
      axios.get(`${api_load_v1}${queryKey[1]?.id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${queryKey[1]?.token}`,
        },
      }),
      retry: false,
  });
}

export default LoggedInUserVideo