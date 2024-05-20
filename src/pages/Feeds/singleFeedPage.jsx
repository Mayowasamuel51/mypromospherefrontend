import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import FetchSingleAd from '../../hooks/fetchSingleAd';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Loader from '../../loader';

const SingleFeedPage = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { data, isLoading, error } = FetchSingleAd(id);
    console.table(data?.data?.data)
    if (isLoading) return <Loader />
    return (
        <>
            <Navbar blue={true} />
            <section className="pt-16 lg:pt-32 px-4 lg:px-10">
                <div onClick={()=> navigate(-1)} className='cursor-pointer my-2'>
                    Go Back
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className="flex flex-col gap-4">
                        <div className='border-2 rounded-md w-fit h-fit'>
                            <LazyLoadImage effect="blur" src={`https://apimypromospheretest.com.ng/public/storage/${data?.data?.data.titleImageurl.slice(7)}`} alt="" style={{ width: 300, height: 300 }} className="rounded-md w-full h-full object-cover" />
                        </div>
                        <Link to="/profile/timilehin babade">
                            <div className="flex items-center gap-2">
                                <LazyLoadImage effect="blur" src={data?.data?.data.user_image} alt="" className="rounded-full w-10 aspect-square" />
                                <p className="text-sm">USER-ID {data?.data?.data.user_id}</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <h1 className='md:text-3xl font-semibold text-xl'>{data?.data?.data?.headlines}</h1>
                        <p>Date Posted: {new Date(data?.data?.data?.created_at)?.toLocaleDateString()}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleFeedPage;