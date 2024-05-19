import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import user from "../../../assests/images/user.svg";
import LOGO from "../../../assests/SVGs/logo.svg"
// import feed1 from "../../../assests/images/feed1.svg";
// import feed2 from "../../../assests/images/feed2.svg";
// import feed3 from "../../../assests/images/feed3.svg";
// import feed4 from "../../../assests/images/feed4.svg";
// import feed5 from "../../../assests/images/feed5.svg";
// import feed6 from "../../../assests/images/feed6.svg";
import { Link } from 'react-router-dom';
import FetchTrendingAds from "../../../hooks/fetchTrendingAds";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const TrendingAds = () => {
    const { data, isLoading, error } = FetchTrendingAds();
    console.table(data?.data.normalads);
    return (
        <section className="overflow-x-hidden">
            <div className="flex items-center gap-2">
                <img src={LOGO} className='w-10 h-10' alt="" />
                <h1 className='font-bold lg:my-4 my-2 text-base md:text-3xl'>GET APARTMENTS NEAR YOU</h1>
            </div> 
            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {data?.data.normalads.filter((item) => item.categories === "Apartment").map((item) => (
                    <div key={item.id} className="flex flex-col gap-4">
                        <div>
                            <LazyLoadImage effect="blur" src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: 400, height: 400, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
                        </div>
                        <Link to="/profile/timilehin babade">
                            <div className="flex items-center gap-2">
                                <LazyLoadImage effect="blur" src={item.user_image || user} alt="" className="rounded-full w-10 aspect-square" />
                                <p className="text-sm">Timilehin babade</p>
                            </div>
                        </Link>
                    </div>
                )) || <Skeleton />}
            </section>
            <div className="flex items-center gap-2">
                <img src={LOGO} className='w-10 h-10' alt="" />
                <h1 className='font-bold lg:my-4 my-2 text-base md:text-3xl'>ALWAYS STAY IN VOGUE</h1>
            </div>
            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {data?.data.normalads.filter((item) => item.categories === "Fashion").map((item) => (
                    <div key={item.id} className="flex flex-col gap-4">
                        <div>
                            <LazyLoadImage effect="blur" src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: 400, height: 400, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
                        </div>
                        <Link to="/profile/timilehin babade">
                            <div className="flex items-center gap-2">
                                <LazyLoadImage effect="blur" src={item.user_image || user} alt="" className="rounded-full w-10 aspect-square" />
                                <p className="text-sm">Timilehin babade</p>
                            </div>
                        </Link>
                    </div>
                )) || <Skeleton />}
            </section>
            <div className="flex items-center gap-2">
                <img src={LOGO} className='w-10 h-10' alt="" />
                <h1 className='font-bold lg:my-4 my-2 text-base md:text-3xl'>YOU SKIN WILL THANK YOU</h1> 
            </div>
            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {data?.data.normalads.filter((item) => item.categories === "Skincare").map((item) => (
                    <div key={item.id} className="flex flex-col gap-4">
                        <div>
                            <LazyLoadImage effect="blur"
                             src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: 400, height: 400, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
                        </div>
                        <Link to="/profile/timilehin babade">
                            <div className="flex items-center gap-2">
                                <LazyLoadImage effect="blur" src={item.user_image || user} alt="" className="rounded-full w-10 aspect-square" />
                                <p className="text-sm">Timilehin babade</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
            {/* <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="flex flex-col gap-4">
                    <div>
                        <LazyLoadImage effect="blur" src={feed3} alt="" style={{ width: 400, height: 400, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
                    </div>
                    <Link to="/profile/timilehin babade">
                        <div className="flex items-center gap-2">
                            <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                            <p className="text-sm">Timilehin babade</p>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <LazyLoadImage effect="blur" src={feed4} alt="" style={{ width: 400, height: 400, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
                    </div>
                    <Link to="/profile/timilehin babade">
                        <div className="flex items-center gap-2">
                            <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                            <p className="text-sm">Timilehin babade</p>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <LazyLoadImage effect="blur" src={feed5} alt="" style={{ width: 400, height: 400, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
                    </div>
                    <Link to="/profile/timilehin babade">
                        <div className="flex items-center gap-2">
                            <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                            <p className="text-sm">Timilehin babade</p>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <LazyLoadImage effect="blur" src={feed1} alt="" style={{ width: 400, height: 400, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
                    </div>
                    <Link to="/profile/timilehin babade">
                        <div className="flex items-center gap-2">
                            <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                            <p className="text-sm">Timilehin babade</p>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <LazyLoadImage effect="blur" src={feed1} alt="" style={{ width: 400, height: 400, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
                    </div>
                    <Link to="/profile/timilehin babade">
                        <div className="flex items-center gap-2">
                            <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                            <p className="text-sm">Timilehin babade</p>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <LazyLoadImage effect="blur" src={feed6} alt="" style={{ width: 400, height: 400, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
                    </div>
                    <Link to="/profile/timilehin babade">
                        <div className="flex items-center gap-2">
                            <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                            <p className="text-sm">Timilehin babade</p>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <LazyLoadImage effect="blur" src={feed2} alt="" style={{ width: 400, height: 400, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
                    </div>
                    <Link to="/profile/timilehin babade">
                        <div className="flex items-center gap-2">
                            <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                            <p className="text-sm">Timilehin babade</p>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <LazyLoadImage effect="blur" src={feed2} alt="" style={{ width: 400, height: 400, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
                    </div>
                    <Link to="/profile/timilehin babade">
                        <div className="flex items-center gap-2">
                            <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                            <p className="text-sm">Timilehin babade</p>
                        </div>
                    </Link>
                </div>
            </section> */}
        </section>
    )
}

export default TrendingAds;