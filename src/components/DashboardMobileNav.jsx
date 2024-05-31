import { Link } from "react-router-dom"
import { motion } from 'framer-motion';
import anon from "../assests/images/anon.png"
import { useStateContext } from '../contexts/ContextProvider';
import { FaPowerOff } from "react-icons/fa6";

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
    x: '-20px',
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring"
    }
  },
}

// eslint-disable-next-line react/prop-types
const DashboardMobileNav = ({ toggleNav, LogOut, handleToggle }) => {
  const { token } = useStateContext();
  return (
    <motion.div variants={MainCOntainerdivVariant} animate={toggleNav ? "animate" : "initial"} exit="exit" className={`lg:hidden text-black fixed inset-0 flex justify-between items-center gap-10`}>
      <motion.nav variants={navVariant} className={`p-8 text-black min-h-screen w-full lg:py-0 py-10 flex flex-col justify-between bg-white bg-transparent bg-opacity-5 backdrop-blur-2xl`}>
        <motion.div className="flex flex-col gap-4">
          {token &&
          <motion.div variants={childVariant} className="">
            <Link to="/dashboard" onClick={handleToggle} className="my-4 group flex items-center gap-2 py-4 border-b-2 border-black">
              <img src={token?.profileImage ?? anon} alt="" className="group-hover:scale-125 duration-200 w-10 aspect-square rounded-full" />
              <div className='flex flex-col gap-1'>
                <p className='text-sm'>{token && token["user-name"]}</p>
                <p className='text-xs text-slate-400'>{token.user}</p>
              </div>
            </Link>
          </motion.div>}
          <motion.p variants={childVariant} onClick={handleToggle} className="">
            <Link className="nav-link" to="/dashboard/myuploads">My uploads</Link>
          </motion.p>
          <motion.p variants={childVariant} onClick={handleToggle}>
            <Link className="nav-link" to="/dashboard/post">post something</Link>
          </motion.p>
        </motion.div>
        <motion.div variants={childVariant} onClick={handleToggle} className="text-red flex items-center gap-2">
          <FaPowerOff onClick={() => LogOut()} />
          <p onClick={() => LogOut()}>  <a className="text-base font-medium">logout</a></p>
        </motion.div>
      </motion.nav>
    </motion.div>
  )
}

export default DashboardMobileNav