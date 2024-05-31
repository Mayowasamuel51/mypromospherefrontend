import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useStateContext } from "../contexts/ContextProvider";
import LOGO from "../../src/assests/SVGs/logo.svg";
import anon from "../assests/images/anon.png"

const MainCOntainerdivVariant = {
  initial: {
    scale: 0
  },
  animate: {
    scale: 1
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
    <motion.div variants={MainCOntainerdivVariant} initial="initial" animate="animate" exit="exit" className={`fixed exl:hidden inset-0 z-30 flex flex-col w-full min-h-screen bg-white bg-opacity-5 backdrop-blur-2xl`}>
      <motion.div variants={divVariant} className="flex flex-col min-h-screen justify-between p-8">
        <motion.div className="flex flex-col gap-8">
          {token &&
            <motion.div variants={childVariant}>
              <Link to="/dashboard" onClick={handleToggle} className="my-4 group flex items-center gap-2 py-4 border-b-2 border-black">
                <img src={token?.profileImage ?? anon} alt="" className="group-hover:scale-125 duration-200 w-10 aspect-square rounded-full" />
                <div className='flex flex-col gap-1'>
                  <p className='text-sm'>{token && token["user-name"]}</p>
                  <p className='text-xs text-slate-400'>{token.user}</p>
                </div>
              </Link>
            </motion.div>
          }

          <motion.div variants={childVariant}>
            <p>Hello</p>
          </motion.div>
          <motion.div variants={childVariant}>
            <p>How are you?!</p>
          </motion.div>

        </motion.div>
        <motion.div className="flex flex-col gap-2">
          {!token && <motion.div variants={childVariant}>
            <Link to="/Login" onClick={handleToggle}>
              <button className="py-2 border-2 border-pink w-full text-black font-['Poppins]">
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
          {token && <motion.div variants={childVariant} onClick={handleToggle}>
            <button onClick={() => LogOut()} className="py-2 border-2 border-pink bg-pink text-whi w-full font-['Poppins'] text-2xl">
              LogOut
            </button>
          </motion.div>}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
