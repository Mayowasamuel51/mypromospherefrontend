import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider"
import { Link, useLocation } from "react-router-dom"
import LOGO from "../../src/assests/SVGs/logo.svg";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Navbar from "./Navbar"
import { motion } from 'framer-motion';
import DashboardMobileNav from "./DashboardMobileNav";
import ProfileHover from "./profileHover";

const DashBoardNav = () => {
  const { token, LogOut, } = useStateContext()
  const location = useLocation()
  const [toggleNav, setToggleNav] = useState(false)
  const handleToggle = () => {
    setToggleNav(prev => !prev)
  }
  return (
    <>
      {token ?
        <header className="relative py-2 lg:py-0 px-4 lg:px-10 flex items-center justify-between bg-[#3D217A] ">
          <Link to={location.pathname === "/dashboard" ? "/" : "/home"}>
            <div className="flex items-center gap-1">
              <img src={LOGO} alt="" className="w-8 md:w-16 exl:w-15" />
              <h1 className="text-xs font-bold text-white md:text-lg exl:text-xl">MyPromoSphere</h1>
            </div>
          </Link>
          <div className="z-40 lg:hidden">
            {toggleNav ? (
              <XMarkIcon width={35} color="white" onClick={handleToggle} />
            ) : (
              <Bars3BottomRightIcon width={35} color="white" onClick={handleToggle} />
            )}
          </div>
          <DashboardMobileNav toggleNav={toggleNav} LogOut={LogOut} />
          <motion.div className={`hidden text-black fixed inset-0 lg:static lg:flex flex-col justify-between lg:flex-row items-center gap-10`}>
            <motion.nav  className={`min-h-fit lg:py-0 py-10 flex justify-between items-center gap-10 text-white bg-transparent bg-opacity-5`}>
              {/* <motion.p className="">
                <Link className="nav-link" to="/dashboard">Profile</Link>
              </motion.p> */}
              {/* <motion.p className="">
                <Link className="nav-link" to="/dashboard/myuploads">My uploads</Link>
              </motion.p> */}
              {/* <motion.p>
                <Link className="nav-link" to="/dashboard/EditProfile">EditProfile</Link>
              </motion.p> */}
              {/* <motion.p>
                <Link className="nav-link" to="/dashboard/post">post something</Link>
              </motion.p> */}
              {/* <motion.div >
                <button onClick={() => LogOut()}>  <a className="bg-pink py-3 px-6 md:py-3 md:px-5 rounded-sm mg:rounded-lg text-black font-['Poppins'] text-base font-medium">logout</a></button>
              </motion.div> */}
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