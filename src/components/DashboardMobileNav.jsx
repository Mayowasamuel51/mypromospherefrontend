import { Link } from "react-router-dom"
import { motion } from 'framer-motion';
import anon from "../assests/images/anon.png"
import { useStateContext } from '../contexts/ContextProvider';
import { FaPowerOff } from "react-icons/fa6";
import PropTypes from 'prop-types';

const MainCOntainerdivVariant = {
  initial: {
    opacity: 0,
    zIndex: -10,
    border: "0px solid #3D217A",
  },
  animate: {
    opacity: 1,
    zIndex: 10,
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

const DashboardMobileNav = ({ toggleNav, LogOut, handleToggle }) => {
  const { token } = useStateContext();
  return (
    <motion.div variants={MainCOntainerdivVariant} initial="initial" animate={toggleNav ? "animate" : "initial"} exit="exit" className={`h-[100vh] lg:hidden text-black fixed inset-0 flex justify-between items-center gap-10 z-[99999]`}>
      <motion.nav variants={navVariant} className={`fixed inset-0 bg-white dark:bg-black p-8 text-black h-[100vh] w-full lg:py-0 py-10 flex flex-col justify-between bg-transparent`}>
        <motion.div className="flex flex-col gap-6">
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
          <motion.div variants={childVariant} onClick={handleToggle} className="text-black dark:text-white">
            <Link to="/category/property">
              <p>Property</p>
            </Link>
          </motion.div>
          <motion.div variants={childVariant} onClick={handleToggle}>
            <Link to="/category/apartment">
              <p>Apartment</p>
            </Link>
          </motion.div>
          <motion.div variants={childVariant} onClick={handleToggle}>
            <Link to="/category/cars">
              <p>Cars</p>
            </Link>
          </motion.div>
          <motion.div variants={childVariant} onClick={handleToggle}>
            <Link to="/category/laptops">
              <p>Laptops</p>
            </Link>
          </motion.div>
          <motion.div variants={childVariant} onClick={handleToggle}>
            <Link to="/category/discount">
              <p>Products on Discount</p>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div variants={childVariant} onClick={handleToggle} className="text-red flex items-center gap-2">
          <FaPowerOff onClick={() => LogOut()} />
          <p onClick={() => LogOut()}>  <a className="text-base font-medium">logout</a></p>
        </motion.div>
      </motion.nav>
    </motion.div>
  )
}

DashboardMobileNav.propTypes = {
  toggleNav : PropTypes.bool,
  LogOut : PropTypes.func,
  handleToggle : PropTypes.func
}

export default DashboardMobileNav;