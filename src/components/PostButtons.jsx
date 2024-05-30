import { } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

function PostButtons() {
  return (
    <div className="my-8 shadow-md p-4 md:p-4 w-fit mx-auto overflow-hidden bg-[#F0D8DD]">
      <div className="flex justify-center items-center gap-2 md:gap-10 font-medium">
        <Link to="/dashboard/post">
          <motion.button whileTap={{ scale: 1.05 }} className={`px-2 md:px-6 py-2 md:py-4 ${location.pathname === "/dashboard/post" && "bg-[#EC6A87] text-white"}`}>Post a Top Ad</motion.button>
        </Link>
        <Link to="/dashboard/video">
          <motion.button whileTap={{ scale: 1.05 }} className={`px-2 md:px-6 py-2 md:py-4 text-black ${location.pathname === "/dashboard/video" && "bg-[#EC6A87] text-white"}`}>Post a Top Ad Video</motion.button>
        </Link>
      </div>
    </div>
  )
}

export default PostButtons