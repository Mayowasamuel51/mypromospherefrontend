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
                <div className="min-h-screen">
                    <div className='flex flex-col gap-2 md:col-span-2 lg:col-span-4 exl:col-span-4 text-center'>
                        <h1 className="text-semibold text-base md:text-xl">No post Yet!!!</h1>
                        <Link to={`/dashboard/postAd`} className="text-[#3D217A] underline font-medium">Be the First to Showcase Your Product</Link>
                    </div>
                </div>
            }
            {data?.data.normalads.filter((item) => item.categories === "Apartment").length > 0 &&
                <div className="flex items-center gap-2 lg:my-10 my-5">
                    <h1 className='font-medium md:font-bold text-lg lg:text-xl large:text-3xl'>Find Your Dream Property: Discover Homes Tailored to Your Lifestyle!</h1>
                </div>
            }
            <section className="relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-6 min-h-full">
                {isLoading && <PostsSkeleton posts={12} />}
                {data?.data.normalads.filter((item) => item.categories === "Apartment").map((item) => (
                    <ProductDisplay key={item.id} item={item} other_images={data?.data?.other_images} />
                ))}
            </section>
            {data?.data.normalads.filter((item) => item.categories === "Fashion").length > 0 &&
                <div className="flex items-center gap-2 lg:my-10 my-5">
                    <h1 className='font-medium md:font-bold text-lg lg:text-2xl exl:text-3xl'>Always Stay in Vogue</h1>
                </div>}
            <section className="relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-6 min-h-full">
                {isLoading && <PostsSkeleton posts={4} />}
                {data?.data.normalads.filter((item) => item.categories === "Fashion").map((item) => (
                    <ProductDisplay key={item.id} item={item} other_images={data?.data?.other_images} />
                ))}
            </section>
            {data?.data.normalads.filter((item) => item.categories === "Skincare").length > 0 &&
                <div className="flex items-center gap-2 lg:my-10 my-5">
                    <h1 className='font-medium md:font-bold text-lg lg:text-2xl exl:text-3xl'>Unlock Your Best Skin: Elevate Your Routine with Premium Skincare!</h1>
                </div>}
            <section className="relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-6 min-h-full">
                {isLoading && <PostsSkeleton posts={4} />}
                {data?.data.normalads.filter((item) => item.categories === "Skincare").map((item) => (
                    <ProductDisplay key={item.id} item={item} other_images={data?.data?.other_images} />
                ))}
            </section>
            {data?.data.normalads.filter((item) => item.categories === "Laptops").length > 0 &&
                <div className="flex items-center gap-2 lg:my-10 my-5">
                    <h1 className='font-medium md:font-bold text-lg lg:text-2xl exl:text-3xl'>Unleash Your Productivity: Explore the Latest Laptop Innovations!</h1>
                </div>}
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