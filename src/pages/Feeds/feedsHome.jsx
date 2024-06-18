import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Feeds from "./components/feeds";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import LOGO from "../../assests/SVGs/logo.svg";
import { useStateContext } from "../../contexts/ContextProvider"
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { IoMdArrowUp } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import Footer from "../../components/Footer";
import { categories } from "../../json/categories";
const api_search_query = import.meta.env.VITE_FULL_SEARCH;

const FeedsHome = () => {
  const location = useLocation();
  const { scrollValue, handleClick } = useStateContext();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [data, setData] = useState([]);


  const handleOnSearch = (string, results) => {
    setData(results);
    console.log(string, results);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  useEffect(() => {
    const updateStickyTop = () => {
      if (ref.current) {
        const elementHeight = ref.current.offsetHeight;
        ref.current.style.setProperty(
          "--sticky-top",
          `${window.innerHeight - elementHeight}px`
        );
      }
    };
    updateStickyTop();
    window.addEventListener("resize", updateStickyTop);
    return () => {
      window.removeEventListener("resize", updateStickyTop);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <Navbar blue={true} />
        <section className="lg:px-10 px-4 flex items-center gap-2 pt-20 lg:pt-24">
          <div className="">
            <section className="lg:px-10 px-4">
              <div className="flex my-3 lg:my-5">
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
        <div className={`${scrollValue > 2 ? 'visible opacity-100' : 'invisible opacity-0'} cursor-pointer duration-300 grid place-items-center fixed bottom-20 right-10 w-[50px] aspect-square rounded-full border-2 border-white`}
          style={{
            background: `conic-gradient(#EC6A87 ${scrollValue}%, #3D217A ${scrollValue}%)`,
          }}
          onClick={handleClick}
        >
          <div className="grid place-items-center bg-white w-[40px] aspect-square rounded-full"><IoMdArrowUp size={30} color="#3D217A" /></div>
        </div>
        <motion.div
          className={`z-10 bg-white md:hidden block fixed bottom-0 left-0 right-0 md:py-4 md:px-3 md:p-6 overflow-hidden`}
        >
          <div className="flex justify-center items-center md:gap-4 font-light lg:font-medium lg:text-base text-xs">
            <Link
              to="/"
              className={`text-center flex-1 ${location.pathname === "/" && "text-[#EC6A87]"
                }`}
            >
              <motion.button
                whileTap={{ scale: 1.05 }}
                className={`flex flex-col items-center gap-2 whitespace-nowrap px-3 md:px-6 py-4 md:text-base text-xs ${location.pathname === "/" && "text-[#EC6A87]"
                  }`}
              >
                <MdOutlineDynamicFeed size={20} />
                Trending Ads
              </motion.button>
            </Link>
            <Link className="flex-1 text-center" to={`/`}>
              <button className="flex flex-col items-center gap-2">
                <FaPlus size={20} />
                <p>Post an Ad</p>
              </button>
            </Link>
            <Link
              to="/top-videos"
              className={`text-center flex-1 ${location.pathname === "/top-videos" &&
                "text-[#EC6A87]"
                }`}
            >
              <motion.button
                whileTap={{ scale: 1.05 }}
                className={`flex flex-col items-center gap-2 whitespace-nowrap px-3 md:px-6 py-4 text-black md:text-base text-xs ${location.pathname === "/top-videos" &&
                  "text-[#EC6A87]"
                  }`}
              >
                <FaVideo size={20} />
                Top Video Ads
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FeedsHome;
