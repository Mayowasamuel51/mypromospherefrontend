// this is the user upload page for the noraml ads (which is just images ) video ads
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useStateContext } from "../contexts/ContextProvider";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Loader from "../loader";
import FetchUserposts from '../hooks/LoggedInUserPost';


// eslint-disable-next-line react/prop-types
const Myuploads = ({ id }) => {
  const { token } = useStateContext();
  const { data, isLoading, error } = FetchUserposts(token)
  if (error) return <div className='min-h-screen grid place-items-center'><p><h1>{error?.message}</h1></p></div>
  return (
    <div className="overflow-x-hidden">
      <section className="relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 exl:grid-cols-6 gap-4">
        {(!data?.data.posts && !isLoading) && <h1 className='text-center col-span-2 md:col-span-4 lg:col-span-4 exl:col-span-6'>{token?.id == id ? "You have" : "This User has"} not made any post Yet!</h1>}
        {(data?.data.posts && !isLoading) &&
          data?.data.posts.map((item) => (
            <Link to={`/feed/${item.id}`} key={item.id} className="">
              <div className="">
                <div className=''>
                  {item.titleImageurl ? <LazyLoadImage effect='blur' src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" className="w-full h-[150px] md:h-[200px] object-cover" /> : 'NOTHING TO SHOW '}
                </div>
              </div>
            </Link>
          ))}
      </section>
    </div>
  );
};

export default Myuploads;
