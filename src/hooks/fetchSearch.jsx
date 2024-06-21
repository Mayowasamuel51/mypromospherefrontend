import axios from "axios";
import { useQuery } from '@tanstack/react-query'
const api_category = import.meta.env.VITE_FULL_SEARCH;

const FetchSearch = (category) => {
  return useQuery({
    queryKey: ["search", category],
    queryFn: ({queryKey})=> axios.get(`${api_category}${queryKey[1]}`)
  })
}

export default FetchSearch;