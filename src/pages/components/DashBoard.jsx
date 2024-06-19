import { Link, Navigate } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider"
import { useState } from "react"
import { AnimatePresence  } from "framer-motion";

import roundedImg from "../../assests/images/Ellipse 3.png";
import anon from "../../assests/images/anon.png";
import Post from "./Post";
import Saved from "./Saved";

function DefualtLayout() {
    const { token } = useStateContext()

    const [saved, setSaved] = useState(false)
 
    if (!token) return <Navigate  to="/" />
    return (
        <>
            <main className={`px-4`}>
                <section className="flex items-start gap-2">
                    <article className="flex-1 flex flex-col justify-between min-h-screen gap-2 border-2 md:py-4 text-center">
                        <div className="flex flex-col gap-2">
                            <img
                                src={token?.profileImage  ?? anon}
                                alt={"profile-picture"}
                                className="w-[20px] md:w-[50px] aspect-square rounded-full object-cover object-top mx-auto"
                            />
                            <h1 className="text-center font-700 text-xs md:text-sm capitalize">
                                {token ? `${token["user_name"]}` : 'Anonymous'}
                            </h1>
                            <div className="flex flex-col items-center justify-center gap-x-3">
                                <button className="bg-slate-300 hover:bg-slate-400 duration-200 p-2 px-4 rounded-md cursor-pointer">
                                    <p className="text-center">share</p>
                                </button>
                                <Link to={'EditProfile'} className="bigLg:hidden">
                                    <button className="bg-slate-300 hover:bg-slate-400 duration-200 p-2 px-4 rounded-md cursor-pointer">
                                        <p className="text-center">Edit profile</p>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-x-6">
                                <div className="flex items-center gap-x-4">
                                    <button onClick={()=> setSaved(false)}
                                    className={`${!saved && "border-2 border-[#000000] border-t-0 border-r-0 border-l-0"} cursor-pointer`}
                                    >
                                        Post
                                    </button>
                                </div>
                                <button onClick={()=> setSaved(true)}
                                className={`${saved && "border-2 border-[#000000] border-t-0 border-r-0 border-l-0"} cursor-pointer`}
                                >
                                    Saved
                                </button>
                            </div>
                        </div>
                        <Link to={`post`}>
                            <button className="bg-purple cursor-pointer p-2 px-4 rounded-md">
                                <p className="text-white">Post an Ad</p>
                            </button>
                        </Link>
                    </article>

                    <article className="flex-[5] flex flex-col">
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