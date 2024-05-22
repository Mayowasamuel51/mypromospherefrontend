import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import user from "../../../assests/images/user.svg"
import feed1 from "../../../assests/images/feed1.svg";
import feed2 from "../../../assests/images/feed2.svg";
import feed3 from "../../../assests/images/feed3.svg";
import feed4 from "../../../assests/images/feed4.svg";
import feed5 from "../../../assests/images/feed5.svg";
import feed6 from "../../../assests/images/feed6.svg";
import { Link } from 'react-router-dom';

const TopServices = () => {
    return (
        <section className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-10 overflow-x-hidden">
            <div className="flex flex-col gap-4">
                <div>
                    <LazyLoadImage effect="blur" src={feed3} alt="" style={{ width: 280, height: 280, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
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
                    <LazyLoadImage effect="blur" src={feed4} alt="" style={{ width: 280, height: 280, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
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
                    <LazyLoadImage effect="blur" src={feed5} alt="" style={{ width: 280, height: 280, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
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
                    <LazyLoadImage effect="blur" src={feed1} alt="" style={{ width: 280, height: 280, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
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
                    <LazyLoadImage effect="blur" src={feed1} alt="" style={{ width: 280, height: 280, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
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
                    <LazyLoadImage effect="blur" src={feed6} alt="" style={{ width: 280, height: 280, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
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
                    <LazyLoadImage effect="blur" src={feed2} alt="" style={{ width: 280, height: 280, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
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
                    <LazyLoadImage effect="blur" src={feed2} alt="" style={{ width: 280, height: 280, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
                </div>
                <Link to="/profile/timilehin babade">
                    <div className="flex items-center gap-2">
                        <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                        <p className="text-sm">Timilehin babade</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default TopServices