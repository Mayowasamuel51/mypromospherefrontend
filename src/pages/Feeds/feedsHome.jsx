import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import { FaFilter } from "react-icons/fa6";
import Feeds from "./components/feeds";
import { motion, useInView } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import LOGO from "../../assests/SVGs/logo.svg";
// import { useStateContext } from "../../contexts/ContextProvider"
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const FeedsHome = () => {
  const location = useLocation();
  // const { FullScreen } = useStateContext();
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
  const fetchData = async () => {
    try {
      const response = await axios(`${api}Apartment`);
      const dataResponse = await response.data.data;
      setData(dataResponse);
      console.log(dataResponse);
    } catch {}
  };

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    setData(results);
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    axios(`${api}${item.name}`).then((response) => {
      if (response.status === 200) {
        console.log(response.data.data);
      }
    });
    console.log(data);
    // console.log(item.name)
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
    <div>
      <Navbar blue={true} />
      <section className="lg:px-10">
        <div className="lg:px-10 px-4 flex items-center gap-2 mt-20 lg:mt-32">
          {/* <img src={LOGO} className='w-10 h-10 lg:w-20 lg:h-20' alt="" /> */}
          <h1 className="text-2xl lg:text-6xl font-semibold lg:w-[500px]">
            Perfect Works Made for You
          </h1>
        </div>
        <div className="">
          <section className="lg:px-10 px-4">
            <div className="flex my-3 lg:my-5">
              {/* <div style={{ width: 400 }}> */}
              <ReactSearchAutocomplete
                items={items}
                className="w-[90%] lg:w-[80%] rounded-tl-sm rounded-bl-sm md:rounded-tl-lg md:rounded-bl-lg md:shadow-lg border-2 border-black md:border-none focus:shadow-none h-10 lg:h-12 pl-4"
                placeholder="Search by title or tags , service"
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                // formatResult={formatResult}
              />
              {/* </div> */}
              {/* <input type="text" className="w-[90%] lg:w-[80%] rounded-tl-sm rounded-bl-sm md:rounded-tl-lg md:rounded-bl-lg md:shadow-lg border-2 border-black md:border-none focus:shadow-none h-10 lg:h-12 pl-4" placeholder="Search by title or tags , service"></input> */}
              {/* <button className="w-[10%] lg:w-[4%] flex justify-center items-center bg-black rounded-tr-md rounded-br-md md:rounded-tr-xl md:rounded-br-xl">
                <FaFilter color="white" size={20} />
              </button> */}
            </div>
            {/* <br/>  <br/>  <br/>  <br/>  <br/>  */}
             {/* <br/>  <br/>  <br/>  <br/> */}
            {/* <Splide
              options={{
                type: "loop",
                gap: "20px",
                focus: 1,
                autoplay: true,
                pagination: false,
                arrows: false,
                interval: 4000,
                speed: 2000,
                drag: "free",
                snap: true,
                autoWidth: true,
              }}
              className="py-2 md:py-10"
            >
              <SplideSlide className="border-2 border-black bg-black text-white rounded-md cursor-pointer">
                <div className="py-2 px-2 md:py-3 md:px-4">
                  <p className="font-semibold md:text-base text-sm">Tailors</p>
                </div>
              </SplideSlide>
              <SplideSlide className="border-2 border-black bg-black text-white rounded-md cursor-pointer">
                <div className="py-2 px-2 md:py-3 md:px-4">
                  <p className="font-semibold md:text-base text-sm">
                    Online Vendor
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide className="border-2 border-black bg-black text-white rounded-md cursor-pointer">
                <div className="py-2 px-2 md:py-3 md:px-4">
                  <p className="font-semibold md:text-base text-sm">DEV</p>
                </div>
              </SplideSlide>
              <SplideSlide className="border-2 border-black bg-black text-white rounded-md cursor-pointer">
                <div className="py-2 px-2 md:py-3 md:px-4">
                  <p className="font-semibold md:text-base text-sm">
                    Hair Stylist
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide className="border-2 border-black bg-black text-white rounded-md cursor-pointer">
                <div className="py-2 px-2 md:py-3 md:px-4">
                  <p className="font-semibold md:text-base text-sm">Baker</p>
                </div>
              </SplideSlide>
              <SplideSlide className="border-2 border-black bg-black text-white rounded-md cursor-pointer">
                <div className="py-2 px-2 md:py-3 md:px-4">
                  <p className="font-semibold md:text-base text-sm">MakeUp</p>
                </div>
              </SplideSlide>
              <SplideSlide className="border-2 border-black bg-black text-white rounded-md cursor-pointer">
                <div className="py-2 px-2 md:py-3 md:px-4">
                  <p className="font-semibold md:text-base text-sm">Mechanic</p>
                </div>
              </SplideSlide>
            </Splide> */}
            <div>
              <Feeds />
            </div>
          </section>
          <section className="py-4 lg:py-20">
            <motion.div
              ref={ref}
              className={`${
                isInView ? "stickyy w-full" : ""
              } md:static -left-10 -right-10  my-4 shadow-md md:py-4 md:px-3 md:p-6 md:w-fit md:mx-auto overflow-hidden bg-[#F0D8DD]`}
            >
              <div className="flex md:justify-center items-center md:gap-4 font-semibold">
                <Link
                  to="/"
                  className={`text-center flex-1 ${
                    location.pathname === "/" && "bg-[#EC6A87] text-white"
                  }`}
                >
                  <motion.button
                    whileTap={{ scale: 1.05 }}
                    className={`whitespace-nowrap px-3 md:px-6 py-4 ${
                      location.pathname === "/" && "bg-[#EC6A87] text-white"
                    }`}
                  >
                    Trending Ads
                  </motion.button>
                </Link>
                <Link
                  to="/top-services"
                  className={`text-center flex-1 ${
                    location.pathname === "/top-services" &&
                    "bg-[#EC6A87] text-white"
                  }`}
                >
                  <motion.button
                    whileTap={{ scale: 1.05 }}
                    className={`whitespace-nowrap px-3 md:px-6 py-4 text-black ${
                      location.pathname === "/top-services" &&
                      "bg-[#EC6A87] text-white"
                    }`}
                  >
                    Top Services
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
    </div>
  );
};

export default FeedsHome;
