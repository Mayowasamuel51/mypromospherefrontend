import { useOutletContext } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Loader from "../loader";
import FetchOtherUserposts from '../../../hooks/otherUsersPosts';

const ProfilePost = () => {
  const id = useOutletContext()

  return (
    <div className="relative px-4 lg:px-10 py-2 lg:py-10">
      <h1 className="text-center text-4xl">POSTS</h1>
    </div>
  )
}

export default ProfilePost;