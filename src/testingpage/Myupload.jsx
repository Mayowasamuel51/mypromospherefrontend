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
  if (error) return <div className='min-h-screen grid place-items-center'><p><h1>{error?.message}</h1></p></div>

  return (
    <div className="overflow-x-hidden">
      <section className="relative grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 exl:grid-cols-6 gap-4">
        {/* {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-6'><Loader /></div>} */}
        {!data?.data.posts && <h1 className='grid-cols-3 col-span-3 md:col-span-4 lg:col-span-4 exl:col-span-6'>You have not made any post Yet!</h1>}
        {(data?.data.posts && !isLoading) && 
        data?.data.posts.map((item) => (
          <Link to={`/feed/${item.id}`} key={item.id} className="flex flex-col">
            <div className="">
              <div className=''>
                <LazyLoadImage effect='blur' src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" className="w-full h-[100px] md:h-[200px] object-cover" />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Myuploads;
