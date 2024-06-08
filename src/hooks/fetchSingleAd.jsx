import { useQuery } from '@tanstack/react-query'
import axios from "axios";
const api_fetch_single_ad = import.meta.env.VITE_SINGLE_AD;
  

const FetchSingleAd = (id) => {
  return useQuery({
    queryKey: ["trendingAds", id],
    queryFn: ({queryKey})=> axios.get(`${api_fetch_single_ad}${queryKey[1]}`)
  })
}

export default FetchSingleAd;