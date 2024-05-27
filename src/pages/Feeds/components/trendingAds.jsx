import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import user from "../../../assests/images/user.svg";
import LOGO from "../../../assests/SVGs/logo.svg"
import { Link } from 'react-router-dom';
import FetchTrendingAds from "../../../hooks/fetchTrendingAds";
// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Loader from '../../../loader';
import { useStateContext } from '../../../contexts/ContextProvider';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./trends.css"


const TrendingAds = () => {
    const { FullScreen } = useStateContext()
    const { data, isLoading, error } = FetchTrendingAds();
    console.log(data?.data.other_images.filter((img) => img.itemfree_ads_id === 8));
    if (error) return <div className='min-h-screen grid place-items-center'><p>{error.message}</p></div>

    return (
        <section className="overflow-x-hidden">
            <div className="flex items-center gap-2 lg:my-10 my-5">
                <img src={LOGO} className='w-10 h-10' alt="" />
                <h1 className='font-medium md:font-bold text-sm lg:text-xl large:text-3xl'>Find Your Dream Property: Discover Homes Tailored to Your Lifestyle!</h1>
            </div>
            {/* <section className="relative grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
                {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
                {data?.data.normalads.filter((item) => item.categories === "Apartment").map((item) => (
                    <Link to={`/feed/${item.id}`} key={item.id} className="flex flex-col gap-2 md:gap-4">
                        <Splide options={{
                            type: 'loop',
                            perPage: 1,
                            perMove: 1,
                            autoplay: true,
                            interval: FullScreen ? 3000: 5000,
                            speed: 3000,
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
                                <LazyLoadImage effect='blur' src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                            </SplideSlide>
                            {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                                <SplideSlide key={img.id} className='rounded-md w-fit border-2'>
                                    <LazyLoadImage effect='blur' src={img.itemadsimagesurls} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                                </SplideSlide>
                            ))}
                        </Splide>
                        <Link to="/profile/timilehin babade">
                            <div className="flex items-center gap-2">
                                <LazyLoadImage effect="blur" src={item.user_image || user} alt="" className="rounded-full w-8 md:w-10 aspect-square" />
                                <p className="text-sm font-medium">USER-ID {item.user_id}</p>
                            </div>
                        </Link>
                    </Link>
                ))}
            </section> */}
            {/* <div className="flex items-center gap-2 lg:my-10 my-5">
                <img src={LOGO} className='w-10 h-10' alt="" />
                <h1 className='font-medium md:font-bold text-sm lg:text-2xl exl:text-3xl'>ALWAYS STAY IN VOGUE</h1>
            </div> */}
            {/* <section className="relative grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
                {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
                {data?.data.normalads.filter((item) => item.categories === "Apartment").map((item) => (
                    <Link to={`/feed/${item.id}`} key={item.id} className="flex flex-col gap-2 md:gap-4">
                        <Splide options={{
                            type: 'loop',
                            perPage: 1,
                            perMove: 1,
                            autoplay: true,
                            interval: FullScreen ? 3000: 5000,
                            speed: 3000,
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
                                <LazyLoadImage effect='blur' src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                            </SplideSlide>
                            {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                                <SplideSlide key={img.id} className='rounded-md w-fit border-2'>
                                    <LazyLoadImage effect='blur' src={img.itemadsimagesurls} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                                </SplideSlide>
                            ))}
                        </Splide>
                        <Link to="/profile/timilehin babade">
                            <div className="flex items-center gap-2">
                                <LazyLoadImage effect="blur" src={item.user_image || user} alt="" className="rounded-full w-8 md:w-10 aspect-square" />
                                <p className="text-sm font-medium">USER-ID {item.user_id}</p>
                            </div>
                        </Link>
                    </Link>
                ))}
            </section>
            <div className="flex items-center gap-2 lg:my-10 my-5">
                <img src={LOGO} className='w-10 h-10' alt="" />
                <h1 className='font-medium md:font-bold text-sm lg:text-2xl exl:text-3xl'>Unlock Your Best Skin: Elevate Your Routine with Premium Skincare!</h1>
            </div>
            <section className="relative grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
                {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
                {data?.data.normalads.filter((item) => item.categories === "Apartment").map((item) => (
                    <Link to={`/feed/${item.id}`} key={item.id} className="flex flex-col gap-2 md:gap-4">
                        <Splide options={{
                            type: 'loop',
                            perPage: 1,
                            perMove: 1,
                            autoplay: true,
                            interval: FullScreen ? 3000: 5000,
                            speed: 3000,
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
                                <LazyLoadImage effect='blur' src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                            </SplideSlide>
                            {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                                <SplideSlide key={img.id} className='rounded-md w-fit border-2'>
                                    <LazyLoadImage effect='blur' src={img.itemadsimagesurls} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                                </SplideSlide>
                            ))}
                        </Splide>
                        <Link to="/profile/timilehin babade">
                            <div className="flex items-center gap-2">
                                <LazyLoadImage effect="blur" src={item.user_image || user} alt="" className="rounded-full w-8 md:w-10 aspect-square" />
                                <p className="text-sm font-medium">USER-ID {item.user_id}</p>
                            </div>
                        </Link>
                    </Link>
                ))}
            </section>
            <div className="flex items-center gap-2 lg:my-10 my-5">
                <img src={LOGO} className='w-10 h-10' alt="" />
                <h1 className='font-medium md:font-bold text-sm lg:text-2xl exl:text-3xl'>Unleash Your Productivity: Explore the Latest Laptop Innovations!</h1>
            </div>
            <section className="relative grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
                {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
                {data?.data.normalads.filter((item) => item.categories === "Apartment").map((item) => (
                    <Link to={`/feed/${item.id}`} key={item.id} className="flex flex-col gap-2 md:gap-4">
                        <Splide options={{
                            type: 'loop',
                            perPage: 1,
                            perMove: 1,
                            autoplay: true,
                            interval: FullScreen ? 3000: 5000,
                            speed: 3000,
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
                                <LazyLoadImage effect='blur' src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                            </SplideSlide>
                            {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                                <SplideSlide key={img.id} className='rounded-md w-fit border-2'>
                                    <LazyLoadImage effect='blur' src={img.itemadsimagesurls} alt="" style={{ width: 280, height: 400 }} className="rounded-md object-cover" />
                                </SplideSlide>
                            ))}
                        </Splide>
                        <Link to="/profile/timilehin babade">
                            <div className="flex items-center gap-2">
                                <LazyLoadImage effect="blur" src={item.user_image || user} alt="" className="rounded-full w-8 md:w-10 aspect-square" />
                                <p className="text-sm font-medium">USER-ID {item.user_id}</p>
                            </div>
                        </Link>
                    </Link>
                ))}
            </section> */}
        </section>
    )
}

export default TrendingAds;