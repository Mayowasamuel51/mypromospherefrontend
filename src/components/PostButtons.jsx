import { } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

function PostButtons() {
  return (
    <div className="my-4 shadow-md md:p-4 w-fit mx-auto overflow-hidden bg-[#F0D8DD]">
      <div className="flex justify-center items-center gap-2 md:gap-10 font-medium">
        <Link to="/dashboard/postAd">
          <motion.button whileTap={{ scale: 1.05 }} className={`px-2 md:px-6 py-2 md:py-4 md:text-base text-xs ${location.pathname === "/dashboard/postAd" && "bg-[#EC6A87] text-white"}`}>Post a Top Ad</motion.button>
        </Link>
        <Link to="/dashboard/postVideo">
          <motion.button whileTap={{ scale: 1.05 }} className={`px-2 md:px-6 py-2 md:py-4 text-black md:text-base text-xs ${location.pathname === "/dashboard/postVideo" && "bg-[#EC6A87] text-white"}`}>Post a Top Ad Video</motion.button>
        </Link>
      </div>
    </div>
  )
}

export default PostButtons