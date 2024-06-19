import { Link, Navigate } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider"
import { useState } from "react"
import { AnimatePresence  } from "framer-motion";

import roundedImg from "../../assests/images/Ellipse 3.png";
import anon from "../../assests/images/anon.png";
import Post from "./Post";
import Saved from "./Saved";
import { FaShare } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";

function DefualtLayout() {
    const { token } = useStateContext()

    const [saved, setSaved] = useState(false)
 
    if (!token) return <Navigate  to="/" />
    return (
        <>
            <main className={`px-4`}>
                <section className="flex items-start gap-2">
                    <article className="w-fit flex flex-col justify-between gap-16 bg-slate-100 rounded-lg py-2 px-2 md:py-10 md:px-6 text-center">
                        <div className="flex flex-col gap-2">
                            <img
                                src={token?.profileImage  ?? anon}
                                alt={"profile-picture"}
                                className="w-[20px] md:w-[50px] aspect-square rounded-full object-cover object-top"
                            />
                            <h1 className="font-medium text-xs md:text-sm capitalize">
                                {token ? `${token["user_name"]}` : 'Anonymous'}
                            </h1>
                            <div className="flex flex-col md:gap-4 justify-center">
                                <button className="flex items-center gap-2 duration-200 rounded-md cursor-pointer">
                                    <FaShare size={20}/>
                                    <p className="text-center">share</p>
                                </button>
                                <Link to={'EditProfile'} className="">
                                    <button className="flex items-center gap-2 duration-200rounded-md cursor-pointer">
                                        <FaEdit size={20} />
                                        <p className="text-center">Edit profile</p>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col md:gap-4 justify-center gap-x-6">
                                <button onClick={()=> setSaved(false)}
                                className={`${!saved && ""} cursor-pointer`}
                                >
                                    Post
                                </button>
                                <button onClick={()=> setSaved(true)}
                                className={`${saved && ""} cursor-pointer`}
                                >
                                    Saved
                                </button>
                            </div>
                        </div>
                        <Link to={`post`}>
                            <button className="cursor-pointer flex items-center gap-2">
                                <FiPlusSquare />
                                <p className="text-white">Post an Ad</p>
                            </button>
                        </Link>
                    </article>

                    <article className="flex-1 flex flex-col bg-slate-100 rounded-lg">
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