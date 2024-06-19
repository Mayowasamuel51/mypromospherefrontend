import { Link, Navigate } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider"
import { useState } from "react"
import { AnimatePresence  } from "framer-motion";
import roundedImg from "../../assests/images/Ellipse 3.png";
import anon from "../../assests/images/anon.png";
import Post from "./Post";
import Saved from "./Saved";
import { FaShare, FaVideo } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { MdDynamicFeed } from "react-icons/md";
import {  } from "react-icons/fa";

function DefualtLayout() {
    const { token } = useStateContext()
    const [saved, setSaved] = useState(false)
    if (!token) return <Navigate  to="/" />
    return (
        <>
            <main className={`px-4`}>
                <section className="flex items-start md:gap-10">
                    <article className="w-fit flex flex-col justify-between gap-20 py-2 px-2 md:py-10 md:px-6">
                        <div className="flex flex-col md:gap-6">
                            <div className="flex flex-col gap-2">
                                <img
                                    src={token?.profileImage  ?? anon}
                                    alt={"profile-picture"}
                                    className="w-[30px] md:w-[50px] aspect-square rounded-full object-cover object-top"
                                />
                                <h1 className="font-medium text-xs md:text-sm capitalize md:block hidden">
                                    {token ? `${token["user_name"]}` : 'Anonymous'}
                                </h1>
                            </div>
                            <div className="flex flex-col md:gap-6 justify-center">
                                <button className="flex items-center gap-2 duration-200 rounded-md cursor-pointer">
                                    <FaShare size={20}/>
                                    <p className="text-center md:block hidden">share</p>
                                </button>
                                <Link to={'EditProfile'} className="">
                                    <button className="flex items-center gap-2 duration-200rounded-md cursor-pointer">
                                        <FaEdit size={20} />
                                        <p className="text-center md:block hidden">Edit profile</p>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col md:gap-6 justify-center gap-x-6">
                                <p onClick={()=> setSaved(false)} className={`${!saved && "font-bold text-[#3D217A]"} cursor-pointer flex items-center gap-2`}>
                                    <MdDynamicFeed size={20} />
                                    <span className="md:block hidden">Post</span>
                                </p>
                                <p onClick={()=> setSaved(true)} className={`${saved && "font-bold text-[#3D217A]"} cursor-pointer flex items-center gap-2`}>
                                    <FaVideo size={20} />
                                    <span className="md:block hidden">Video</span>
                                </p>
                            </div>
                        </div>
                        <Link to={`post`}>
                            <button className="text-[#3D217A] cursor-pointer flex items-center gap-2">
                                <FiPlusSquare size={20} />
                                <p className="md:block hidden">Post an Ad</p>
                            </button>
                        </Link>
                    </article>

                    <article className="flex-1 flex flex-col">
                        <div className="text-center my-4">
                            <AnimatePresence>
                                {saved ? <Saved /> : <Post />}
                            </AnimatePresence>
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}

export default DefualtLayout