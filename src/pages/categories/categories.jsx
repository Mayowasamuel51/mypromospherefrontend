import Navbar from "../../components/Navbar";
import { useParams } from 'react-router-dom';
import FetchCategories from "../../hooks/fetchCategories";
import PostsSkeleton from "../../components/postsSkeleton";
import ProductDisplay from "../../components/productDisplay";

const Categories = () => {
  const { category } = useParams();
  const { data, isLoading, error } = FetchCategories(category)
  console.log(data)
  return (
    <>
      <Navbar blue={true} />
      <section className="py-20 lg:py-20 px-4 md:px-10">
        {category === "discount" && <h1 className="font-semibold text-base md:text-2xl capitalize mx-3 md:mx-4 my-3">Products/properties on discount</h1>}
        {error && <div className='min-h-screen grid place-items-center text-red md:text-xl text-lg'><p>{error?.message}</p></div>}
        <div className="py-2 relative grid md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
          {isLoading && <PostsSkeleton posts={8} />}
          {category === "discount" &&
            data?.data?.discount.map((item) => (
              <ProductDisplay key={item.id} item={item} other_images={data?.data?.other_image} />
            ))
          }
          {category === "property" &&
            data?.data?.property.map((property) => (
              <ProductDisplay key={property.id} item={property} other_images={data?.data?.other_image} />
            ))
          }
          {category === "apartment" &&
            data?.data?.apartment.map((apartment) => (
              <ProductDisplay key={apartment.id} item={apartment} other_images={data?.data?.other_image} />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Categories;