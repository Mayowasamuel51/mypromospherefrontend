import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const VideoSkeleton = ({ posts }) => {
    return Array.from({ length: posts }).map((_, index) => (
        <div key={index} className=''>
            <div>
                <Skeleton width={280} height={300} borderRadius={8} />
            </div>
        </div>
    ))
}


export default VideoSkeleton;