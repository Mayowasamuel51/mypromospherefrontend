import { useQuery } from '@tanstack/react-query'
import axios from "axios";
  

const FetchTrendingAds = () => {
  return useQuery({
    queryKey: ["trendingAds"],
    queryFn: ()=> axios.get("https://apimypromospheretest.com.ng/api/trendingads")
  })
}

export default FetchTrendingAds