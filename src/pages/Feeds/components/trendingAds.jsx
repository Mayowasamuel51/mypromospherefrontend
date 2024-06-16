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
import "./trends.css"
import PostsSkeleton from '../../../components/postsSkeleton';


const TrendingAds = () => {
    const { token } = useStateContext()
    const { data, isLoading, error } = FetchTrendingAds();

    if (error) return <div className='min-h-screen grid place-items-center text-red md:text-xl text-lg'><p>{error?.message}</p></div>
    return (
        <section className="overflow-x-hidden">
            <div className="flex items-center gap-2 lg:my-10 my-5">
                <h1 className='font-medium md:font-bold text-lg lg:text-xl large:text-3xl'>Find Your Dream Property: Discover Homes Tailored to Your Lifestyle!</h1>
            </div>
            <section className="relative grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">

                {/* {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>} */}
                {isLoading && <PostsSkeleton posts={data?.data.normalads.filter((item) => item.categories === "Apartment").length} />}
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
                        }
                        <Link to={`/profile/user/${item.user_id}`} className="w-fit">
                            <div className="flex items-center gap-2">
                                <img src={item.user_image === "null" ? anon : item.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square object-cover" />
                                {token && <p className="text-sm font-medium">{item.user_id === token.id && "me"}</p>}
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
                                <img src={item.user_image === "null" ? anon : item.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square object-cover" />
                                {token && <p className="text-sm font-medium">{item.user_id === token.id && "me"}</p>}
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
                                <img src={item.user_image === "null" ? anon : item.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square object-cover" />
                                {token && <p className="text-sm font-medium">{item.user_id === token.id && "me"}</p>}
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
                                <img src={item.user_image === "null" ? anon : item.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square object-cover" />
                                {token && <p className="text-sm font-medium">{item.user_id === token.id && "me"}</p>}
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </section>
    )
}

export default TrendingAds;