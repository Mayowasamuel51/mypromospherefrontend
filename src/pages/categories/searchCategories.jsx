import FetchSearch from "../../hooks/fetchSearch";
import { Link, useParams } from 'react-router-dom';

const SearchCategories = () => {
    const {data, isLoading, error} = FetchSearch();

    console.log(data)
    return (
        <div>SearchCategories</div>
    )
}

export default SearchCategories