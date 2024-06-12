import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import anon from "../../../assests/images/anon.png"
import { Link } from "react-router-dom";
import FetchTrendingAds from '../../../hooks/fetchTrendingAds';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./trends.css";
import Loader from '../../../loader';
import { useStateContext } from '../../../contexts/ContextProvider';


const Feeds = () => {
  const { token } = useStateContext()
  const { data, isLoading, error } = FetchTrendingAds();
  if (error) return <div className='min-h-screen grid place-items-center text-red md:text-xl text-lg'><p>{error?.message}</p></div>
  return (
    <section>
      <h1 className="font-semibold lg:text-3xl text-lg my-7">Personalized ads just for you</h1>
      <section className="relative grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
        {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
        {data?.data.normalads.map((item, _, arr) => arr.length < 5 && (
          <div key={item.id} className="flex flex-col gap-2 md:gap-4">
            {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).length > 0 ?
              <Splide options={{
                type: 'loop',
                perPage: 1,
                perMove: 1,
                autoplay: true,
                interval: Math.floor(Math.random() * 5 + 3) * 1000,
                speed: 3000,
                gap: "20px",
                pauseOnHover: true,
                arrows: true,
                pagination: true,
                drag: 'free',
                snap: true,
                width: "280px",
                height: "300px"
              }} className="p-2">
                <SplideSlide className='rounded-md w-fit'>
                  <Link to={`/feed/${item.id}`}>
                    <LazyLoadImage visibleByDefault={item.src === item.itemadsimagesurls} effect='blur' src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: 280, height: 300 }} className="rounded-md object-cover" />
                  </Link>
                </SplideSlide>
                {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                  <SplideSlide key={img.id} className='rounded-md w-fit'>
                    <Link to={`/feed/${item.id}`}>
                      <LazyLoadImage visibleByDefault={img.src === img.itemadsimagesurls} effect='blur' src={img.itemadsimagesurls} alt="" style={{ width: 280, height: 300 }} className="rounded-md object-cover" />
                    </Link>
                  </SplideSlide>
                ))}
              </Splide> :
              <div>
                <Link to={`/feed/${item.id}`}>
                  <LazyLoadImage visibleByDefault={item.src === item.itemadsimagesurls} effect='blur' src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: 280, height: 300 }} className="rounded-md object-cover" />
                </Link>
              </div>
            }
            <Link to={`/profile/user/${item.user_id}`} className="w-fit">
              <div className="flex items-center gap-2">
                <img src={item.user_image === "null" ? anon : item.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square" />
                {token && <p className="text-sm font-medium">{item.user_id === token.id && "me"}</p>}
              </div>
            </Link>
          </div>
        ))}
      </section>
      {/* <div className="place-items-center grid items-stretch md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-10 grid-rows-1 overflow-x-hidden">
        <div className="flex flex-col gap-4">
          <Link to="/feed/1">
            <div>
              <LazyLoadImage effect="blur" src={feed1} alt="" style={{ width: 280, height: 280, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
            </div>
          </Link>
          <Link to="/profile/user/1">
            <div className="flex items-center gap-2">
              <img src={user} alt="profile-picture" className="w-10 aspect-square" />
              <p className="text-sm">Timilehin babade</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link to="/feed/1">
            <div>
              <LazyLoadImage effect="blur" src={feed1} alt="" style={{ width: 280, height: 280, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
            </div>
          </Link>
          <Link to="/profile/user/1">
            <div className="flex items-center gap-2">
              <img src={user} alt="profile-picture" className="w-10 aspect-square" />
              <p className="text-sm">Timilehin babade</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link to="/feed/1">
            <div>
              <LazyLoadImage effect="blur" src={feed2} alt="" style={{ width: 280, height: 280, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
            </div>
          </Link>
          <Link to="/profile/user/1">
            <div className="flex items-center gap-2">
              <LazyLoadImage effect="blur" src={user} alt=""  className="w-10 aspect-square" />
              <p className="text-sm">Timilehin babade</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link to="/feed/1">
            <div>
              <LazyLoadImage effect="blur" src={feed2} alt="" style={{ width: 280, height: 280, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
            </div>
          </Link>
          <Link to="/profile/user/1">
            <div className="flex items-center gap-2">
              <img src={user} alt="profile-picture" className="w-10 aspect-square" />
              <p className="text-sm">Timilehin babade</p>
            </div>
          </Link>
        </div>
      </div> */}
    </section>
  )
}

export default Feeds