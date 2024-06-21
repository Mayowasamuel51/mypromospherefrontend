// import axios from "axios";
import { useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Feeds from "./components/feeds";
import { motion, useInView } from "framer-motion";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider"
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { IoMdArrowUp } from "react-icons/io";
import { FiPlusSquare } from "react-icons/fi";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import Footer from "../../components/Footer";
import { categories } from "../../json/categories";
import { toast } from "sonner";
import LogoBg from "../../assests/images/mypromosphere-logo.png";
// const api_search_query = import.meta.env.VITE_FULL_SEARCH;

const FeedsHome = () => {
  const location = useLocation();
  const { token, scrollValue, handleClick } = useStateContext();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const handleOnSearch = (string, results) => {
    setData(results);
    console.log(string, results);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const goToPostPage = ()=> {
    if (!token) {
      toast.error("You are not Logged In")
      navigate('/login');
    } else {
      navigate('/dashboard/postAd');
    }
  }

  return (
    <>
      <div className="">
        <Navbar blue={true} />
        <section className="lg:px-10 px-4 pt-20 lg:pt-24">
          {!token && 
          <div className="relative">
            <div className="border-2 border-red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="md:text-xl">Welcome To MyPromosphere</h1>
            </div>
            <img src={LogoBg} className="w-full h-[150px] md:h-[200px] object-cover" alt="" />
          </div>
          }
          <div className="">
            <section className="lg:px-10 px-4">
              <div className="flex my-3 lg:my-3">
                <ReactSearchAutocomplete
                  items={categories}
                  className="z-[999999] w-full lg:w-[80%] md:border-none focus:shadow-none h-10 lg:h-12 "
                  placeholder="Search by title or tags , service"
                  onSearch={handleOnSearch}
                />
              </div>
              <div>
                <Feeds />
              </div>
            </section>
            <section className="py-4 lg:py-20">
              <motion.div
                className={`md:block hidden my-4 shadow-md md:py-4 md:px-3 md:p-6 w-fit mx-auto bg-[#F0D8DD]`}
              >
                <div className="flex items-center md:gap-4 font-light lg:font-medium lg:text-base text-xs">
                  <Link
                    to="/"
                    className={`text-center flex-1 ${location.pathname === "/" && "bg-[#EC6A87] text-white"
                      }`}
                  >
                    <motion.button
                      whileTap={{ scale: 1.05 }}
                      className={`whitespace-nowrap px-3 md:px-6 py-4 md:text-base text-xs ${location.pathname === "/" && "bg-[#EC6A87] text-white"
                        }`}
                    >
                      Trending Ads
                    </motion.button>
                  </Link>
                  <Link
                    to="/top-videos"
                    className={`text-center flex-1 ${location.pathname === "/top-videos" &&
                      "bg-[#EC6A87] text-white"
                      }`}
                  >
                    <motion.button
                      whileTap={{ scale: 1.05 }}
                      className={`whitespace-nowrap px-3 md:px-6 py-4 text-black md:text-base text-xs ${location.pathname === "/top-videos" &&
                        "bg-[#EC6A87] text-white"
                        }`}
                    >
                      Top Video Ads
                    </motion.button>
                  </Link>
                </div>
              </motion.div>

              <div ref={ref} className="lg:py-5 px-4">
                <Outlet />
              </div>
            </section>
          </div>
        </section>
        <Footer />
        <div className={`${scrollValue > 2 ? 'visible opacity-100' : 'invisible opacity-0'} cursor-pointer duration-300 grid place-items-center fixed bottom-20 right-10 w-[50px] aspect-square rounded-full border-2 border-white`} style={{background: `conic-gradient(#EC6A87 ${scrollValue}%, #3D217A ${scrollValue}%)`}} onClick={handleClick}>
          <div className="grid place-items-center bg-white w-[40px] aspect-square rounded-full"><IoMdArrowUp size={30} color="#3D217A" /></div>
        </div>
        <motion.div className={`${isInView ? "opacity-100 bg-opacity-90 visible" : "opacity-0 invisible"} fixed-shadow duration-300 z-10 bg-white md:hidden block fixed bottom-2 left-2 right-2 rounded-md`} >
          <div className="flex items-center justify-between font-light lg:font-medium lg:text-base text-xs">
            <Link
              to="/"
              className={`block text-center ${location.pathname === "/" && "text-[#EC6A87]"
                }`}
            >
              <motion.button
                whileTap={{ scale: 1.05 }}
                className={`flex flex-col items-center gap-2 whitespace-nowrap px-3 md:px-6 py-4 md:text-base text-xs ${location.pathname === "/" && "text-[#EC6A87]"
                  }`}
              >
                <MdOutlineDynamicFeed size={20} className={`${location.pathname === "/" ? "text-[#EC6A87]" : "text-black"}`} />
                <p className={`${location.pathname === "/" ? "text-[#EC6A87]" : "text-black"}`}>Trending Ads</p>
              </motion.button>
            </Link>
            <div onClick={()=> goToPostPage()} className="block text-center cursor-pointer">
              <button className="flex flex-col items-center gap-2">
                <FiPlusSquare size={20} className="text-black" />
                <p className="text-black">Post an Ad</p>
              </button>
            </div>
            <Link
              to="/top-videos"
              className={`block text-center ${location.pathname === "/top-videos" ?
                "text-[#EC6A87]" : "text-black"
                }`}
            >
              <motion.button
                whileTap={{ scale: 1.05 }}
                className={`flex flex-col items-center gap-2 whitespace-nowrap px-3 md:px-6 py-4 text-black md:text-base text-xs ${location.pathname === "/top-videos" &&
                  "text-[#EC6A87]"
                  }`}
              >
                <FaVideo size={20} className={`${location.pathname === "/top-videos" ? "text-[#EC6A87]" : "text-black"}`} />
                <p className={`${location.pathname === "/top-videos" ? "text-[#EC6A87]" : "text-black"}`}>Top Video Ads</p>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FeedsHome;
