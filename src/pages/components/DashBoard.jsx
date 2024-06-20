import { Link, Navigate } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider"
import DashBoardNav from "../../components/DashBoardNav";
import { useState } from "react"
import { AnimatePresence  } from "framer-motion";
import anon from "../../assests/images/anon.png";
import { FaShare, FaVideo } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { MdDynamicFeed } from "react-icons/md";
import { Outlet } from "react-router-dom"

function Dashboard() {
    const { token } = useStateContext()
    const [video, setVideo] = useState(false)
    if (!token) return <Navigate  to="/" />
    return (
        <>
            <DashBoardNav />
            <main className={`px-4 md:px-10 py-20 md:py-28`}>
                <section className="flex items-start md:gap-10 gap-4">
                    <article className="rounded-md bg-[#3D217A] md:rounded-none md:bg-white w-fit flex items-center md:items-start text-center md:text-start flex-col justify-between gap-20 py-2 px-2 md:py-10 md:px-6">
                        <div className="flex flex-col md:gap-6 gap-4">
                            <div className="flex flex-col gap-2">
                                <img
                                    src={token?.profileImage  ?? anon}
                                    alt={"profile-picture"}
                                    className="w-[30px] md:w-[50px] aspect-square rounded-full object-cover object-top"
                                />
                                <h1 className="font-medium text-sm capitalize md:block hidden">
                                    {token ? `${token["user_name"]}` : 'Anonymous'}
                                </h1>
                                <p className="text-xs text-slate-400 md:block hidden">{token ? `${token["user"]}` : 'Anonymous'}</p>
                            </div>
                            <div className="flex items-center md:items-start flex-col md:gap-6 gap-4 justify-center">
                                <button className="flex items-center gap-2 duration-200 rounded-md cursor-pointer">
                                    <FaShare size={20} className="text-white md:text-black"/>
                                    <p className="text-center md:block hidden">share</p>
                                </button>
                                <Link to={'profileEdit'} className="">
                                    <button className="flex items-center gap-2 duration-200rounded-md cursor-pointer">
                                        <FaEdit size={20} className="text-white md:text-black" />
                                        <p className="text-center md:block hidden">Edit profile</p>
                                    </button>
                                </Link>
                                <Link to={'personal-Info'} className="">
                                    <button className="flex items-center gap-2 duration-200rounded-md cursor-pointer">
                                        <FaEdit size={20} className="text-white md:text-black" />
                                        <p className="text-center md:block hidden">Personal Info</p>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex items-center md:items-start flex-col md:gap-6 gap-4 justify-center gap-x-6">
                                <Link to="/dashboard">
                                    <p onClick={()=> setVideo(false)} className={`${!video ? "font-bold text-white md:text-[#3D217A]" : "text-white md:text-black"} cursor-pointer flex items-center gap-2`}>
                                        <MdDynamicFeed size={20} />
                                        <span className="md:block hidden">Post</span>
                                    </p>
                                </Link>
                                <Link to="/dashboard/video">
                                    <p onClick={()=> setVideo(true)} className={`${video ? "font-bold text-white md:text-[#3D217A]" : "text-white md:text-black"} cursor-pointer flex items-center gap-2`}>
                                        <FaVideo size={20} />
                                        <span className="md:block hidden">Video</span>
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <Link to={`postAd`}>
                            <button className="text-white md:text-black cursor-pointer flex items-center gap-2">
                                <FiPlusSquare size={20} />
                                <p className="md:block hidden">Post an Ad</p>
                            </button>
                        </Link>
                    </article>

                    <article className="flex-1 flex">
                        <div className="md:px-10">
                            <AnimatePresence>
                                <Outlet />
                            </AnimatePresence>
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}

export default Dashboard;