import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import FetchSingleAd from '../../hooks/fetchSingleAd';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Loader from '../../loader';
import LOGO from "../../assests/SVGs/logo.svg"
import anon from "../../assests/images/anon.png"
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { TbCurrencyNaira } from "react-icons/tb";

const SingleFeedPage = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { data, isLoading, error } = FetchSingleAd(id);
    console.log(data?.data?.data)
    if (isLoading) return <Loader />
    if (error) return <div className='min-h-screen grid place-items-center'><p>{error.message}</p></div>
    return (
        <>
            <Navbar blue={true} />
            <section className="pt-16 lg:pt-20 px-4 lg:px-10">
                <div onClick={() => navigate(-1)} className='cursor-pointer my-2'>
                    <IoChevronBackCircleSharp size={30} />
                </div>
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1 flex flex-col gap-4">
                        <div className='rounded-md'>
                            <LazyLoadImage effect="blur" src={`https://apimypromospheretest.com.ng/public/storage/${data?.data?.data.titleImageurl.slice(7)}`} alt="img" className="rounded-md w-full h-full object-cover" />
                        </div>
                        <Link to={`/profile/user/${data?.data?.data.user_id}`}>
                            <div className="flex items-center gap-2">
                                <img src={data?.data?.data.user_image ?? anon} alt="user-profile" className="rounded-full w-10 aspect-square" />
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
                    </div>
                </div>
            </section>
            <div className="px-4 lg:px-10 flex items-center gap-2 lg:my-10 my-5">
                <img src={LOGO} className='w-10 h-10' alt="" />
                <h1 className='font-medium md:font-bold text-sm lg:text-2xl exl:text-3xl'>OTHERS</h1>
            </div>
            <section className="px-4 lg:px-10 grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-4">
                {data?.data?.other_data.map((item) => (
                    <Link to={`/feed/${item.id}`} key={item.id} className="flex flex-col gap-2 md:gap-4">
                        <div className='border-2 rounded-md'>
                            <LazyLoadImage effect="blur" src={`${item.itemadsimagesurls
                                }`} alt="" style={{ width: 250, height: 250, objectFit: "cover" }} className="rounded-md" />
                        </div>
                        <Link to="/profile/timilehin babade">
                            <div className="flex items-center gap-2">
                                <LazyLoadImage effect="blur" src={item.user_image} alt="" className="rounded-full w-8 md:w-10 aspect-square border-2" />
                                {/* <p className="text-sm font-medium">USER-ID {item.user_id}</p> */}
                            </div>
                        </Link>
                    </Link>
                ))}
            </section>
        </>
    )
}

export default SingleFeedPage;