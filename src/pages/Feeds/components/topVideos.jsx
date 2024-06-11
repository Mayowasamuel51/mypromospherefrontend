import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import user from "../../../assests/images/user.svg"
import anon from "../../../assests/images/anon.png"
import feed1 from "../../../assests/images/feed1.svg";
import feed2 from "../../../assests/images/feed2.svg";
import feed3 from "../../../assests/images/feed3.svg";
import feed4 from "../../../assests/images/feed4.svg";
import feed5 from "../../../assests/images/feed5.svg";
import feed6 from "../../../assests/images/feed6.svg";
import { Link } from 'react-router-dom';
import FetchVideos from '../../../hooks/fetchVideos';
import ReactPlayer from 'react-player'
import { useStateContext } from '../../../contexts/ContextProvider';

const TopVideos = () => {
    const {token} = useStateContext();
    const { data, isLoading, error } = FetchVideos();
    console.log(data?.data?.videos)
    return (
        <section className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-10 overflow-x-hidden">
            {data?.data?.videos.map((video) => (
                <div key={video.id} className='flex flex-col gap-4'>
                    <div>
                        <ReactPlayer url={video?.titlevideourl} />
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