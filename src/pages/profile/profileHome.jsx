import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import bgLOGO from "../../assests/images/mypromosphere-logo.png"
import anon from "../../assests/images/anon.png"
import { BsTelephone } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import FetchUser from "../../hooks/fetchUser";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const ProfileHome = () => {
    const { pathname } = useLocation();
    const { user_name } = useParams();
    const { data } = FetchUser(user_name);
    console.log(data)
    return (
        <>
            <Navbar profile="bg-transparent text-white dark:text-white dark:bg-transparent" />
            <section className="relative">
                <article>
                    <div className="w-full relative">
                        {data?.data?.data[0]?.backgroundimage ?
                            <img
                                src={data?.data?.data[0]?.backgroundimage}
                                alt=""
                                className="w-screen h-[300px] md:h-[400px] object-center object-cover"
                            /> :
                            <img src={bgLOGO} alt="background" className="w-screen h-[300px] md:h-[400px] object-center object-cover" />
                        }
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <img src={data?.data?.data[0]?.profileImage ?? anon} alt="profile picture" className="w-[20%] absolute left-8 md:left-32 top-[70%] lg:w-[15%] aspect-square object-cover object-top rounded-full border-4 border-white"/>
                    </div>
                </article>
                <div className="my-18">
                    <article className="mt-16 md:mt-24 md:px-32 px-8 flex flex-col gap-2">
                        <div className="">
                            <h1 className="font-700 md:text-2xl text-lg capitalize">
                                {data?.data?.data[0]?.name || data?.data?.data[0]?.user_name || "No Name"}
                            </h1>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <BsGlobe className="md:text-base text-sm" />
                            <p>Website </p>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <BsTelephone className="md:text-base text-sm" />
                            <p>phone No</p>
                        </div>
                    </article>
                    <article className="">
                        <div className="flex items-center justify-center ">
                            <div className="flex gap-2 my-2">
                                <div className="flex justify-center items-center gap-x-4">
                                    <NavLink to={`/profile/user/${user_name}`} className={({ isActive }) => isActive && pathname === `/profile/user/${user_name}` ? "bg-purple border-2 border-purple rounded-md z-10 flex md:px-4 md:py-2 px-3 py-2 text-white" : "text-black dark:text-white dark:border-2 dark:border-white flex gap-x-3 rounded-md md:px-4 md:py-2 px-3 py-2"}>
                                        <p> Posts</p>
                                    </NavLink>
                                </div>
                                <NavLink to={`/profile/user/${user_name}/videos`} className={({ isActive }) => isActive && pathname === `/profile/user/${user_name}/videos` ? "bg-purple border-2 border-purple rounded-md z-10 flex md:px-4 md:py-2 px-3 py-2 text-white" : "text-black dark:text-white dark:border-2 dark:border-white flex gap-x-3 border-r-0 rounded-md md:px-4 md:py-2 px-3 py-2"}>
                                    <p>Videos</p>
                                </NavLink>
                            </div>
                        </div>
                    </article>
                    <div className="relative md:px-24 px-6">
                        <Outlet context={user_name} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProfileHome;