import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useStateContext } from '../contexts/ContextProvider';
import { TbCurrencyNaira } from "react-icons/tb";

const PostsSkeleton = ({ posts }) => {
    const { FullScreen, isDarkMode } = useStateContext();
    return  Array.from({ length: posts }).map((_, index) => (
        <div key={index}   className='flex flex-col gap-2 md:gap-4'>
            <div>
                <Skeleton baseColor={isDarkMode && "#27272c"} highlightColor={isDarkMode && "#444"}  width={`100%`} height={300} />
            </div>
            <div className='flex items-center justify-between'>
              <Skeleton width={100} baseColor={isDarkMode && "#27272c"} highlightColor={isDarkMode && "#444"} />
              <div className="flex items-center">
                <TbCurrencyNaira size={20} />
                <Skeleton width={50} baseColor={isDarkMode && "#27272c"} highlightColor={isDarkMode && "#444"} />
              </div>
            </div>
            <div>
                <Skeleton baseColor={isDarkMode && "#27272c"} highlightColor={isDarkMode && "#444"} circle width={FullScreen ? 40 : 32} className="w-8 md:w-10 aspect-square" />
            </div>
        </div>
    ))
}

export default PostsSkeleton;