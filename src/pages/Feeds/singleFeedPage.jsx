import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import FetchSingleAd from '../../hooks/fetchSingleAd';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Loader from '../../loader';
import anon from "../../assests/images/anon.png"
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { TbCurrencyNaira } from "react-icons/tb";
import { useStateContext } from '../../contexts/ContextProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from "react-icons/fa";

const SingleFeedPage = () => {
    const { FullScreen } = useStateContext()
    const { id } = useParams();
    const navigate = useNavigate()
    const { data, isLoading, error } = FetchSingleAd(id);
    console.log(data?.data?.data)
    const [imageUrl, setImageUrl] = useState("")
    const [imageKey, setImageKey] = useState(0);

    useEffect(() => {
        if (data?.data?.data?.titleImageurl) {
            setImageUrl(`https://apimypromospheretest.com.ng/public/storage/${data.data.data.titleImageurl.slice(7)}`);
        }
    }, [data]);

    const handleImageChange = (img) => {
        setImageUrl(img)
        setImageKey(prevKey => prevKey + 1);
    }
    if (isLoading) return <Loader />

    if (error) return <div className='min-h-screen grid place-items-center'><p>{error.message}</p></div>

    return (
        <>
            <Navbar blue={true} />
            <section className="pt-16 lg:pt-32 px-4 lg:px-10">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                        <div className='relative'>
                            <div className='rounded-md'>
                                <AnimatePresence mode='popLayout'>
                                    {imageUrl && (
                                        <motion.img
                                            key={`${imageUrl}-${imageKey}`}
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ type: "spring", stiffness: 100 }}
                                            src={imageUrl}
                                            style={{ width: FullScreen ? 700 : "100%" }}
                                            alt="img"
                                            className="rounded-md w-full h-[400px] md:h-[500px] object-cover"
                                        />
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="flex flex-col gap-2 absolute top-2 left-2">
                                {data?.data?.other_data.map((item) => (
                                    <motion.div onClick={() => handleImageChange(item.itemadsimagesurls)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} key={item.id} className="flex flex-col gap-2 md:gap-4">
                                        <div className='rounded-md'>
                                            <LazyLoadImage effect="blur" src={`${item.itemadsimagesurls}`} alt="" style={{ width: 80, height: 80, objectFit: "cover" }} className="rounded-md" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <Link to={`/profile/user/${data?.data?.data.user_name}`} className='flex items-center gap-2'>
                            <div className="flex items-center gap-2">
                                <img src={data?.data?.data.user_image === "null" || data?.data?.data.user_image ? anon : data?.data?.data.user_image} alt="user-profile" className="rounded-full w-12 aspect-square" />
                            </div>
                            <div>
                                <p>{data?.data?.data.user_name}</p>
                            </div>
                        </Link>
                        <p className='text-[#3D217A] font-bold text-lg'>{data?.data?.data?.categories}</p>
                        <p className='font-bold text-lg'>{data?.data?.data?.productName || "This should be the product name"}</p>
                        {/* <h1 className='md:text-3xl font-semibold text-xl uppercase'>{data?.data?.data?.headlines}</h1> */}
                        <div>
                            <h1 className='font-bold text-base'>Description</h1>
                            <p className='p-4 bg-[#dcdcdc] rounded-md'>{data?.data?.data?.description}</p>
                        </div>
                        <p className='flex items-center'>
                            <TbCurrencyNaira size={35} />
                            <span>{data?.data?.data?.price_range ?? 10000}</span>
                        </p>
                        <div className="flex items-center justify-between px-2 text-center divide-x-2 border-x-black">
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-semibold text-sm'>STATE</h1>
                                <p className=''>{data?.data?.data?.state}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-semibold text-sm'>LGA</h1>
                                <p className=''>{data?.data?.data?.local_gov}</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-semibold text-sm'>Date Posted:</h1>
                                <p>{new Date(data?.data?.data?.created_at)?.toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 md:gap-10'>
                            <button className="flex-1 bg-[#3D217A] border border-[#3D217A] hover:bg-transparent hover:text-[#3D217A] duration-300 w-full py-2 md:py-3 px-4 text-white rounded-md">Leave a Feedback</button>
                            <div>
                                <FaHeart color="red" size={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleFeedPage;

{/* <div onClick={() => navigate(-1)} className='cursor-pointer my-2'>
    <IoChevronBackCircleSharp size={30} />
</div> */}