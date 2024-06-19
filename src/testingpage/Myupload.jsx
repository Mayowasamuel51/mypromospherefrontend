import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from 'react-router-dom';
import FetchUserposts from '../hooks/LoggedInUserPost';
import UploadSkeleton from '../components/uploadSkeleton';
import PropTypes from 'prop-types';


const Myuploads = ({ id }) => {
  const { token } = useStateContext();
  const { data, isLoading, error } = FetchUserposts(token);
  if (error) return <div className='min-h-screen grid place-items-center'><p><h1>{error?.message}</h1></p></div>
  return (
    <div className="">
      <section className="relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
        {(!data?.data.posts && !isLoading) && <h1 className='text-center col-span-2 md:col-span-4 lg:col-span-4'>{token?.id == id ? "You have" : "This User has"} not made any post Yet!</h1>}
        {(isLoading) && <UploadSkeleton posts={8} />}
        {(data?.data.posts && !isLoading) &&
          data?.data.posts.map((item) => (
            <Link to={`/feed/${item.id}`} key={item.id} className="">
              <div className="">
                <div className=''>
                  {item.titleImageurl ? <LazyLoadImage width={`100%`} effect='blur' style={{objectFit:"cover"}} src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" className="w-full h-[200px] object-cover rounded-md" /> : 'NOTHING TO SHOW '}
                </div>
              </div>
            </Link>
          ))}
      </section>
    </div>
  );
};

Myuploads.propTypes = {
  id : PropTypes.string.isRequired
}


export default Myuploads;