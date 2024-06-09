import axios from "axios";
import { useQuery } from '@tanstack/react-query'
// const api_fetch_single_ad = import.meta.env.VITE_SINGLE_AD;

const FetchCategories = () => {
  return useQuery({
    queryKey: ["trendingAds", id],
    queryFn: ({queryKey})=> axios.get(`https://apimypromospheretest.com.ng/api/trendingads/${queryKey[1]}`)
  })
}

export default FetchCategories