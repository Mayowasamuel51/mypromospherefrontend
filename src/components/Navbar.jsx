import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';


// assests
import logo from "../assests/SVGs/logo.svg";
import MobileNav from "./MobileNav";
import { useStateContext } from "../contexts/ContextProvider";


const headerVariant = {
  visible: { y: 0},
  hidden: { y: "-100%",
    transition:{ type: "linear", duration: .25}
  }
}

export default function Navbar({profile, blue}) {
  const location = useLocation()
  const [toggleIcon, setToggleIcon] = useState(false);
  const [hidden, setHidden] = useState(false)
  const [bg, setBg] = useState(false)
  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };
  const {token, LogOut, FullScreen} = useStateContext()
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
  useEffect(()=> {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        scrollY > 20 ? setBg(true) : setBg(false);
      };
    window.addEventListener('scroll', handleScroll)
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [])
  return (
    <motion.header variants={headerVariant} animate={hidden && !toggleIcon ? "hidden" : "visible"} className={`z-[999999999] ${bg ? profile || blue ? "bg-[#3D217A]" : "bg-white" : profile || blue ? "bg-[#3D217A]" : "bg-transparent"} fixed top-0 right-0 left-0 w-full flex flex-row justify-between items-center px-4 lg:px-10 py-2 duration-300`}>
      <Link to={location.pathname === "/home" ? "/" : location.pathname === "/dashboard" ? "/" : "/home"} className=" flex items-center">
        <img src={logo} alt="logo" className="w-10 lg:w-14 exl:w-20" />
        <h1 className={`${(bg && !profile && !blue) ? "text-black" : "text-white"} text-sm font-bold text-black md:text-lg exl:text-xl`}>MyPromoSphere</h1>
      </Link>

      <div onClick={handleToggle} className=" z-40 exl:hidden">
        {toggleIcon ? (
          <XMarkIcon width={35} className={`${bg ? "text-black" : "text-white"}`} />
        ) : (
          <Bars3BottomRightIcon width={35} className={`${bg ? "text-black" : "text-white"}`} />
        )}
      </div>
      <AnimatePresence>
        {toggleIcon && <MobileNav handleToggle={handleToggle} hidden={hidden} />}
      </AnimatePresence>

      <nav className={`${(bg && !profile && !blue) ? "text-black" : "text-white"} hidden exl:flex exl:items-center exl:gap-x-[68px]`}>
        <Link to={location.pathname !== "/home" ? "/home#about" : "#about"} className="md:text-base font-medium">
          About us
        </Link>
        <Link to={location.pathname !== "/home" ? "/home#talents" : "#talents"} className="md:text-base font-medium">
          Find talent
        </Link>
        <ScrollLink 
          to={location.pathname === "/home" ? "skills" : "/" } smooth={true} duration={1500}
          className="md:text-base font-medium cursor-pointer"
          spy={true}
        >

          Top skills
        </ScrollLink>
        <ScrollLink
          to={location.pathname === "/home" ? "testimonials" : "/"} smooth={true} duration={1500}
          className=" md:text-base font-medium cursor-pointer"
          spy={true}
        >
          Testimonials
        </ScrollLink>
      </nav>
      
       {token ?
       <div className="hidden z-50 exl:flex exl:items-center exl:gap-x-6">
        <Link to="/dashboard">
          <button className={`italic text-base py-2 px-5 ${(bg && !profile && !blue) ? "text-black" : "text-white"} font-['Poppinbase font-medium`}>
            My DashBoard
          </button>
        </Link>
        <Link to="signUp">
          <button onClick={()=> LogOut()} className="bg-pink py-2 px-5 rounded-lg text-black font-['Poppins'] text-base font-medium">
            LogOut
          </button>
          </Link>
        </div>
       :
       <div className="hidden z-50 exl:flex exl:items-center exl:gap-x-6">
         <Link to="/login">
            <button className={`text-lg py-2 px-5 ${(bg && !profile && !blue)? "text-black" : "text-white"} font-['Poppinbase font-medium`}>
              Login
            </button>
          </Link>
          <Link to="/signUp">
            <button className="bg-pink py-2 px-5 rounded-lg text-black font-['Poppins'] text-base font-medium">
              Signup
            </button>
          </Link>
        </div> 
        }
    </motion.header>
  );
}
