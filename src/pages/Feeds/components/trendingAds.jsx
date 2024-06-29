import { Link } from 'react-router-dom';
import FetchTrendingAds from "../../../hooks/fetchTrendingAds";
import PostsSkeleton from '../../../components/postsSkeleton';
import ProductDisplay from '../../../components/productDisplay';

const TrendingAds = () => {
    const { data, isLoading, error } = FetchTrendingAds();
    if (error) return <div className='min-h-screen grid place-items-center text-red md:text-xl text-lg'><p>{error?.message}</p></div>
    return (
        <section className="overflow-x-hidden">
            {data?.data?.normalads.length === 0 &&
                <div className="min-h-screen grid place-items-center md:col-span-2 lg:col-span-4 exl:col-span-4">
                    <div className='flex flex-col gap-2 text-center'>
                        <h1 className="text-semibold text-base md:text-xl">No post Yet!!!</h1>
                        <Link to={`/dashboard/postAd`} className="text-purple underline font-medium">Be the First to Showcase Your Product</Link>
                    </div>
                </div>
            }
            {data?.data.normalads.filter((item) => item.categories === "Apartment").length > 0 &&
                <div className="flex items-center gap-2 lg:my-10 my-5">
                    <h1 className='font-medium md:font-bold text-lg lg:text-xl large:text-3xl dark:text-mainTextDark'>Find Your Perfect Home: Modern Apartments for Every Lifestyle</h1>
                </div>
            }
            <section className="relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-6 min-h-full">
                {isLoading && <PostsSkeleton posts={12} />}
                {data?.data.normalads.filter((item) => item.categories === "Apartment").map((item) => (
                    <ProductDisplay key={item.id} item={item} other_images={data?.data?.other_images} />
                ))}
            </section>
            {data?.data.normalads.filter((item) => item.categories === "Luxury-apartment").length > 0 &&
                <div className="flex items-center gap-2 lg:my-10 my-5">
                    <h1 className='font-medium md:font-bold text-lg lg:text-2xl exl:text-3xl dark:text-mainTextDark'>Live in Elegance: Discover Your Dream Luxury Apartment Today</h1>
                </div>
            }
            <section className="relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-6 min-h-full">
                {isLoading && <PostsSkeleton posts={4} />}
                {data?.data.normalads.filter((item) => item.categories === "Luxury-apartment").map((item) => (
                    <ProductDisplay key={item.id} item={item} other_images={data?.data?.other_images} />
                ))}
            </section>
            {data?.data.normalads.filter((item) => item.categories === "Vehicles Upgrade").length > 0 &&
                <div className="flex items-center gap-2 lg:my-10 my-5">
                    <h1 className='font-medium md:font-bold text-lg lg:text-2xl exl:text-3xl dark:text-mainTextDark'>Drive in Style: Upgrade to the Vehicle of Your Dreams</h1>
                </div>
            }
            <section className="relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-6 min-h-full">
                {isLoading && <PostsSkeleton posts={4} />}
                {data?.data.normalads.filter((item) => item.categories === "Vehicles Upgrade").map((item) => (
                    <ProductDisplay key={item.id} item={item} other_images={data?.data?.other_images} />
                ))}
            </section>
            {data?.data.normalads.filter((item) => item.categories === "Laptops").length > 0 &&
                <div className="flex items-center gap-2 lg:my-10 my-5">
                    <h1 className='font-medium md:font-bold text-lg lg:text-2xl exl:text-3xl dark:text-mainTextDark'>Unleash Power and Performance: Get the Latest Premium Laptops!</h1>
                </div>
            }
            <section className="relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-6 min-h-full">
                {isLoading && <PostsSkeleton posts={4} />}
                {data?.data?.normalads.filter((item) => item.categories === "Laptops").map((item) => (
                    <ProductDisplay key={item.id} item={item} other_images={data?.data?.other_images} />
                ))}
            </section>
        </section>
    )
}

export default TrendingAds;