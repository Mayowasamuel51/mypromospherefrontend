import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const MainCOntainerdivVariant = {
  initial: {
    scale: 0
  },
  animate: {
    scale: 1
  },
  exit: {
    translateX:"-150%",
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

export default function MobileNav({ handleToggle, hidden }) {
  return (
    <motion.div variants={MainCOntainerdivVariant} initial="initial" animate="animate" exit="exit" className={`${hidden && "top-[57.63px]"} fixed  inset-0 z-30 flex flex-col justify-center items-center w-full min-h-screen bg-white bg-opacity-5 backdrop-blur-2xl`}>
      <motion.div variants={divVariant} className="flex flex-col items-center gap-y-5">
        <motion.p variants={childVariant}>
          <Link to="/" onClick={handleToggle} className="text-2xl text-white">
            About us
          </Link>
        </motion.p>
        <motion.p variants={childVariant}>
          <Link
            to="/"
            onClick={handleToggle}
            className="text-2xl text-white"
          >
            Find talent
          </Link>
        </motion.p>
        <motion.p variants={childVariant}>
          <Link
            to="/"
            onClick={handleToggle}
            className="text-2xl text-white"
          >
            Top skills
          </Link>
        </motion.p>
        <motion.p variants={childVariant}>
          <Link
            to="/"
            onClick={handleToggle}
            className="text-2xl text-white"
          >
            Testimonials
          </Link>
        </motion.p>
        <motion.div variants={childVariant}>
          <Link to="/Login" onClick={handleToggle}>
            <button className=" text-2xl text-black font-['Poppins]">
              Login
            </button>
          </Link>
        </motion.div>
        <motion.div variants={childVariant}>
          <Link to="/signUp" onClick={handleToggle}>
            <button className=" bg-pink py-2 px-5 rounded-lg font-['Poppins'] text-2xl">
              Signup
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
