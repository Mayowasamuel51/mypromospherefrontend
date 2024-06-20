import { useOutletContext } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useStateContext } from "../../../contexts/ContextProvider";
import { Link } from 'react-router-dom';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import Loader from "../loader";
import FetchOtherUserposts from '../../../hooks/otherUsersPosts';
import UploadSkeleton from "../../../components/uploadSkeleton";

const ProfilePost = () => {
  const user_name = useOutletContext()
  const { token } = useStateContext();
  const { data, isLoading, error } = FetchOtherUserposts(user_name);
  if (error?.response?.status === 404) {
    console.log(error)
  } else {
    <div className='min-h-screen grid place-items-center'><p><h1>{error?.message}</h1></p></div>
  }
  return (
    <div className="overflow-x-hidden px-4 lg:px-10 py-2 lg:py-10">
      <section className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 exl:grid-cols-6 gap-4 md:gap-10">
        {(!data?.data.ads && !isLoading) && <h1 className='text-center col-span-2 md:col-span-3 lg:col-span-4 exl:col-span-6 my-2'>{token?.user_name == user_name ? "You have" : "This User has"} not made any post Yet!</h1>}
        {(isLoading) && <UploadSkeleton posts={6} />}
        {(data?.data.ads && !isLoading) &&
          data?.data.ads.map((item) => (
            <Link to={`/feed/${item.id}`} key={item.id} className="flex flex-col">
              <div className="">
                <div className=''>
                  <LazyLoadImage width={`100%`} height={200} effect='blur' src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" className="w-full h-[200px] object-cover rounded-md" />
                </div>
              </div>
            </Link>
          ))}
      </section>
    </div>
  );
}

export default ProfilePost;