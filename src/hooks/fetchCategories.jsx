import axios from "axios";
import { useQuery } from '@tanstack/react-query'

const FetchCategories = () => {
  return useQuery({
    queryKey: ["trendingAds", id],
    queryFn: ({queryKey})=> axios.get(`https://apimypromospheretest.com.ng/api/trendingads/${queryKey[1]}`)
  })
}

export default FetchCategories