import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import anon from "../assests/images/anon.png"
import { FaPowerOff } from "react-icons/fa6";
import { useStateContext } from '../contexts/ContextProvider';
import PropTypes from 'prop-types'

const ulVariant = {
    initial: {
        opacity: 0,
        y: 20,
        zIndex: -100,
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
        <motion.div onMouseEnter={mouseOver} onMouseLeave={mouseOut} className="relative text-black dark:text-darkGray">
            <motion.img whileHover={{scale: 0.90}} src={token?.profileImage || anon} alt="" className="w-10 aspect-square rounded-full cursor-pointer object-cover" />
            <AnimatePresence>
                <motion.ul variants={ulVariant} animate={profileNav ? "animate" : "initial"} exit="exit" className={`${profileNav ? "visible" : "invisible"} flex flex-col gap-2 absolute right-[0px] bg-white dark:bg-darkBg w-[280px] p-4 rounded-md shadow-md`}>
                    <motion.li variants={liVariant}>
                        <Link  to="/dashboard" className='group flex items-center gap-2 py-2 border-b-2'>
                            <img src={token?.profileImage ?? anon} alt="" className="group-hover:scale-125 duration-200 w-10 aspect-square rounded-full object-cover" />
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm'>{token && token["user_name"]}</p>
                                <p className='text-xs text-slate-400'>{token.user}</p>
                            </div>
                        </Link>
                    </motion.li>
                    <motion.li  variants={liVariant}>
                        <Link to={location.pathname === "/" ? 'dashboard/EditProfile' : '/dashboard/EditProfile'} className="w-fit cursor-pointer font-['Poppins'] text-base font-medium">Edit Profile</Link>
                    </motion.li>
                    <motion.li  variants={liVariant}>
                        <Link to={location.pathname === "/" ? 'dashboard/videos' : '/dashboard/videos'} className="w-fit cursor-pointer font-['Poppins'] text-base font-medium">My Videos</Link>
                    </motion.li>
                    <motion.div variants={liVariant} className="text-red flex items-center gap-2 cursor-pointer w-fit duration-200 hover:scale-110">
                        <FaPowerOff onClick={() => LogOut()} />
                        <p onClick={() => LogOut()}>  <a className="text-base font-medium">logout</a></p>
                    </motion.div>
                </motion.ul>
            </AnimatePresence>
        </motion.div>
    )
}

ProfileHover.propTypes = {
    LogOut: PropTypes.func
}

export default ProfileHover