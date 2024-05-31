import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import anon from "../assests/images/anon.png"
import { useStateContext } from '../contexts/ContextProvider';

const ulVariant = {
    initial: {
        opacity: 0,
        y: 20,
        zIndex: -10,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring", duration: 0.3, staggerChildren: 0.3, when: "beforeChildren"
        }
    },
    exit : {
        opacity: 0,
        y: 20,
        transition: {
            when: "afterChildren" , duration: 0.3
        }
    }
}

const liVariant = {
    initial : {
        opacity : 0
    },
    animate : {
        opacity : 1
    },
    exit : {
        opacity: 0
    }
}

const ProfileHover = ({ LogOut }) => {
    const location = useLocation();
    const { token } = useStateContext();
    const [profileNav, setProfileNav] = useState(false)
    const mouseOver = () => {
        setProfileNav(true)
    }
    const mouseOut = () => {
        setProfileNav(false)
    }
    return (
        <motion.div onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="relative text-black">
            <img src={anon} alt="" className="w-10 aspect-square rounded-full cursor-pointer" />
            <AnimatePresence>
                <motion.ul variants={ulVariant} animate={profileNav ? "animate" : "initial"} exit="exit" className={`flex flex-col gap-2 absolute right-[10px] bg-white w-[220px] p-4 rounded-md shadow-md`}>
                    <motion.li variants={liVariant}>
                        <Link  to="/dashboard" className='group flex items-center gap-2 py-2 border-b-2'>
                            <img src={token?.profileImage ?? anon} alt="" className="group-hover:scale-125 duration-200 w-10 aspect-square rounded-full" />
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm'>{token && token["user-name"]}</p>
                                <p className='text-xs text-slate-400'>{token.user}</p>
                            </div>
                        </Link>
                    </motion.li>
                    <motion.li  variants={liVariant}>
                        <Link to={location.pathname === "/" ? 'dashboard/EditProfile' : 'EditProfile'} className="w-fit cursor-pointer font-['Poppins'] text-base font-medium">Edit Profile</Link>
                    </motion.li>
                    <motion.li variants={liVariant}>
                        <p onClick={() => LogOut()} className="w-fit cursor-pointer text-red font-['Poppins'] text-base font-medium">logout</p>
                    </motion.li>
                </motion.ul>
            </AnimatePresence>
        </motion.div>
    )
}

export default ProfileHover