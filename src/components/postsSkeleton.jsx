import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useStateContext } from '../contexts/ContextProvider';

const PostsSkeleton = ({ posts }) => {
    const { FullScreen, isDarkMode } = useStateContext();
    return  Array.from({ length: posts }).map((_, index) => (
        <div key={index}   className='flex flex-col gap-2 md:gap-4'>
            <div>
                <Skeleton baseColor={isDarkMode && "#202020"} highlightColor={isDarkMode && "#444"}  width={280} height={300} />
            </div>
            <div>
                <Skeleton baseColor={isDarkMode && "#202020"} highlightColor={isDarkMode && "#444"} circle width={FullScreen ? 40 : 32} className="w-8 md:w-10 aspect-square" />
            </div>
        </div>
    ))
}

export default PostsSkeleton;