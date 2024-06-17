import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useStateContext } from '../contexts/ContextProvider';

const UploadSkeleton = ({ posts }) => {
    const { isDarkMode } = useStateContext();
    return Array.from({ length: posts }).map((_, index) => (
        <div key={index} className=''>
            <div>
                <Skeleton baseColor={isDarkMode && "#27272c"} highlightColor={isDarkMode && "#444"} width={`100%`} height={200} />
            </div>
        </div>
    ))
}


export default UploadSkeleton;