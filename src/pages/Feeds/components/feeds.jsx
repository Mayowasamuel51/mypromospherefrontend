import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import user from "../../../assests/images/user.svg"
import feed1 from "../../../assests/images/feed1.svg";
import feed2 from "../../../assests/images/feed2.svg";
import { Link } from "react-router-dom";


const feeds = () => {
  return (
    <section>
      <h1 className="font-semibold lg:text-3xl text-base my-7">Personalized ads just for you</h1>
      <div className="place-items-center grid items-stretch md:grid-cols-2 lg:grid-cols-3 exl:grid-cols-4 gap-10 grid-rows-1 overflow-x-hidden">
        <div className="flex flex-col gap-4">
          <Link to="/product">
            <div>
              <LazyLoadImage effect="blur" src={feed1} alt="" style={{ width: 300, height: 300, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
            </div>
          </Link>
          <Link to="/profile/timilehin babade">
            <div className="flex items-center gap-2">
              <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
              <p className="text-sm">Timilehin babade</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link to="/product">
            <div>
              <LazyLoadImage effect="blur" src={feed1} alt="" style={{ width: 300, height: 300, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
            </div>
          </Link>
          <Link to="/profile/timilehin babade">
            <div className="flex items-center gap-2">
              <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
              <p className="text-sm">Timilehin babade</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link to="/product">
            <div>
              <LazyLoadImage effect="blur" src={feed2} alt="" style={{ width: 300, height: 300, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
            </div>
          </Link>
          <Link to="/profile/timilehin babade">
            <div className="flex items-center gap-2">
              <LazyLoadImage effect="blur" src={user} alt=""  className="w-10 aspect-square" />
              <p className="text-sm">Timilehin babade</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link to="/product">
            <div>
              <LazyLoadImage effect="blur" src={feed2} alt="" style={{ width: 300, height: 300, objectFit: "cover" }} className="rounded-md w-full h-full object-cover" />
            </div>
          </Link>
          <Link to="/profile/timilehin babade">
            <div className="flex items-center gap-2">
              <LazyLoadImage effect="blur" src={user} alt="" className="w-10 aspect-square" />
              <p className="text-sm">Timilehin babade</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default feeds