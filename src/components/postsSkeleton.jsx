import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useStateContext } from '../contexts/ContextProvider';

const PostsSkeleton = () => {
    const {FullScreen} = useStateContext()
  return (
    <div className='flex flex-col gap-2 md:gap-4'>
        <Skeleton width={280} height={300} />
        <Skeleton circle width={FullScreen ? 40 : 32} className="w-8 md:w-10 aspect-square" />
    </div>
  )
}

export default PostsSkeleton