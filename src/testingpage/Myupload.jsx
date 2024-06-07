// this is the user upload page for the noraml ads (which is just images ) video ads
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Loader from "../loader";
import FetchUserposts from '../hooks/UserPost';
const api_load_v1 = import.meta.env.VITE_POSTSV_UPLOADS;
const api_load_v2 = import.meta.env.VITE_POSTS_UPLOADS;


const Myuploads = () => {
  const {token} = useStateContext();
  const { data , isLoading , error } = FetchUserposts(token)

  console.log(data?.data.posts)
  console.log(error)
  if (error) return <div className='min-h-screen grid place-items-center'><p><h1>{error?.message}</h1></p></div>

  return (
    <div className="overflow-x-hidden">
      <section className="relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4">
        {/* {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>} */}
        {!data?.data.posts && <h1 className='md:col-span-2 lg:col-span-3 exl:col-span-4'>You have not made any post Yet!</h1>}
        {(data?.data.posts && !isLoading) && 
        data?.data.posts.map((item) => (
          <Link to={`/feed/${item.id}`} key={item.id} className="flex flex-col">
            <div className="">
              <div className=''>
                <LazyLoadImage effect='blur' src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" className="w-full h-[420px] object-cover" />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Myuploads;
