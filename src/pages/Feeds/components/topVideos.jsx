import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import anon from "../../../assests/images/anon.png"
import { Link } from 'react-router-dom';
import FetchVideos from '../../../hooks/fetchVideos';
import ReactPlayer from 'react-player'
import { useStateContext } from '../../../contexts/ContextProvider';
import { FaPlay } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import Loader from '../../../loader';
import thumbnail from "../../../assests/images/feed1.svg"

const TopVideos = () => {
    const {token} = useStateContext();
    const { data, isLoading, error } = FetchVideos();
    console.log(data?.data?.videos)
    if (error) return <div className='min-h-screen grid place-items-center text-red md:text-xl text-lg'><p>{error?.message}</p></div>
    return (
        <section className="relative grid md:gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-10 py-4">
            {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
            {data?.data?.videos.map((video) => (
                <div key={video.id} className='flex flex-col gap-4'>
                    <div className='w-full aspect-ratio-box'>
                        <ReactPlayer width={280} height={300} url={video?.titlevideourl} playing={true} light={thumbnail} loop={true} muted={true} playIcon={<FaRegCirclePlay size={20} color='#fff' />} className="w-fit rounded-lg hover:outline hover:outline-2 hover:outline-[#3D217A]" />
                    </div>
                    <Link to={`/profile/user/${video.user_id}`} className="w-fit">
                        <div className="flex items-center gap-2">
                            <img src={video.user_image === null ? anon : video.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square" />
                            {token && <p className="text-sm font-medium">{video.user_id === token.id && "me"}</p>}
                        </div>
                    </Link>
                </div>
            ))}
        </section>
    )
}

export default TopVideos;