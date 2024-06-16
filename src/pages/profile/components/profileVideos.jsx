import { useOutletContext } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useStateContext } from "../../../contexts/ContextProvider";
import { Link } from 'react-router-dom';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import Loader from "../loader";
import FetchOtherUserVideos from '../../../hooks/otherUsersVideos';
import anon from "../../../assests/images/anon.png"
import ReactPlayer from "react-player";
import { FaRegCirclePlay } from "react-icons/fa6";
import Loader from '../../../loader';
import thumbnail1 from "../../../assests/images/feed1.svg"
import thumbnail2 from "../../../assests/images/feed2.svg"
import UploadSkeleton from "../../../components/uploadSkeleton";


const ProfileVideos = () => {
  const id = useOutletContext()
  const { token } = useStateContext();
  const { data, isLoading, error } = FetchOtherUserVideos(id);

  console.log(data)
  if (error?.response?.status === 404) {
    console.log(error)
  } else {
    <div className='min-h-screen grid place-items-center'><p><h1>{error?.message}</h1></p></div>
  }
  return (
    <section className="relative grid md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 exl:grid-cols-6 gap-10 px-4 lg:px-10 py-2 lg:py-10">
    {(!data?.data.videos && !isLoading )&& <h1 className='text-center col-span-2 md:col-span-3 lg:col-span-4 exl:col-span-6 my-2'>{token?.id == id ? "You have" : "This User has"} not made any post Yet!</h1>}
      {(isLoading) && <UploadSkeleton posts={6} />}
      {data?.data?.videos.map((video) => (
        <div key={video.id} className='flex flex-col gap-4'>
          <div className='w-full aspect-ratio-box rounded-lg overflow-hidden'>
            <ReactPlayer width={280} height={300} url={video?.titlevideourl} playing={true} light={video.id % 2 === 0 ? thumbnail1 : thumbnail2} loop={true} muted={true} playIcon={<FaRegCirclePlay size={50} color='#fff' />} className="w-fit hover:outline hover:scale-105 duration-300" />
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

export default ProfileVideos;