import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion';

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

export default function Navbar({profile}) {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [hidden, setHidden] = useState(false)
  const [bg, setBg] = useState(false)
  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };
  const {token, LogOut} = useStateContext()
  
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
    <motion.header variants={headerVariant} animate={hidden ? "hidden" : "visible"} className={`z-[999999999] ${bg ? profile ? "bg-[#3D217A]" : "bg-white" : profile ? "bg-[#3D217A]" : "bg-transparent"} fixed top-0 right-0 left-0 w-full flex flex-row justify-between items-center py-2 px-4 lg:px-10 duration-300`}>
      <Link to="/" className=" flex items-center">
        <img src={logo} alt="logo" className="w-10 md:w-16 exl:w-20" />
        <h1 className="text-sm font-bold text-black md:text-lg exl:text-xl">MyPromoSphere</h1>
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

      <nav className={`${bg ? "text-black" : "text-white"} hidden exl:flex exl:items-center exl:gap-x-[68px]`}>
        <Link to="#about" className="md:text-base font-medium">
          About us
        </Link>
        <Link to="#talents" className="md:text-base font-medium">
          Find talent
        </Link>
        <Link to="#skills" className="md:text-base font-medium">
          Top skills
        </Link>
        <Link
          to="#testimonials"
          className=" md:text-base font-medium"
        >
          Testimonials
        </Link>
      </nav>
      
       {token ?
       <div className="hidden z-50 exl:flex exl:items-center exl:gap-x-6">
        <Link to="/dashboard">
            <button className={`text-base py-2 px-5 ${bg ? "text-black" : "text-white"} font-['Poppinbase font-medium`}>
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
            <button className={`text-lg py-2 px-5 ${bg ? "text-black" : "text-white"} font-['Poppinbase font-medium`}>
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
