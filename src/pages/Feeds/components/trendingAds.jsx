import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import anon from "../../../assests/images/anon.png"
import { Link } from 'react-router-dom';
import FetchTrendingAds from "../../../hooks/fetchTrendingAds";
import { useStateContext } from '../../../contexts/ContextProvider';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./trends.css"
import PostsSkeleton from '../../../components/postsSkeleton';


const TrendingAds = () => {
    const { token } = useStateContext()
    const { data, isLoading, error } = FetchTrendingAds();
    console.log(data);
    if (error) return <div className='min-h-screen grid place-items-center text-red md:text-xl text-lg'><p>{error?.message}</p></div>
    return (
        <section className="overflow-x-hidden">
            <div className="flex items-center gap-2 lg:my-10 my-5">
                <h1 className='font-medium md:font-bold text-lg lg:text-xl large:text-3xl'>Find Your Dream Property: Discover Homes Tailored to Your Lifestyle!</h1>
            </div>
            <section className="relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-6 min-h-full">
                {!data?.data.normalads.filter((item) => item.categories === "Apartment") && <h1 className='md:col-span-2 lg:col-span-4 exl:col-span-4 text-semibold text-base md:text-xl'>No post Yet!!!</h1>}
                {isLoading && <PostsSkeleton posts={12} />}
                {data?.data.normalads.filter((item) => item.categories === "Apartment").map((item) => (
                    <div key={item.id} className="flex flex-col gap-2 md:gap-4">
                        {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).length > 0 ?
                            <Splide options={{
                                type: 'slide',
                                focus: 1,
                                start: 1,
                                gap: "20px",
                                perPage: 1,
                                arrows: false,
                                pagination: true,
                                snap: true,
                                // cloneStatus: false,
                                width: "100%",
                                height: "300px",
                            }} className="">
                                <SplideSlide className='rounded-md'>
                                    <Link to={`/feed/${item.id}`}>
                                        <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                                    </Link>
                                </SplideSlide>
                                {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                                    <SplideSlide key={img.id} className='rounded-md'>
                                        <Link to={`/feed/${item.id}`}>
                                            <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={img.itemadsimagesurls} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                                        </Link>
                                    </SplideSlide>
                                ))}
                            </Splide> :
                            <div>
                                <Link to={`/feed/${item.id}`}>
                                    <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                                </Link>
                            </div>
                        }
                        <Link to={`/profile/user/${item.user_name}`} className="w-fit">
                            {/* <Link to={`/profile/user/${item.name}`} className="w-fit"> */}
                            <div className="flex items-center gap-2">
                                <img src={item.user_image === "null" ? anon : item.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square object-cover" />
                                {token && <p className="text-sm font-medium">{item.user_id === token.id ? "me" : item.user_name}</p>}
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
            <div className="flex items-center gap-2 lg:my-10 my-5">
                <h1 className='font-medium md:font-bold text-lg lg:text-2xl exl:text-3xl'>Always Stay in Vogue</h1>
            </div>
            <section className="relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-6 min-h-full">
                {isLoading && <PostsSkeleton posts={4} />}
                {!data?.data.normalads.filter((item) => item.categories === "Fashion") && <h1 className='md:col-span-2 lg:col-span-4 exl:col-span-4 text-semibold text-base md:text-xl'>No post Yet!!!</h1>}
                {data?.data.normalads.filter((item) => item.categories === "Fashion").map((item) => (
                    <div key={item.id} className="flex flex-col gap-2 md:gap-4">
                        {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).length > 0 ?
                            <Splide options={{
                                type: 'slide',
                                focus: 1,
                                start: 1,
                                gap: "20px",
                                perPage: 1,
                                arrows: false,
                                pagination: true,
                                snap: true,
                                // cloneStatus: false,
                                width: "100%",
                                height: "300px",
                            }} className="">
                                <SplideSlide className='rounded-md'>
                                    <Link to={`/feed/${item.id}`}>
                                        <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                                    </Link>
                                </SplideSlide>
                                {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                                    <SplideSlide key={img.id} className='rounded-md'>
                                        <Link to={`/feed/${item.id}`}>
                                            <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={img.itemadsimagesurls} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                                        </Link>
                                    </SplideSlide>
                                ))}
                            </Splide> :
                            <div>
                                <Link to={`/feed/${item.id}`}>
                                    <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                                </Link>
                            </div>
                        }
                        <Link to={`/profile/user/${item.user_name}`} className="w-fit">
                            <div className="flex items-center gap-2">
                                <img src={item.user_image === "null" ? anon : item.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square object-cover" />
                                {token && <p className="text-sm font-medium">{item.user_id === token.id ? "me" : item.user_name}</p>}
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
            <div className="flex items-center gap-2 lg:my-10 my-5">
                <h1 className='font-medium md:font-bold text-lg lg:text-2xl exl:text-3xl'>Unlock Your Best Skin: Elevate Your Routine with Premium Skincare!</h1>
            </div>
            <section className="relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-6 min-h-full">
                {!data?.data.normalads.filter((item) => item.categories === "Skincare") && <h1 className='md:col-span-2 lg:col-span-4 exl:col-span-4 text-semibold text-base md:text-xl'>No post Yet!!!</h1>}
                {isLoading && <PostsSkeleton posts={4} />}
                {data?.data.normalads.filter((item) => item.categories === "Skincare").map((item) => (
                    <div key={item.id} className="flex flex-col gap-2 md:gap-4">
                        {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).length > 0 ?
                            <Splide options={{
                                type: 'slide',
                                focus: 1,
                                start: 1,
                                gap: "20px",
                                perPage: 1,
                                arrows: false,
                                pagination: true,
                                snap: true,
                                // cloneStatus: false,
                                width: "100%",
                                height: "300px",
                            }} className="">
                                <SplideSlide className='rounded-md'>
                                    <Link to={`/feed/${item.id}`}>
                                        <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                                    </Link>
                                </SplideSlide>
                                {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                                    <SplideSlide key={img.id} className='rounded-md'>
                                        <Link to={`/feed/${item.id}`}>
                                            <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={img.itemadsimagesurls} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                                        </Link>
                                    </SplideSlide>
                                ))}
                            </Splide> :
                            <div>
                                <Link to={`/feed/${item.id}`}>
                                    <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                                </Link>
                            </div>
                        }
                        <Link to={`/profile/user/${item.user_name}`} className="w-fit">
                            <div className="flex items-center gap-2">
                                <img src={item.user_image === "null" ? anon : item.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square object-cover" />
                                {token && <p className="text-sm font-medium">{item.user_id === token.id ? "me" : item.user_name}</p>}
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
            <div className="flex items-center gap-2 lg:my-10 my-5">

                <h1 className='font-medium md:font-bold text-lg lg:text-2xl exl:text-3xl'>Unleash Your Productivity: Explore the Latest Laptop Innovations!</h1>
            </div>
            <section className="relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-6 min-h-full">
                {!data?.data.normalads.filter((item) => item.categories === "Laptops") && <h1 className='md:col-span-2 lg:col-span-4 exl:col-span-4 text-semibold text-base md:text-xl'>No post Yet!!!</h1>}
                {isLoading && <PostsSkeleton posts={4} />}
                {data?.data.normalads.filter((item) => item.categories === "Laptops").map((item) => (
                    <div key={item.id} className="flex flex-col gap-2 md:gap-4">
                        {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).length > 0 ?
                            <Splide options={{
                                type: 'slide',
                                focus: 1,
                                start: 1,
                                gap: "20px",
                                perPage: 1,
                                arrows: false,
                                pagination: true,
                                snap: true,
                                // cloneStatus: false,
                                width: "100%",
                                height: "300px",
                            }} className="">
                                <SplideSlide className='rounded-md'>
                                    <Link to={`/feed/${item.id}`}>
                                        <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                                    </Link>
                                </SplideSlide>
                                {data?.data?.other_images.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                                    <SplideSlide key={img.id} className='rounded-md'>
                                        <Link to={`/feed/${item.id}`}>
                                            <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={img.itemadsimagesurls} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                                        </Link>
                                    </SplideSlide>
                                ))}
                            </Splide> :
                            <div>
                                <Link to={`/feed/${item.id}`}>
                                    <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                                </Link>
                            </div>
                        }
                        <Link to={`/profile/user/${item.user_name}`} className="w-fit">
                            <div className="flex items-center gap-2">
                                <img src={item.user_image === "null" ? anon : item.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square object-cover" />
                                {token && <p className="text-sm font-medium">{item.user_id === token.id ? "me" : item.user_name}</p>}
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </section>
    )
}

export default TrendingAds;