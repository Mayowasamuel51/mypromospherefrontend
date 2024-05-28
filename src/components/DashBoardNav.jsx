import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider"
import { Link, useLocation } from "react-router-dom"
import LOGO from "../../src/assests/SVGs/logo.svg";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Navbar from "./Navbar"
import { motion } from 'framer-motion';

const MainCOntainerdivVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1
    },
    exit: {
      translateX:"-150%",
      transition: {
        type: "spring", stiffness: 250, when: "afterChildren"
      }
    }
  }
  
  const navVariant = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3, staggerChildren:0.3, delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren"
      }
    }
  }
  
  const childVariant = {
    initial: {
      y: '-10px',
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring"
      }
    },
  }

const DashBoardNav = () => {
    const { token, LogOut, FullScreen } = useStateContext()
    const location = useLocation()
    const [toggleNav, setToggleNav] = useState(false)
    const handleToggle = ()=> {
        setToggleNav(prev => !prev)
    }
    return (
        <>
            {token ?
                <header className="py-2 px-4 lg:px-10 flex items-center justify-between bg-[#3D217A]">
                    <Link to={location.pathname === "/dashboard" ? "/" : "/home"}>
                        <div className="flex items-center gap-1">
                            <img src={LOGO} alt="" className="w-10 md:w-16 exl:w-15" />
                            <h1 className="text-xs font-bold text-white md:text-lg exl:text-xl">MyPromoSphere</h1>
                        </div>
                    </Link>
                    <div className="z-40 lg:hidden">
                        {toggleNav ? (
                        <XMarkIcon width={35} color="white"  onClick={handleToggle} />
                        ) : (
                        <Bars3BottomRightIcon width={35} color="white" onClick={handleToggle}/>
                        )}
                    </div>
                    <motion.div variants={MainCOntainerdivVariant} animate={toggleNav ? "animate" : !FullScreen ? "initial" : ""} exit="exit" className="text-black fixed inset-0 lg:static lg:flex flex-col justify-between min-h-screen lg:min-h-fit lg:flex-row items-center gap-10">
                        <motion.nav variants={navVariant} className="lg:py-0 py-10 min-h-screen lg:min-h-fit nav flex flex-col justify-between md:flex-row items-center gap-10 text-white bg-white lg:bg-transparent bg-opacity-5 backdrop-blur-2xl">
                            <motion.p variants={childVariant} className="">
                                <Link className="nav-link" to="/dashboard">Profile</Link>
                            </motion.p>
                            <motion.p variants={childVariant} className="">
                        <Link className="nav-link" to="/dashboard/myuploads">My uploads</Link>
                        </motion.p>
                            <motion.p variants={childVariant}>
                                <Link className="nav-link" to="/dashboard/EditProfile">EditProfile</Link>
                            </motion.p>
                            <motion.p variants={childVariant}>
                                <Link className="nav-link" to="/dashboard/post">post something</Link>
                            </motion.p>
                            <motion.div variants={childVariant}iv >
                                <button onClick={() => LogOut()}>  <a className="bg-pink py-3 px-6 md:py-3 md:px-5 rounded-sm mg:rounded-lg text-black font-['Poppins'] text-base font-medium">logout</a></button>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                </header>
                :
                <Navbar profile={true} />
            }

        </>
    )
}

export default DashBoardNav