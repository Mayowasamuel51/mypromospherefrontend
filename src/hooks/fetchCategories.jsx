import axios from "axios";
import { useQuery } from '@tanstack/react-query'
const api_category = import.meta.env.VITE_CATEGORIES;

const FetchCategories = (category) => {
  return useQuery({
    queryKey: ["categories", category],
    queryFn: ({queryKey})=> axios.get(`${api_category}${queryKey[1]}`)
  })
}

export default FetchCategories;