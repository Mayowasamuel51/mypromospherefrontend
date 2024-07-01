import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
const api_fetch_single_ad = import.meta.env.VITE_SINGLE_AD;
  

const FetchSingleAd = (id) => {
  const queryClient = useQueryClient()
  return useQuery({
    queryKey: ["single_trendingAd", id],
    queryFn: ({queryKey})=> axios.get(`${api_fetch_single_ad}${queryKey[1]}`),
    initialData: ()=> {
      const ad = queryClient.getQueriesData(["trendingAds"]).flat()[1]?.data.find((ad)=> +ad.id === parseInt(id))
      console.log(ad)
      if (ad) return {data: ad}
      else return undefined
  }
  })
}

export default FetchSingleAd;