import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const UploadSkeleton = ({ posts }) => {
    return Array.from({ length: posts }).map((_, index) => (
        <div key={index} className=''>
            <div>
                <Skeleton width={200} height={200} />
            </div>
        </div>
    ))
}


export default UploadSkeleton;