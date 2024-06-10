import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import user from "../../../assests/images/user.svg";
import anon from "../../../assests/images/anon.png"
import LOGO from "../../../assests/SVGs/logo.svg"
import { Link } from 'react-router-dom';
import FetchTrendingAds from "../../../hooks/fetchTrendingAds";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import Loader from '../../../loader';
import { useStateContext } from '../../../contexts/ContextProvider';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Helmet } from "react-helmet";
import "./trends.css"
import GoogleTag from '../../../Google';
const lazyLoad = import.meta.env.VITE_LAZY_LOAD_IMAGES

const TrendingAds = () => {
    const { token } = useStateContext()
    const { data, isLoading, error } = FetchTrendingAds();
<<<<<<< HEAD

=======
    // console.log(data?.data.normalads)
>>>>>>> 797f23eb420612158275622ec2ca8060ee824227
    if (error) return <div className='min-h-screen grid place-items-center text-red md:text-xl text-lg'><p>{error?.message}</p></div>
    return (
        <section className="overflow-x-hidden">
            <GoogleTag/>
            <Helmet>
        <meta charSet="utf-8" />
        <title>Trending Ads</title>
        <meta
          name="keywords"
          content="Affordable prices ,Customer reviews,  Buy and sell ,Online shopping,Product listings, Digital marketplace, Fast shipping"
        />
        <link rel="canonical" href="https://www.mypromosphere.com" />
        <meta
          name="description"
          content={
           "Mypromosphere is the premier online marketplace for effectively selling your products and services. Discover discounted and high-quality goods from real people and enjoy the best deals. Plus, you can upload your ads for free"
          }
        />
          <meta
          property="og:description"
          content={
            "Mypromosphere is the premier online marketplace for effectively selling your products and services. Discover discounted and high-quality goods from real people and enjoy the best deals. Plus, you can upload your ads for free"
          }
        />
      </Helmet>
            <div className="flex items-center gap-2 lg:my-10 my-5">
                {/* <img src={LOGO} className='w-10 h-10' alt="" /> */}
                <h1 className='font-medium md:font-bold text-lg lg:text-xl large:text-3xl'>Find Your Dream Property: Discover Homes Tailored to Your Lifestyle!</h1>
            </div>
<<<<<<< HEAD
            <section className="relative grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
                {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
                {data?.data.normalads.filter((item) => item.categories === "Apartment").map((item) => (
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
=======
         <section className="relative grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
                {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
                {data?.data.normalads.filter((item) => item.categories === "Apartment").map((item) => (
                    <Link to={`/feed/${item.id}`} key={item.id} className="flex flex-col gap-2 md:gap-4">
                        {data?.data?.other_images.length > 1 ? 
                        <Splide options={{
                            type: 'loop',
                            perPage: 1,
                            perMove: 1,
                            autoplay: true,
                            interval: FullScreen ? 3000: 5000,
                            speed: 4000,
                            gap: "20px",
                            pauseOnHover: true,
                            arrows: !FullScreen ? true : false,
                            pagination: true,
                            drag: 'free',
                            snap: true,
                            width: "280px",
                            height: "400px"
                        }} className="p-2">
                            <SplideSlide className='rounded-md w-fit border-2'>
                                <LazyLoadImage effect='blur' src={`${lazyLoad}/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                            </SplideSlide>
                            {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                                <SplideSlide key={img.id} className='rounded-md w-fit border-2'>
                                    <LazyLoadImage effect='blur' src={img.itemadsimagesurls} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                                </SplideSlide>
                            ))}
                        </Splide> : 
                        <div>
                            <LazyLoadImage effect='blur' src={`${lazyLoad}/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                        </div>
                        }
                        <Link to="/profile/timilehin babade">
                            <div className="flex items-center gap-2">
                                <LazyLoadImage effect="blur" src={item.user_image === "null" ? anon : item.user_image} alt="" className="rounded-full w-8 md:w-10 aspect-square" />
                                <p className="text-sm font-medium">USER-ID {item.user_id}</p>
                            </div>
                        </Link>
                    </Link>
                ))}
            </section>
            <div className="flex items-center gap-2 lg:my-10 my-5">
          
                <h1 className='font-medium md:font-bold text-sm lg:text-2xl exl:text-3xl'>ALWAYS STAY IN VOGUE</h1>
            </div> 
            <section className="relative grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
                {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
                {data?.data.normalads.filter((item) => item.categories === "Apartment").map((item) => (
                    <Link to={`/feed/${item.id}`} key={item.id} className="flex flex-col gap-2 md:gap-4">
                        {data?.data?.other_images.length > 1 ? 
                        <Splide options={{
                            type: 'loop',
                            perPage: 1,
                            perMove: 1,
                            autoplay: true,
                            interval: FullScreen ? 3000: 5000,
                            speed: 4000,
                            gap: "20px",
                            pauseOnHover: true,
                            arrows: !FullScreen ? true : false,
                            pagination: true,
                            drag: 'free',
                            snap: true,
                            width: "280px",
                            height: "400px"
                        }} className="p-2">
                            <SplideSlide className='rounded-md w-fit border-2'>
                                <LazyLoadImage effect='blur' src={`${lazyLoad}/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                            </SplideSlide>
                            {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                                <SplideSlide key={img.id} className='rounded-md w-fit border-2'>
                                    <LazyLoadImage effect='blur' src={img.itemadsimagesurls} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                                </SplideSlide>
                            ))}
                        </Splide> : 
                        <div>
                            <LazyLoadImage effect='blur' src={`${lazyLoad}/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                        </div>
>>>>>>> 797f23eb420612158275622ec2ca8060ee824227
                        }
                        <Link to={`/profile/user/${item.user_id}`} className="w-fit">
                            <div className="flex items-center gap-2">
                                <img src={item.user_image === "null" ? anon : item.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square" />
                                <p className="text-sm font-medium">{item.user_id === token.id && "me"}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
            <div className="flex items-center gap-2 lg:my-10 my-5">

                <h1 className='font-medium md:font-bold text-lg lg:text-2xl exl:text-3xl'>ALWAYS STAY IN VOGUE</h1>
            </div>
            <section className="relative grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
                {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
<<<<<<< HEAD
                {data?.data.normalads.filter((item) => item.categories === "Fashion").map((item) => (
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
=======
                {data?.data.normalads.filter((item) => item.categories === "Apartment").map((item) => (
                    <Link to={`/feed/${item.id}`} key={item.id} className="flex flex-col gap-2 md:gap-4">
                        <Splide options={{
                            type: 'loop',
                            perPage: 1,
                            perMove: 1,
                            autoplay: true,
                            interval: FullScreen ? 3000: 5000,
                            speed: 4000,
                            gap: "20px",
                            pauseOnHover: true,
                            arrows: !FullScreen ? true : false,
                            pagination: true,
                            drag: 'free',
                            snap: true,
                            width: "280px",
                            height: "400px"
                        }} className="p-2">
                            <SplideSlide className='rounded-md w-fit border-2'>
                                <LazyLoadImage effect='blur' src={`${lazyLoad}/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                            </SplideSlide>
                            {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                                <SplideSlide key={img.id} className='rounded-md w-fit border-2'>
                                    <LazyLoadImage effect='blur' src={img.itemadsimagesurls} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
>>>>>>> 797f23eb420612158275622ec2ca8060ee824227
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
                                <p className="text-sm font-medium">{item.user_id === token.id && "me"}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
            <div className="flex items-center gap-2 lg:my-10 my-5">

                <h1 className='font-medium md:font-bold text-lg lg:text-2xl exl:text-3xl'>Unlock Your Best Skin: Elevate Your Routine with Premium Skincare!</h1>
            </div>
            <section className="relative grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
                {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
<<<<<<< HEAD
                {data?.data.normalads.filter((item) => item.categories === "Skincare").map((item) => (
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
=======
                {data?.data.normalads.filter((item) => item.categories === "Apartment").map((item) => (
                    <Link to={`/feed/${item.id}`} key={item.id} className="flex flex-col gap-2 md:gap-4">
                        <Splide options={{
                            type: 'loop',
                            perPage: 1,
                            perMove: 1,
                            autoplay: true,
                            interval: FullScreen ? 3000: 5000,
                            speed: 4000,
                            gap: "20px",
                            pauseOnHover: true,
                            arrows: !FullScreen ? true : false,
                            pagination: true,
                            drag: 'free',
                            snap: true,
                            width: "280px",
                            height: "400px"
                        }} className="p-2">
                            <SplideSlide className='rounded-md w-fit border-2'>
                                <LazyLoadImage effect='blur' src={`${lazyLoad}/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                            </SplideSlide>
                            {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                                <SplideSlide key={img.id} className='rounded-md w-fit border-2'>
                                    <LazyLoadImage effect='blur' src={img.itemadsimagesurls} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
>>>>>>> 797f23eb420612158275622ec2ca8060ee824227
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
                                <p className="text-sm font-medium">{item.user_id === token.id && "me"}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
            <div className="flex items-center gap-2 lg:my-10 my-5">

                <h1 className='font-medium md:font-bold text-lg lg:text-2xl exl:text-3xl'>Unleash Your Productivity: Explore the Latest Laptop Innovations!</h1>
            </div>
            <section className="relative grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
                {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
                {data?.data.normalads.filter((item) => item.categories === "Laptops").map((item) => (
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
                                <p className="text-sm font-medium">{item.user_id === token.id && "me"}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </section>
    )
}

export default TrendingAds;