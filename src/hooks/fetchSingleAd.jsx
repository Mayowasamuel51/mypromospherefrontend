import { useQuery } from '@tanstack/react-query'
import axios from "axios";
  

const FetchSingleAd = (id) => {
  return useQuery({
    queryKey: ["trendingAds", id],
    queryFn: ({queryKey})=> axios.get(`https://apimypromospheretest.com.ng/api/trendingads/${queryKey[1]}`)
  })
}

export default FetchSingleAd;