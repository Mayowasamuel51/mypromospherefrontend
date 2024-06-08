import { useQuery } from '@tanstack/react-query'
import axios from "axios";
const api_fetch_trendingAds = import.meta.env.VITE_TRENDING_ADS;

const FetchTrendingAds = () => {
  return useQuery({
    queryKey: ["trendingAds"],
    queryFn: ()=> axios.get(`${api_fetch_trendingAds}`)
  })
}

export default FetchTrendingAds