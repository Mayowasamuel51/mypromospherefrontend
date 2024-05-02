import { Link, Navigate } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider"
import { useState, useEffect } from "react"
import {  motion, AnimatePresence  } from "framer-motion"

import roundedImg from "../../assests/images/Ellipse 3.png"
import Post from "../LoginPage/component/Post"
import Saved from "../LoginPage/component/Saved"

function DefualtLayout() {
    const { token } = useStateContext()
    const [saved, setSaved] = useState(false)
    if (!token) return <Navigate  to="/profile/timilehin babade"/>
    return (
        <>
            <main className={`py-7 ${!token && "pt-32"}`}>
                <section className="">
                    <article className="">
                        <img
                            src={roundedImg}
                            alt=""
                            className="w-[30%] md:w-[150px] mx-auto"
                        />
                        <h1 className="text-center font-700 text-lg md:text-xl mt-6">
                            {token ? `${token["user-name"]}` : 'Anonymous'}
                        </h1>
                        <div className="flex items-center justify-center gap-x-3 mt-4">
                            <button className="bg-[#BCB9B9] p-2 px-4 rounded-md">
                                <p className="text-center">share</p>
                            </button>
                            <Link to={'EditProfile'}>
                                <button className="bg-[#BCB9B9] p-2 px-4 rounded-md">
                                    <p className="text-center">Edit profile</p>
                                </button>
                            </Link>
                        </div>
                    </article>

                    {/*post and saved */}
                    <article className="mt-6">
                        <div className="flex items-center justify-center gap-x-6">
                            {/* tab-btn  */}
                            <div className="flex items-center gap-x-4">
                                <button onClick={()=> setSaved(false)}
                                className={`${!saved && "border-2 border-[#000000] border-t-0 border-r-0 border-l-0"}`}
                                >
                                    Post
                                </button>
                            </div>
                            <button onClick={()=> setSaved(true)}
                            className={`${saved && "border-2 border-[#000000] border-t-0 border-r-0 border-l-0"}`}
                            >
                                Saved
                            </button>
                        </div>
                        <div className="mt-12 text-center">
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