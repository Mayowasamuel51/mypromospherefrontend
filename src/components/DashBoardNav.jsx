import { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider"
import { Link } from "react-router-dom"
import LOGO from "../../src/assests/SVGs/logo.svg";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Navbar from "./Navbar"
import { motion, AnimatePresence } from 'framer-motion';
import DashboardMobileNav from "./DashboardMobileNav";
import ProfileHover from "./profileHover";
import Links from "./links";

const DashBoardNav = () => {
  const { token, LogOut, } = useStateContext()
  const [toggleNav, setToggleNav] = useState(false)
  const handleToggle = () => {
    setToggleNav(prev => !prev)
  }
  useEffect(() => {
    if (toggleNav) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [toggleNav]);
  return (
    <>
      {token ?
        <header className="z-10 py-3 lg:py-0 px-4 lg:px-10 flex items-center justify-between bg-purple dark:bg-[#121212] shadow-sm shadow-grey fixed w-full top-0 right-0 left-0">
          <Link to="/">
            <div className="flex items-center gap-1">
              <img src={LOGO} alt="" className="w-10 lg:w-14 exl:w-20" />
              <h1 className="text-xs font-bold text-white md:text-lg exl:text-xl">MyPromoSphere</h1>
            </div>
          </Link>
          <div className="z-20 lg:hidden">
            {toggleNav ? (
              <XMarkIcon width={35} className="text-black dark:text-white" onClick={handleToggle} />
            ) : (
              <Bars3BottomRightIcon width={35} className="text-black dark:text-white" onClick={handleToggle} />
            )}
          </div>
          <div className="lg:block hidden text-white">
            <Links />
          </div>
          <AnimatePresence>
            {toggleNav && <DashboardMobileNav toggleNav={toggleNav} LogOut={LogOut} handleToggle={handleToggle} />}
          </AnimatePresence>
          <motion.div className={`hidden text-black fixed inset-0 lg:static lg:flex flex-col justify-between lg:flex-row items-center gap-10`}>
            <motion.nav  className={`min-h-fit lg:py-0 py-10 flex justify-between items-center gap-10 text-white bg-transparent bg-opacity-5`}>
              <ProfileHover LogOut={LogOut} />
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