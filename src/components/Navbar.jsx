import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
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

export default function Navbar({ profile, blue }) {
  const location = useLocation()
  const [toggleIcon, setToggleIcon] = useState(false);
  const [hidden, setHidden] = useState(false)
  const [bg, setBg] = useState(false)
  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
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
    <motion.header variants={headerVariant} animate={hidden && !toggleIcon ? "hidden" : "visible"} className={`z-[999999999] ${bg ? profile || blue ? "bg-[#3D217A] dark:bg-black" : "bg-white text-black" : profile || blue ? "bg-[#3D217A] dark:bg-black" : "bg-transparent"} fixed top-0 right-0 left-0 w-full flex flex-row justify-between items-center px-4 lg:px-10 py-3 lg:py-0 duration-300 text-black`}>
      <Link to={"/"} className=" flex items-center">
        <img src={logo} alt="logo" className="w-10 lg:w-14 exl:w-20" />
        <h1 className={`${(bg && !profile && !blue) ? "text-black" : "text-white"} text-sm font-bold text-black md:text-lg exl:text-xl`}>MyPromoSphere</h1>
      </Link>

      <div onClick={handleToggle} className="z-20 exl:hidden cursor-pointer ">
        {toggleIcon ? (
          <XMarkIcon width={35} className={`${bg ? toggleIcon && "text-black dark:text-white" : "text-white dark:text-black"} ${(bg && !profile && !blue) ? "text-black" : "text-white"}`} />
        ) : (
          <Bars3BottomRightIcon width={35} className={`${bg ? toggleIcon && "text-black dark:text-white" : "text-white dark:text-black"} ${(bg && !profile && !blue) ? "text-black" : "text-white"}`} />
        )}
      </div>
      <AnimatePresence>
        {toggleIcon && <MobileNav handleToggle={handleToggle} />}
      </AnimatePresence>

      <nav className={`${(bg && !profile && !blue) ? "text-black" : "text-white"} hidden exl:flex exl:items-center exl:gap-x-[68px]`}>
        <Links hidden={hidden} bg={bg} />
      </nav>

      {token ?
        <div className="hidden z-50 exl:flex exl:items-center exl:gap-x-6">
          <ProfileHover LogOut={LogOut} />
        </div>
        :
        <div className="hidden z-50 exl:flex exl:items-center exl:gap-x-6">
          <Link to="/login">
            <button className={`flex items-center gap-2 text-lg py-2 px-5 ${(bg && !profile && !blue) ? "text-black" : "text-white"} font-['Poppinbase font-medium`}>
              <MdLogin size={25} />
              <p>Post an Ad</p>
            </button>
          </Link>
        </div>
      }
    </motion.header>
  );
}
