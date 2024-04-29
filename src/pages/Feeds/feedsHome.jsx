import Navbar from "../../components/Navbar";
import { IoFilterSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import Feeds from "./components/feeds";
import { motion } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";


const FeedsHome = () => {
  const location = useLocation();
  return (
    <div>

      <Navbar blue={true} />
      <section className="px-4 lg:px-10">
        <h1 className="text-2xl lg:text-6xl font-semibold mt-20 lg:mt-32 lg:w-[500px]">Perfect Works Made for You</h1>
        <div>
          <div className="flex  my-3 lg:my-5">
            <input type="text" className="w-[90%] lg:w-[80%] rounded-tl-lg rounded-bl-lg shadow-lg h-10 lg:h-12 pl-4" placeholder="Search by title or tags"></input>
            <button className="w-[10%] lg:w-[4%] flex justify-center items-center bg-black rounded-tr-xl rounded-br-xl">
              <IoFilterSharp color="white" size={30} />
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="p-3 flex items-center gap-2 shadow-md rounded-md whitespace-nowrap">
              <p className="font-semibold">Tailors</p>
              <FaXmark />
            </div>
            <div className="p-3 flex items-center gap-2 shadow-md rounded-md whitespace-nowrap">
              <p className="font-semibold">Hair Stylist</p>
              <FaXmark />
            </div>
            <div className="p-3 flex items-center gap-2 shadow-md rounded-md whitespace-nowrap">
              <p className="font-semibold">Baker</p>
              <FaXmark />
            </div>
            <div className="p-3 flex items-center gap-2 shadow-md rounded-md whitespace-nowrap">
              <p className="font-semibold">MakeUp</p>
              <FaXmark />
            </div>
            <div className="p-3 flex items-center gap-2 shadow-md rounded-md whitespace-nowrap">
              <p className="font-semibold">Mechanic</p>
              <FaXmark />
            </div>
          </div>
          <div>
            <Feeds />
          </div>

          <section className="py-10 lg:py-20">
            <div className="my-4 shadow-md p-3 md:p-6 w-fit mx-auto overflow-hidden bg-[#F0D8DD]">
              <div className="flex justify-center items-center gap-3 md:gap-10 font-bold">
                <Link to="/">
                  <motion.button whileTap={{scale: 1.05}} className={`px-4 md:px-6 py-4 ${location.pathname === "/" && "bg-[#EC6A87] text-white"}`}>Trending Ads</motion.button>
                </Link>
                <Link to="/top-services">
                  <motion.button whileTap={{scale: 1.05}}  className={`px-4 md:px-6 py-4 text-black ${location.pathname === "/top-services" && "bg-[#EC6A87] text-white"}`}>Top Services</motion.button>
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