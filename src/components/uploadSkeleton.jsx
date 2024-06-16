import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useStateContext } from '../contexts/ContextProvider';

const UploadSkeleton = ({ posts }) => {
    return Array.from({ length: posts }).map((_, index) => (
        <div key={index} className='cann'>
            <div>
                <Skeleton width={280} height={300} />
            </div>
        </div>
    ))
}


export default UploadSkeleton;