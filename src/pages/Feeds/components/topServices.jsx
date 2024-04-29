import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import user from "../../../assests/images/user.svg"
import feed1 from "../../../assests/images/feed1.svg";
import feed2 from "../../../assests/images/feed2.svg";
import feed3 from "../../../assests/images/feed3.svg";
import feed4 from "../../../assests/images/feed4.svg";
import feed5 from "../../../assests/images/feed5.svg";
import feed6 from "../../../assests/images/feed6.svg";

const TopServices = () => {
    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-4">
                <div>
                    <LazyLoadImage effect="blur" src={feed3} alt="" className="rounded-md w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-2">
                    <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                    <p className="text-sm">Timilehin babade</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <LazyLoadImage effect="blur" src={feed4} alt="" className="rounded-md w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-2">
                    <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                    <p className="text-sm">Timilehin babade</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <LazyLoadImage effect="blur" src={feed5} alt="" className="rounded-md w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-2">
                    <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                    <p className="text-sm">Timilehin babade</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <LazyLoadImage effect="blur" src={feed1} alt="" className="rounded-md w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-2">
                    <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                    <p className="text-sm">Timilehin babade</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <LazyLoadImage effect="blur" src={feed1} alt="" className="rounded-md w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-2">
                    <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                    <p className="text-sm">Timilehin babade</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <LazyLoadImage effect="blur" src={feed6} alt="" className="rounded-md w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-2">
                    <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                    <p className="text-sm">Timilehin babade</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <LazyLoadImage effect="blur" src={feed2} alt="" className="rounded-md w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-2">
                    <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                    <p className="text-sm">Timilehin babade</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <LazyLoadImage effect="blur" src={feed2} alt="" className="rounded-md w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-2">
                    <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
                    <p className="text-sm">Timilehin babade</p>
                </div>
            </div>
        </section>
    )
}

export default TopServices