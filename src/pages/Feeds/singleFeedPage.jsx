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

const SingleFeedPage = () => {
    const { FullScreen } = useStateContext()
    const { id } = useParams();
    const navigate = useNavigate()
    const { data, isLoading, error } = FetchSingleAd(id);
    console.log(data?.data?.data)
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        if (data?.data?.data?.titleImageurl) {
            setImageUrl(`https://apimypromospheretest.com.ng/public/storage/${data.data.data.titleImageurl.slice(7)}`);
        }
    }, [data]);

    if (isLoading) return <Loader />
    if (error) return <div className='min-h-screen grid place-items-center'><p>{error.message}</p></div>
    return (
        <>
            <Navbar blue={true} />
            <section className="pt-16 lg:pt-32 px-4 lg:px-10">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1 flex flex-col gap-2">
                        <div className='relative'>
                            <AnimatePresence>
                                <div className='rounded-md'>
                                    {imageUrl && (
                                        <LazyLoadImage
                                            effect="blur"
                                            src={imageUrl}
                                            style={{ width: FullScreen ? 600 : 280, height: 400 }}
                                            alt="img"
                                            className="rounded-md w-full h-[300px] md:h-[400px] object-cover"
                                        />
                                    )}
                                </div>
                            </AnimatePresence>
                            <div className="flex flex-col gap-2 absolute top-2 left-2">
                                {data?.data?.other_data.map((item) => (
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} key={item.id} className="flex flex-col gap-2 md:gap-4">
                                        <div className='border-2 rounded-md'>
                                            <LazyLoadImage effect="blur" src={`${item.itemadsimagesurls
                                                }`} alt="" style={{ width: 80, height: 80, objectFit: "cover" }} className="rounded-md" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <Link to={`/profile/user/${data?.data?.data.user_id}`}>
                            <div className="flex items-center gap-2">
                                <img src={data?.data?.data.user_image === "null" || data?.data?.data.user_image ? anon : data?.data?.data.user_image} alt="user-profile" className="rounded-full w-12 aspect-square" />
                            </div>
                        </Link>
                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <p className='text-[#3D217A] font-medium text-lg my-4'>{data?.data?.data?.categories}</p>
                        <p>{data?.data?.data?.productName || "No Name"}</p>
                        <h1 className='md:text-3xl font-semibold text-xl uppercase'>{data?.data?.data?.headlines}</h1>
                        <p className='p-4 border-l-2 border-black'>{data?.data?.data?.description}</p>
                        <p><TbCurrencyNaira />{data?.data?.data?.price_range ?? 10000}</p>
                        <div className='flex items-center gap-2'>
                            <h1 className='font-semibold text-lg'>STATE</h1>
                            <p className=''>{data?.data?.data?.state}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h1 className='font-semibold text-lg'>LGA</h1>
                            <p className=''>{data?.data?.data?.local_gov}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h1 className='font-semibold text-lg'>Date Posted:</h1>
                            <p>{new Date(data?.data?.data?.created_at)?.toLocaleDateString()}</p>
                        </div>
                        <div className='flex items-center justify-between gap-2'>
                            <div className='flex items-center gap-3'>
                                <button className="bg-[#3D217A] w-full py-2 md:py-3 px-4 text-white rounded-md">BUY</button>
                                <button className="bg-[#3D217A] w-full py-2 md:py-3 px-4 text-white rounded-md">LIKE</button>
                            </div>
                            <div onClick={() => navigate(-1)} className='cursor-pointer my-2'>
                                <IoChevronBackCircleSharp size={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleFeedPage;