import { useOutletContext } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useStateContext } from "../../../contexts/ContextProvider";
import { Link } from 'react-router-dom';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import Loader from "../loader";
import FetchOtherUserVideos from '../../../hooks/otherUsersVideos';
import anon from "../../../assests/images/anon.png"


const ProfileVideos = () => {
  const id = useOutletContext()
  const { token } = useStateContext();
  const { data, isLoading, error } = FetchOtherUserVideos(id);
  console.log(data)
  if (error) return <div className='min-h-screen grid place-items-center'><p><h1>{error?.message}</h1></p></div>
  return (
    <h1 className="text-center font-bold text-3xl my-4">VIDEOS</h1>
  )
}

export default ProfileVideos;