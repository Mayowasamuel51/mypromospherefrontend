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
    const {pathname} = useLocation();
    const { user_name } = useParams();
    const { data } = FetchUser(user_name);
    console.log(data)
    return (
        <>
            <Navbar profile="bg-transparent text-white dark:text-white dark:bg-transparent" />
            <section>
                <article>
                    <div className="w-full relative">
                        {data?.data?.data[0]?.backgroundimage ?
                            <img
                            src={data?.data?.data[0]?.backgroundimage}
                            alt=""
                            className="md:rounded-b-[60px] w-screen h-[300px] md:h-[400px] rounded-b-2xl object-center object-cover"
                        /> : 
                            <img src={bgLOGO} alt="background" className="md:rounded-b-[60px] w-screen h-[300px] md:h-[400px] rounded-b-2xl object-center object-cover"/>
                        }
                        <div className="absolute inset-0 bg-black opacity-50 md:rounded-b-[60px] rounded-b-2xl"></div>
                        {}
                        <img
                            src={data?.data?.data[0]?.profileImage ?? anon}
                            alt="profile picture"
                            className="w-[25%] inseti lg:w-[15%] aspect-square object-cover object-top rounded-full"
                        />
                    </div>
                </article>
                <div className="my-18">
                    <article className="text-center mt-12 md:mt-24">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-700 md:text-2xl text-lg capitalize">
                                {data?.data?.data[0]?.name || data?.data?.data[0]?.user_name || <Skeleton width={200}/>}
                            </h1>
                        </div>
                    </article>
                    <div className="my-2 flex flex-col gap-2 md:gap-4 md:px-2 lg:px-[2rem] large:px-[5rem]">
                        <article className="px-4 md:px-10 flex items-center gap-x-2">
                            <BsGlobe className="md:text-base text-sm" />
                            <p>Website </p>
                        </article>
                        <article className="px-4 md:px-10 flex items-center gap-x-2">
                            <BsTelephone className="md:text-base text-sm" />
                            <p>phone No</p>
                        </article>
                    </div>
                    <article className="">
                        <div className="flex items-center justify-center ">
                            <div className="flex gap-2 my-2">
                                <div className="flex justify-center items-center gap-x-4">
                                    <NavLink to={`/profile/user/${user_name}`} className={({isActive}) => isActive && pathname === `/profile/user/${user_name}` ? "bg-purple border-2 border-purple rounded-md z-10 flex md:px-4 md:py-2 px-3 py-2 text-white" : "text-black dark:text-white dark:border-2 dark:border-white flex gap-x-3 rounded-md md:px-4 md:py-2 px-3 py-2"}>
                                        <p> Posts</p>
                                    </NavLink>
                                </div>
                                <NavLink to={`/profile/user/${user_name}/videos`}  className={({isActive}) => isActive && pathname === `/profile/user/${user_name}/videos` ? "bg-purple border-2 border-purple rounded-md z-10 flex md:px-4 md:py-2 px-3 py-2 text-white" : "text-black dark:text-white dark:border-2 dark:border-white flex gap-x-3 border-r-0 rounded-md md:px-4 md:py-2 px-3 py-2"}>
                                    <p>Videos</p>
                                </NavLink>
                            </div>
                        </div>
                    </article>
                    <Outlet context={user_name} />
                </div>
            </section>
        </>
    )
}

export default ProfileHome;