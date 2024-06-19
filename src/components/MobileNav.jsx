import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useStateContext } from "../contexts/ContextProvider";
import anon from "../assests/images/anon.png"
import { FaPowerOff, FaHouseChimneyWindow } from "react-icons/fa6";
import { MdApartment, MdDiscount } from "react-icons/md";
import { FaCar, FaLaptop } from "react-icons/fa";

const MainCOntainerdivVariant = {
  initial: {
    scale: 0,
    zIndex: -10,
    border: "0px solid #3D217A",
  },
  animate: {
    scale: 1,
    zIndex: 10
  },
  exit: {
    translateX: "-150%",
    transition: {
      type: "spring", stiffness: 250, when: "afterChildren"
    }
  }
}

const divVariant = {
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
export default function MobileNav({ handleToggle }) {
  const { token, LogOut } = useStateContext();
  return (
    <motion.div variants={MainCOntainerdivVariant} initial="initial" animate="animate" exit="exit" className={`h-[100dvh] fixed exl:hidden inset-0 z-30 flex flex-col w-full bg-white dark:bg-black dark:text-white`}>
      <motion.div variants={divVariant} className="fixed inset-0 bg-white dark:bg-black dark:text-white bg-opacity-5 backdrop-blur-2xl flex flex-col h-[100dvh] justify-between p-8">
        <motion.div className="flex flex-col lg:gap-8 gap-5">
          {token &&
            <motion.div variants={childVariant}>
              <Link to="/dashboard" onClick={handleToggle} className="my-4 group flex items-center gap-2 py-4 border-b-2 border-black">
                <img src={token?.profileImage ?? anon} alt="" className="group-hover:scale-125 duration-200 w-10 aspect-square rounded-full" />
                <div className='flex flex-col gap-1'>
                  <p className='text-sm'>{token && token["user_name"]}</p>
                  <p className='text-xs text-slate-400'>{token.user}</p>
                </div>
              </Link>
            </motion.div>
          }
          <motion.div variants={childVariant} onClick={handleToggle}>
            <Link to="/category/property" className="flex items-center gap-1">
              <FaHouseChimneyWindow size={20} />
              <p>Property</p>
            </Link>
          </motion.div>
          <motion.div variants={childVariant} onClick={handleToggle}>
            <Link to="/category/apartment" className="flex items-center gap-1">
              <MdApartment size={20} />
              <p>Apartment</p>
            </Link>
          </motion.div>
          <motion.div variants={childVariant} onClick={handleToggle}>
            <Link to="/category/cars" className="flex items-center gap-1">
              <FaCar size={20} />
              <p>Cars</p>
            </Link>
          </motion.div>
          <motion.div variants={childVariant} onClick={handleToggle}>
            <Link to="/category/laptops" className="flex items-center gap-1">
              <FaLaptop size={20} />
              <p>Laptops</p>
            </Link>
          </motion.div>
          <motion.div variants={childVariant} onClick={handleToggle}>
            <Link to="/category/discount" className="flex items-center gap-1">
              <MdDiscount size={20} />
              <p>Products on Discount</p>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col gap-2">
          {!token && <motion.div variants={childVariant}>
            <Link to="/Login" onClick={handleToggle}>
              <button className="py-2 border-2 border-pink text-pink w-full font-['Poppins]">
                Login
              </button>
            </Link>
          </motion.div>}
          {!token && <motion.div variants={childVariant}>
            <Link to="/signUp" >
              <button className="py-2 border-2 border-pink bg-pink text-white w-full font-['Poppins']">
                Signup
              </button>
            </Link>
          </motion.div>}
          {token &&
            <motion.div variants={childVariant} onClick={handleToggle} className="text-red flex items-center gap-2">
              <FaPowerOff onClick={() => LogOut()} />
              <p onClick={() => LogOut()}>  <a className="text-base font-medium">logout</a></p>
            </motion.div>
          }
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
