import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import photoHeader from "../../assests/images/photo-header-crop.png"
import anon from "../../assests/images/anon.png"
import { BsTelephone } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
// import { useStateContext } from "../../contexts/ContextProvider";
import FetchUser from "../../hooks/fetchUser";
import { NavLink, Outlet, useLocation } from "react-router-dom";


const ProfileHome = () => {

    const {pathname} = useLocation()
    const { id } = useParams()
    const { data } = FetchUser(id)
    console.log(data?.data)
    return (
        <>
            <Navbar />
            <section>
                <article>
                    <div className="w-full relative">
                        <img
                            src={data?.data[0]?.backgroundimage ?? photoHeader}
                            alt=""
                            className="md:rounded-b-[60px] rounded-b-2xl object-center"
                        />
                        <div className="absolute inset-0 bg-black opacity-50 md:rounded-b-[60px] rounded-b-2xl"></div>
                        <img
                            src={data?.data[0]?.profileImage ?? anon}
                            alt=""
                            className="w-[25%] inseti lg:w-[15%] aspect-square object-cover object-top rounded-full"
                        />
                    </div>
                </article>
                <div className="my-14">
                    <article className="text-center md:mt-20">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-700 md:text-2xl text-lg capitalize">
                                {data?.data[0]?.name}
                            </h1>
                            <p className="md:text-lg text-base">JOB</p>
                        </div>
                    </article>
                    <div className="my-2 flex flex-col gap-4 md:gap-6 md:px-2 lg:px-[2rem] large:px-[5rem]">
                        {/* web */}
                        <article className="px-4 md:px-10 flex items-center gap-x-2">
                            <BsGlobe className="md:text-base text-sm" />
                            <p>Website</p>
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
                                    <NavLink to={`/profile/user/${id}`} className={({isActive}) => isActive && pathname === `/profile/user/${id}` ? "bg-[#3D217A] rounded-md z-10 focus:outline-none flex md:px-4 md:py-2 px-3 py-2 text-white" : "text-black flex gap-x-3 border border-r-0 rounded-md md:px-4 md:py-2 px-3 py-2"}>
                                        <p> Posts</p>
                                    </NavLink>
                                </div>
                                <NavLink to={`/profile/user/${id}/videos`}  className={({isActive}) => isActive && pathname === `/profile/user/${id}/videos` ? "bg-[#3D217A] rounded-md z-10 focus:outline-none flex md:px-4 md:py-2 px-3 py-2 text-white" : "text-black flex gap-x-3 border border-r-0 rounded-md md:px-4 md:py-2 px-3 py-2"}>
                                    <p>Videos</p>
                                </NavLink>
                            </div>
                        </div>
                    </article>
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default ProfileHome