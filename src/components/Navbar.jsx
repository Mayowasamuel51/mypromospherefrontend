import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion';
import Links from "./links";
import ProfileHover from "./profileHover";
import { MdLogin } from "react-icons/md";


// assests
import logo from "../assests/SVGs/logo.svg";
import MobileNav from "./MobileNav";
import { useStateContext } from "../contexts/ContextProvider";


const headerVariant = {
  visible: { y: 0 },
  hidden: {
    y: "-100%",
    transition: { type: "linear", duration: .25 }
  }
}

export default function Navbar({ profile }) {
  const location = useLocation()
  const [toggleIcon, setToggleIcon] = useState(false);
  const [hidden, setHidden] = useState(false)
  const [bg, setBg] = useState(false)
  const handleToggle = () => {
    setToggleIcon(prev => !prev);
  };
  const { token, LogOut } = useStateContext()
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    }
    else {
      setHidden(false)
    }
  })
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY > 20 ? setBg(true) : setBg(false);
    };
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  useEffect(() => {
    if (toggleIcon) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [toggleIcon]);
  return (
    <motion.header variants={headerVariant} animate={hidden && !toggleIcon ? "hidden" : "visible"} className={`${!bg && profile} dark:bg-[#121212] bg-purple z-[9999999] fixed top-0 right-0 left-0 w-full flex flex-row justify-between items-center px-4 lg:px-10 py-3 lg:py-0 duration-300 text-black`}>
      <Link to={"/"} className=" flex items-center">
        <img src={logo} alt="logo" className="w-10 lg:w-14 exl:w-20" />
        <h1 className={`text-sm font-bold text-white md:text-lg exl:text-xl`}>MyPromoSphere</h1>
      </Link>

      <div onClick={handleToggle} className="z-[9999999999999] bigLg:hidden cursor-pointer">
        {toggleIcon ? (
          <XMarkIcon width={35} className={`${toggleIcon ? "text-black dark:text-white" : "text-white"}  duration-300 z-[9999999999999]`} />
        ) : (
          <Bars3BottomRightIcon width={35} className={`${toggleIcon ? "text-black dark:text-white" : "text-white"} duration-300 z-[9999999999999]`} />
        )}
      </div>
      <AnimatePresence>
        {toggleIcon && <MobileNav handleToggle={handleToggle} />}
      </AnimatePresence>

      <nav className={`text-black dark:text-white hidden bigLg:flex bigLg:items-center bigLg:gap-x-[68px]`}>
        <Links hidden={hidden} bg={bg} />
      </nav>

      {token ?
        <div className="hidden z-50 bigLg:flex bigLg:items-center bigLg:gap-x-6">
          <ProfileHover LogOut={LogOut} />
        </div>
        :
        <div className="hidden z-50 bigLg:flex bigLg:items-center bigLg:gap-x-6">
          <Link to="/login">
            <button className={`flex items-center gap-2 text-lg py-2 px-5 text-white font-['Poppinbase font-medium`}>
              <MdLogin size={30} />
              <p>Post an Ad</p>
            </button>
          </Link>
        </div>
      }
    </motion.header>
  );
}
