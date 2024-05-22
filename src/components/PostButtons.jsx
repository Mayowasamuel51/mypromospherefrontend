import {} from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

function PostButtons() {
  return (
    <div className="my-8 shadow-md p-3 md:p-6 w-fit mx-auto overflow-hidden bg-[#F0D8DD]">
        <div className="flex justify-center items-center gap-3 md:gap-10 font-bold">
          <Link to="/dashboard/post">
            <motion.button whileTap={{scale: 1.05}} className={`px-2 md:px-6 py-2 ${location.pathname === "/dashboard/post" && "bg-[#EC6A87] text-white"}`}>Post Images</motion.button>
          </Link>
          <Link to="/dashboard/video">
            <motion.button whileTap={{scale: 1.05}}  className={`px-2 md:px-6 py-2 text-black ${location.pathname === "/dashboard/video" && "bg-[#EC6A87] text-white"}`}>Post Videos</motion.button>
          </Link>
        </div>
      </div>
  )
}

export default PostButtons