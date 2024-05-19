import Navbar from "../../components/Navbar";
import { IoFilterSharp } from "react-icons/io5";
import Feeds from "./components/feeds";
import { motion } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useStateContext } from "../../contexts/ContextProvider";


const FeedsHome = () => {
  const location = useLocation();
  const { FullScreen } = useStateContext();
  return (
    <div>
      <Navbar blue={true} />
      <section className="px-4 lg:px-10">
        <h1 className="text-2xl lg:text-6xl font-semibold mt-20 lg:mt-32 lg:w-[500px]">Perfect Works Made for You</h1>
        <div>
          <div className="flex my-3 lg:my-5">
            <input type="text" className="w-[90%] lg:w-[80%] rounded-tl-sm rounded-bl-sm md:rounded-tl-lg md:rounded-bl-lg shadow-lg focus:shadow-none h-10 lg:h-12 pl-4" placeholder="Search by title or tags"></input>
            <button className="w-[10%] lg:w-[4%] flex justify-center items-center bg-black rounded-tr-md rounded-br-md md:rounded-tr-xl md:rounded-br-xl">
              <IoFilterSharp color="white" size={30} />
            </button>
          </div>
          <Splide options={{
             type: 'loop',
             gap: "20px",
             focus: 1,
             autoplay: true,
             pagination: false,
             arrows: false,
             interval: 4000,
             speed: 2000,
             drag : 'free',
             snap : true,
             autoWidth: true
          }} className="py-2 md:py-10">
            <SplideSlide className="border-2 border-black rounded-md cursor-pointer">
              <div className="py-2 px-2 md:py-3 md:px-4">
                <p className="font-semibold">Tailors</p>
              </div>
            </SplideSlide>
            <SplideSlide className="border-2 border-black rounded-md cursor-pointer">
              <div className="py-2 px-2 md:py-3 md:px-4">
                <p className="font-semibold">Online Vendor</p>
              </div>
            </SplideSlide>
            <SplideSlide className="border-2 border-black rounded-md cursor-pointer">
              <div className="py-2 px-2 md:py-3 md:px-4">
                <p className="font-semibold">DEV</p>
              </div>
            </SplideSlide>
            <SplideSlide className="border-2 border-black rounded-md cursor-pointer">
              <div className="py-2 px-2 md:py-3 md:px-4">
                <p className="font-semibold">Hair Stylist</p>
              </div>
            </SplideSlide>
            <SplideSlide className="border-2 border-black rounded-md cursor-pointer">
              <div className="py-2 px-2 md:py-3 md:px-4">
                <p className="font-semibold">Baker</p>
              </div>
            </SplideSlide>
            <SplideSlide className="border-2 border-black rounded-md cursor-pointer">
              <div className="py-2 px-2 md:py-3 md:px-4">
                <p className="font-semibold">MakeUp</p>
              </div>
            </SplideSlide>
            <SplideSlide className="border-2 border-black rounded-md cursor-pointer">
              <div className="py-2 px-2 md:py-3 md:px-4">
                <p className="font-semibold">Mechanic</p>
              </div>
            </SplideSlide>
          </Splide>
          <div>
            <Feeds />
          </div>
          <section className="py-10 lg:py-20">
            <div className="my-4 shadow-md py-4 px-3 md:p-6 w-fit mx-auto overflow-hidden bg-[#F0D8DD]">
              <div className="flex justify-center items-center gapy-3 px-4 md:gap-10 font-semibold">
                <Link to="/">
                  <motion.button whileTap={{ scale: 1.05 }} className={`px-2 md:px-6 py-4 ${location.pathname === "/" && "bg-[#EC6A87] text-white"}`}>Trending Ads</motion.button>
                </Link>
                <Link to="/top-services">
                  <motion.button whileTap={{ scale: 1.05 }} className={`px-2 md:px-6 py-4 text-black ${location.pathname === "/top-services" && "bg-[#EC6A87] text-white"}`}>Top Services</motion.button>
                </Link>
              </div>
            </div>
            <div className="lg:py-5">
              <Outlet />
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default FeedsHome;