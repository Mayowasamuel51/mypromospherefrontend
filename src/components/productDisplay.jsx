import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import anon from "../assests/images/anon.png"
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "../pages/Feeds/components/trends.css";
import { TbCurrencyNaira } from "react-icons/tb";
import { useStateContext } from '../contexts/ContextProvider';
const api_gerenal = import.meta.env.VITE_GENERAL;
import PropTypes from 'prop-types';

const ProductDisplay = ({item, other_images}) => {
    const { token } = useStateContext()
    return (
        <div key={item.id} className="product-display flex flex-col gap-2 md:gap-4">
            {other_images?.filter((img) => img.itemfree_ads_id === item.id).length > 0 ?
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
                    height: "300px",
                }} className="">
                    <SplideSlide className='rounded-md'>
                        <Link to={`/feed/${item.id}`}>
                            <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={`${api_gerenal}/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                        </Link>
                    </SplideSlide>
                    {other_images?.filter((img) => img.itemfree_ads_id === item.id).map((img, index, arr) => arr.length > 0 && (
                        <SplideSlide key={img.id} className='rounded-md'>
                            <Link to={`/feed/${item.id}`}>
                                <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={img.itemadsimagesurls} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                            </Link>
                        </SplideSlide>
                    ))}
                </Splide> :
                <div>
                    <Link to={`/feed/${item.id}`}>
                        <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={`${api_gerenal}/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300, objectFit: "cover" }} className="rounded-md object-cover" />
                    </Link>
                </div>
            }
            <div className='flex items-center justify-between'>
                <h1 className='font-extralight dark:text-mainTextDark'>{item.productName}</h1>
                <div className="flex items-center">
                    <TbCurrencyNaira size={20} />
                    <p className="text-sm dark:text-mainTextDark">{(+item.price_range).toLocaleString()}</p>
                </div>
            </div>
            <Link to={`/profile/user/${item.user_name}`} className="w-fit">
                <div className="flex items-center gap-2">
                    <img src={item.user_image === "null" ? anon : item.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square object-cover" />
                    {token && <p className="text-sm font-medium dark:text-smallTextDark">{item.user_id === token.id ? "me" : item.user_name}</p>}
                    {!token &&<p className="text-sm font-medium dark:text-smallTextDark">{item.user_name}</p>}
                </div>
            </Link>
        </div>
    )
}

ProductDisplay.propTypes = {
    item : PropTypes.any,
    other_images : PropTypes.array
}

export default ProductDisplay