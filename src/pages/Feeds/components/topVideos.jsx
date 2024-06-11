import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import anon from "../../../assests/images/anon.png"
import { Link } from 'react-router-dom';
import FetchVideos from '../../../hooks/fetchVideos';
import ReactPlayer from 'react-player'
import { useStateContext } from '../../../contexts/ContextProvider';
import { FaPlay } from "react-icons/fa6";
import Loader from '../../../loader';

const TopVideos = () => {
    const {token} = useStateContext();
    const { data, isLoading, error } = FetchVideos();
    console.log(data?.data?.videos)
    return (
        <section className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-10 overflow-x-hidden">
            {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
            {data?.data?.videos.map((video) => (
                <div key={video.id} className='flex flex-col gap-4'>
                    <div className='border-2 border-red w-full'>
                        <ReactPlayer style={{width: "280px"}} url={video?.titlevideourl} playing={true} light="true" 
                        // loop={true} muted={true}

                         playIcon={<FaPlay />} className="w-full react-player" />
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