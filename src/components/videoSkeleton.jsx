import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useStateContext } from '../contexts/ContextProvider';

const VideoSkeleton = ({ posts }) => {
    const { isDarkMode } = useStateContext();
    return Array.from({ length: posts }).map((_, index) => (
        <div key={index} className=''>
            <div>
                <Skeleton baseColor={isDarkMode && "#202020"} highlightColor={isDarkMode && "#444"} width={`100%`} height={300} borderRadius={8} />
            </div>
        </div>
    ))
}


export default VideoSkeleton;