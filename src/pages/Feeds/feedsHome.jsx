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
import Footer from "../../components/Footer";
const api_search_query = import.meta.env.VITE_FULL_SEARCH;

const FeedsHome = () => {
  
  const location = useLocation();
  const { scrollValue, handleClick } = useStateContext();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [data, setData] = useState([]);

  const items = [
    {
      id: 0,
      name: "Cobol",
    },

    {
      id: 1,
      name: "Pets",
    },
    {
      id: 2,
      name: "Furniture ,Home",
    },
    {
      id: 3,
      name: "Apartment",
    },
    {
      id: 4,
      name: "Skincare",
    },
    {
      id: 5,
      name: "Groceries",
    },
    {
      id: 6,
      name: "home-decoration",
    },
    {
      id: 7,
      name: "Phones, Tablets",
    },
    {
      id: 8,
      name: "Property",
    },
    {
      id: 9,
      name: "Laptops",
    },
    {
      id: 10,
      name: "Mens-shirts",
    },
  ];

  const handleOnSearch = (string, results) => {
    setData(results);
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    axios.get(`${api}${item.name}`).then((response) => {
      if (response.status === 200) {
        console.log(response.data.data);
      }
    });
    console.log(data);
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
    <div className="">
      <Navbar blue={true} />
      <section className="lg:px-10">
        <div className="lg:px-10 px-4 flex items-center gap-2 pt-20 lg:pt-20">
        </div>
        <div className="">
          <section className="lg:px-10 px-4">
            <div className="flex my-3 lg:my-5">
              <ReactSearchAutocomplete
                items={items}
                className="z-[999999] w-full lg:w-[80%] md:border-none focus:shadow-none h-10 lg:h-12 "
                placeholder="Search by title or tags , service"
                onSearch={handleOnSearch}
              // formatResult={formatResult}
              />
            </div>
            <div>
              <Feeds />
            </div>
          </section>
          <section className="py-4 lg:py-20">
            <motion.div
              ref={ref}
              className={`${isInView ? "stickyy w-full" : ""
                } md:static -left-10 -right-10  my-4 shadow-md md:py-4 md:px-3 md:p-6 md:w-fit md:mx-auto overflow-hidden bg-[#F0D8DD]`}
            >
              <div className="flex md:justify-center items-center md:gap-4 font-light lg:font-medium lg:text-base text-xs">
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
                    Browse Our Top Video Ads
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            <div className="lg:py-5 px-4">
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
    </div>
  );
};

export default FeedsHome;
