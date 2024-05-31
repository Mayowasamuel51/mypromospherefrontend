import { Link, useLocation } from "react-router-dom"
import { motion } from 'framer-motion';
import anon from "../assests/images/anon.png"

const MainCOntainerdivVariant = {
  initial: {
    opacity: 0,
    zIndex: -1
  },
  animate: {
    opacity: 1
  },
  exit: {
    translateX: "-150%",
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
      duration: 0.3, staggerChildren: 0.3, delayChildren: 0.3
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


// eslint-disable-next-line react/prop-types
const DashboardMobileNav = ({ toggleNav, LogOut }) => {
  const location = useLocation()
  return (
    <motion.div variants={MainCOntainerdivVariant} animate={toggleNav ? "animate" : "initial"} exit="exit" className={`lg:hidden text-black fixed inset-0 flex justify-between items-center gap-10`}>
      <motion.nav variants={navVariant} className={`text-black min-h-screen w-full lg:py-0 py-10 nav flex flex-col justify-between items-center gap-10 bg-white bg-transparent bg-opacity-5 backdrop-blur-2xl`}>
        {location.pathname !== "/dashboard" && <motion.div className="">
          <Link to="/dashboard">
            <img src={anon} alt="" className="w-10 aspect-square rounded-full" />
          </Link>
        </motion.div>}
        <motion.p variants={childVariant} className="">
          <Link className="nav-link" to="/dashboard/myuploads">My uploads</Link>
        </motion.p>
        <motion.p variants={childVariant}>
          <Link className="nav-link" to="/dashboard/post">post something</Link>
        </motion.p>
        <motion.div variants={childVariant} iv >
          <button onClick={() => LogOut()}>  <a className="bg-pink py-3 px-6 md:py-3 md:px-5 rounded-sm mg:rounded-lg text-black font-['Poppins'] text-base font-medium">logout</a></button>
        </motion.div>
      </motion.nav>
    </motion.div>
  )
}

export default DashboardMobileNav