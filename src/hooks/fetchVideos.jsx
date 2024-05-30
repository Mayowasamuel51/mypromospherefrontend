import { useQuery } from '@tanstack/react-query'
import axios from "axios";

const FetchVideos = () => {
  return useQuery({
    queryKey: ["trendingVideos"],
    queryFn: ()=> axios.get("https://apimypromospheretest.com.ng/api/trendingadsvideos")
  })
}

export default FetchVideos