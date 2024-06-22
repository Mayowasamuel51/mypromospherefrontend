// import axios from "axios";
import { useRef, useEffect, useState, useCallback } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Navbar from "../../components/Navbar";
import Feeds from "./components/feeds";
import { motion, useInView, AnimatePresence } from "framer-motion";
import anon from "../../assests/images/anon.png"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider"
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { IoMdArrowUp } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { FiPlusSquare } from "react-icons/fi";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import Footer from "../../components/Footer";
import { categories } from "../../json/categories";
import { toast } from "sonner";
import LogoBg from "../../assests/images/mypromosphere-logo.png";
import { FiPlusCircle } from "react-icons/fi";
import debounce from 'lodash.debounce';
import FetchSearch from "../../hooks/fetchSearch";

const containerVariant = {
  initial : {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  transition:{
    duration: 0.5
  }
}

const divVariant = {
  initial: {
    opacity: 0,
    y: "-100%"
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", staggerChildren: 0.35, duration: 0.4, stiffness: 250, when: "beforeChildren"
    }
  }
}

const childVariant = {
  initial: {
    opacity: 0,
    scale: 0
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring", duration: 0.4, stiffness: 250
    }
  }
}

const FeedsHome = () => {
  const location = useLocation();
  const { token, scrollValue, handleClick } = useStateContext();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchModal, setSearchModal] = useState(false);

  const navigate = useNavigate();

  const { data: searchResults, refetch } = FetchSearch(searchQuery);

  const debouncedSearch = useCallback(
    debounce((query) => {
      setSearchQuery(query);
      refetch();
    }, 300),
    [refetch]
  );
  const handleOnSearch = (string) => {
    debouncedSearch(string);
  };

  const handleOnSelect = (item) => {
    setSearchQuery(item.name);
    refetch();
  };

  useEffect(() => {
    if (searchResults) {
      console.log('Search Results:', searchResults);
    }
  }, [searchResults])

  const goToPostPage = () => {
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
            <div className="bg-black bg-opacity-80 relative rounded-md overflow-hidden hidden md:block">
              <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center md:w-[600px] py-2">
                <div className="flex flex-col gap-1">
                  <h1 className="md:text-3xl text-white font-bold">Welcome To <span className="text-[#EC6A87] font-black tracking-tight">MyPromosphere</span></h1>
                  <p className="text-sm text-white">Where you are one tap closer to your customers</p>
                  <p className="text-sm text-white">Got Something To Sell</p>
                </div>
                <Link to={`/login`}>
                  <div className="flex flex-col items-center gap-1">
                    <FiPlusCircle color="#3D217A" size={40} />
                    <p className="underline text-[#3D217A] text-sm">Register Today</p>
                  </div>
                </Link>
              </div>
              <img src={LogoBg} className="animate-banner w-full h-[200px] md:h-[250px] object-cover" alt="" />
            </div>
          }
          <div className="">
            <section className="">
              <div className="flex my-3 lg:my-3">
                <ReactSearchAutocomplete
                  items={categories}
                  className="z-[999999] w-full lg:w-[80%] md:border-none focus:shadow-none h-10 lg:h-12 "
                  placeholder="Search by title or tags , service"
                  onSearch={handleOnSearch}
                  onSelect={handleOnSelect}
                />
              </div>
              <div>
                <Feeds />
              </div>
              <AnimatePresence mode='popLayout'>
                {searchResults?.length > 0 &&
                  <motion.div variants={containerVariant} initial="initial" animate="animate" className="fixed flex justify-center items-center bg-black bg-opacity-80 z-[9999999999]">
                    <motion.div variants={divVariant} className="md:w-[600px] bg-white p-4 rounded-md">
                      {searchResults.data.map((item) => (
                        <motion.div variants={childVariant} key={item.id} className="flex flex-col gap-2 md:gap-4">
                          <div>
                            <Link to={`/feed/${item.id}`}>
                              <LazyLoadImage width={`100%`} effect='blur' visibleByDefault={true} src={`https://apimypromospheretest.com.ng/public/storage/${item.titleImageurl.slice(7)}`} alt="" style={{ width: "100%", height: 300 }} className="w-full rounded-md object-cover" />
                            </Link>
                          </div>
                          <div className='flex items-center justify-between'>
                            <h1 className='font-semibold'>name</h1>
                            <div className="flex items-center">
                              <TbCurrencyNaira size={20} />
                              <p className="text-sm">{(+item.price_range).toLocaleString()}</p>
                            </div>
                          </div>
                          <Link to={`/profile/user/${item.user_name}`} className="w-fit">
                            <div className="flex items-center gap-2">
                              <img src={item.user_image === "null" ? anon : item.user_image} alt="user-profile-image" className="rounded-full w-8 md:w-10 aspect-square object-cover" />
                              {token && <p className="text-sm font-medium">{item.user_id === token.id ? "me" : item.user_name}</p>}
                              {!token && <p className="text-sm font-medium">{item.user_name}</p>}
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                }
              </AnimatePresence>
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
        <div className={`${scrollValue > 2 ? 'visible opacity-100' : 'invisible opacity-0'} cursor-pointer duration-300 grid place-items-center fixed bottom-20 right-10 w-[50px] aspect-square rounded-full border-2 border-white`} style={{ background: `conic-gradient(#EC6A87 ${scrollValue}%, #3D217A ${scrollValue}%)` }} onClick={handleClick}>
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
            <div onClick={() => goToPostPage()} className="block text-center cursor-pointer">
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
