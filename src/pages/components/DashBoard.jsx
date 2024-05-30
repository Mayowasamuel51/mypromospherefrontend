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

    console.log(token?.user)
    console.log(token?.profileImage)
    return (
        <>
            <main className={``}>
                <section className="flex flex-col gap-4">
                    <article className="flex flex-col gap-2">
                        <img
                            src={token?.profileImage ?? anon}
                            alt={roundedImg}
                            className="w-[30%] md:w-[150px] mx-auto"
                        />
                        <h1 className="text-center font-700 text-lg md:text-3xl capitalize">
                            {token ? `${token["user-name"]}` : 'Anonymous'}
                        </h1>
                        <div className="flex items-center justify-center gap-x-3">
                            <button className="bg-slate-300 hover:bg-slate-400 duration-200 p-2 px-4 rounded-md cursor-pointer">
                                <p className="text-center">share</p>
                            </button>
                            <Link to={'EditProfile'} className="bigLg:hidden">
                                <button className="bg-[#BCB9B9] p-2 px-4 rounded-md cursor-pointer">
                                    <p className="text-center">Edit profile</p>
                                </button>
                            </Link>
                        </div>
                    </article>

                    <article className="flex flex-col">
                        <div className="flex items-center justify-center gap-x-6">
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