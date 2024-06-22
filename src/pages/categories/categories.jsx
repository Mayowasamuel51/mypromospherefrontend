import Navbar from "../../components/Navbar";
import { Link, useParams } from 'react-router-dom';
import FetchCategories from "../../hooks/fetchCategories";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import anon from "../../assests/images/anon.png"
import { useStateContext } from "../../contexts/ContextProvider";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "../Feeds/components/trends.css";
import PostsSkeleton from "../../components/postsSkeleton";
import { TbCurrencyNaira } from "react-icons/tb";

const Categories = () => {
  const { token } = useStateContext()
  const { category } = useParams();
  const { data, isLoading, error } = FetchCategories(category)
  console.log(data)
  return (
    <>
      <Navbar blue={true} />
      <section className="py-20 lg:py-20 px-4 md:px-10">
        {category === "discount" && <h1 className="font-semibold text-2xl capitalize mx-3 md:mx-4 my-3">Products/properties on discount</h1>}
        {error && <div className='min-h-screen grid place-items-center text-red md:text-xl text-lg'><p>{error?.message}</p></div>}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
          {isLoading && <PostsSkeleton posts={8} />}
          {category === "discount" &&
            data?.data?.discount.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 md:gap-4">
                {data?.data?.other_image.filter((img) => img.itemfree_ads_id === item.id).length > 0 ?
                  <Splide options={{
                    type: 'slide',
                    focus: 1,
                    start: 1,
                    gap: "20px",
                    perPage: 1,
                    arrows: false,
                    pagination: true,
                    snap: true,
                    width: "100%",
                    height: "300px"
                  }} className="">
                    <SplideSlide className='rounded-md'>
                      <Link to={`/feed/${item.id}`}>
                        <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300 }} className="w-full rounded-md object-cover" />
                      </Link>
                    </SplideSlide>
                    {data?.data?.other_image.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                      <SplideSlide key={img.id} className='rounded-md'>
                        <Link to={`/feed/${item.id}`}>
                          <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={img.itemadsimagesurls} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="w-full rounded-md object-cover" />
                        </Link>
                      </SplideSlide>
                    ))}
                  </Splide> :
                  <div>
                    <Link to={`/feed/${item.id}`}>
                      <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300 }} className="w-full rounded-md object-cover" />
                    </Link>
                  </div>
                }
                <div className='flex items-center justify-between'>
                  <h1 className='font-semibold'>name</h1>
                  <div className="flex items-center">
                    <TbCurrencyNaira size={20} />
                    <p className="text-sm">{(+item.price_range).toLocaleString()}</p>
                  </div>
                </div>
                <Link to={`/profile/user/${item.user_name}`} className="w-fit">
                  <div className="flex items-center gap-2">
                    <img src={item.user_image === "null" ? anon : item.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square object-cover" />
                    {token && <p className="text-sm font-medium">{item.user_id === token.id ? "me" : item.user_name}</p>}
                    {!token &&<p className="text-sm font-medium">{item.user_name}</p>}i
                  </div>
                </Link>
              </div>
            ))
          }
          {category === "property" &&
            data?.data?.property.map((property) => (
              <div key={property.id} className="flex flex-col gap-2 md:gap-4">
                <div>
                  <Link to={`/feed/${property.id}`}>
                    <LazyLoadImage width={`100%`} visibleByDefault={property.src === property.titleImageurl} effect='blur' src={`https://apimypromospheretest.com.ng/public/storage/${property.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300 }} className="rounded-md object-cover" />
                  </Link>
                </div>
                <Link to={`/profile/user/${property.user_id}`} className="w-fit">
                  <div className="flex items-center gap-2">
                    <img src={property.user_image === "null" || property.user_image === "undefined" ? anon : property.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square" />
                    <p className="text-sm font-medium">{property.user_id === token.id && "me"}</p>
                  </div>
                </Link>
              </div>
            ))
          }
          {category === "apartment" &&
            data?.data?.apartment.map((apartment) => (
              <div key={apartment.id} className="flex flex-col gap-2 md:gap-4">
                <div>
                  <Link to={`/feed/${apartment.id}`}>
                    <LazyLoadImage width={`100%`} visibleByDefault={apartment.src === apartment.titleImageurl} effect='blur' src={`https://apimypromospheretest.com.ng/public/storage/${apartment.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300 }} className="rounded-md object-cover" />
                  </Link>
                </div>
                <Link to={`/profile/user/${apartment.user_id}`} className="w-fit">
                  <div className="flex items-center gap-2">
                    <img src={apartment.user_image === "null" || apartment.user_image === "undefined" ? anon : apartment.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square" />
                    <p className="text-sm font-medium">{apartment.user_id === token.id && "me"}</p>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Categories;