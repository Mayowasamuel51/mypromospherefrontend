import { Link } from "react-router-dom";
import FetchTrendingAds from '../../../hooks/fetchTrendingAds';
import { useStateContext } from '../../../contexts/ContextProvider';
import PostsSkeleton from '../../../components/postsSkeleton';
import ProductDisplay from "../../../components/productDisplay"


const Feeds = () => {
  const { data, isLoading, error } = FetchTrendingAds();
  if (error) return <div className='min-h-screen grid place-items-center text-red md:text-xl text-lg'><p>{error?.message}</p></div>
  return (
    <section>
      <h1 className="font-semibold lg:text-3xl text-lg my-7">Personalized ads just for you</h1>
      <section className="relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-6">
        {isLoading && <PostsSkeleton posts={4} />}
        {data?.data?.normalads.length === 0 &&
          <div className='flex flex-col gap-2 md:col-span-2 lg:col-span-4 exl:col-span-4 text-center'>
            <h1 className="text-semibold text-base md:text-xl">No post Yet!!!</h1>
            <Link to={`/dashboard/postAd`} className="text-purple underline font-medium">Be the First to Showcase Your Product</Link>
          </div>
        }
        {data?.data.normalads.slice(0, 4).map((item) => (
          <ProductDisplay key={item.id} item={item} other_images={data?.data?.other_images} />
        ))}
      </section>
    </section>
  )
}

export default Feeds