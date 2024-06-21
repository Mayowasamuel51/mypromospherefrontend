import Navbar from "../../components/Navbar";
import { Link, useParams } from 'react-router-dom';
import FetchCategories from "../../hooks/fetchCategories";
import Loader from "../../loader";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import anon from "../../assests/images/anon.png"
import { useStateContext } from "../../contexts/ContextProvider";

const Categories = () => {
  const { token } = useStateContext()
  const { category } = useParams();
  const { data, isLoading, error } = FetchCategories(category)
  console.log(data)
  return (
    <>
      <Navbar blue={true} />
      <section className="py-20 lg:py-20 px-4 md:px-10">
        {category === "discount" && <h1 className="font-semibold text-2xl capitalize mx-3 md:mx-8 my-4">Products/properties on discount</h1>}
        {error && <div className='min-h-screen grid place-items-center text-red md:text-xl text-lg'><p>{error?.message}</p></div>}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
          {isLoading && <div className='md:col-span-2 lg:col-span-3 exl:col-span-4'><Loader /></div>}
          {category === "discount" &&
            data?.data.discount.map((discount) => (
              <div key={discount.id} className="flex flex-col gap-2 md:gap-4">
                <div>
                  <Link to={`/feed/${discount.id}`}>
                    <LazyLoadImage width={`100%`} visibleByDefault={discount.src === discount.titleImageurl} effect='blur' src={`https://apimypromospheretest.com.ng/public/storage/${discount.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                  </Link>
                </div>
                <Link to={`/profile/user/${discount.user_id}`} className="w-fit">
                  <div className="flex items-center gap-2">
                    <img src={discount.user_image === "null" || discount.user_image === "undefined" ? anon : discount.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square" />
                    <p className="text-sm font-medium">{discount.user_id === token.id && "me"}</p>
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