import FetchSearch from "../../hooks/fetchSearch";
import { useParams } from 'react-router-dom';

const SearchCategories = () => {
    const { category } = useParams();
    const {data} = FetchSearch(category);

    console.log(data)
    return (
        <div>SearchCategories</div>
    )
}

export default SearchCategories