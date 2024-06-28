import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import bgLOGO from "../../assests/images/mypromosphere-logo.png";
import anon from "../../assests/images/anon.png";
import { BsTelephone } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import FetchUser from "../../hooks/fetchUser";
import { FaShare } from "react-icons/fa";
import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css'
import { toast } from "sonner";
import Clipboard from "react-clipboard.js";
import { useStateContext } from "../../contexts/ContextProvider";

const api = import.meta.env.VITE_HOME;

const ProfileHome = () => {
  let location = useLocation();
  const { token } = useStateContext();
  const { pathname } = useLocation();
  const { user_name } = useParams();
  const { data } = FetchUser(user_name);
  console.log(data);
  function show() {
    toast.error("Promote and share link with your friends, customers, and family ", {
      duration: 3000,
    });
  }
  const [promote] = useState(
    `${api}/profile/user${location.pathname.slice(13)}`
  );
  console.log(location.pathname.slice(14));
  return (
    <>
      <Navbar profile="bg-transparent text-white dark:text-white dark:bg-transparent" />
      <section className="relative">
        <article>
          <div className="w-full relative">
            {data?.data?.data[0]?.backgroundimage ? (
              <img
                src={data?.data?.data[0]?.backgroundimage}
                alt=""
                className="w-screen h-[300px] md:h-[400px] object-center object-cover"
              />
            ) : (
              <img
                src={bgLOGO}
                alt="background"
                className="w-screen h-[300px] md:h-[400px] object-center object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <img
              src={data?.data?.data[0]?.profileImage ?? anon}
              alt="profile picture"
              className="w-[20%] absolute left-8 md:left-32 top-[70%] lg:w-[15%] aspect-square object-cover object-top rounded-full border-4 border-white"
            />
          </div>
        </article>
        <div className="my-18">
          <article className="mt-16 md:mt-24 md:px-32 px-8 flex justify-between md:flex-row flex-col">
            <div className="flex flex-col gap-2">
              <div className="">
                <h1 className="font-700 md:text-2xl text text-lg capitalize dark:text-mainTextDark">
                  {data?.data?.data[0]?.name ||
                    data?.data?.data[0]?.user_name ||
                    user_name ||
                    "No Name"}
                </h1>

                <div className="flex items-center md:items-start flex-col md:gap-6 gap-4 justify-center">
                  <Clipboard
                    className="flex items-center gap-2 duration-200 rounded-md cursor-pointer"
                    data-clipboard-text={promote}
                    button-title="Promote you service with your link"
                    onSuccess={show}
                  >
                    <FaShare
                      size={20}
                      className="text-black dark:text-mainTextDark"
                    />
                    <p className="text-center  dark:text-mainTextDark font-bold">
                      Copy Promote link
                    </p>
                  </Clipboard>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <BsGlobe className="md:text-base text-sm" />
                <p className="dark:text-smallTextDark">
                  {data?.data?.data[0]?.websiteName ?? "No website name"}
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <BsTelephone className="md:text-base text-sm" />
                <p className="dark:text-smallTextDark">
                  {data?.data?.data[0]?.user_phone ??
                    "User has not added their whatsApp Number"}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-mainText-bg">About me</h1>
              <p className="rounded-md p-2  dark:bg-darkBg text-smallTextDark">
                {data?.data?.data[0]?.aboutMe ?? "No about me"}
              </p>
            </div>
          </article>
          <article className="">
            <div className="w-[80%] mx-auto">
              <div className="profile-links flex items-center border-b border-black dark:border-grey my-4">
                <div className="flex-1 text-center">
                  <NavLink
                    to={`/profile/user/${user_name}`}
                    className={({ isActive }) =>
                      isActive && pathname === `/profile/user/${user_name}`
                        ? "text-purple py-3 block after"
                        : "text-black dark:text-mainTextDark py-3 block"
                    }
                  >
                    <p>Posts</p>
                  </NavLink>
                </div>
                <div className="flex-1 text-center">
                  <NavLink
                    to={`/profile/user/${user_name}/videos`}
                    className={({ isActive }) =>
                      isActive &&
                      pathname === `/profile/user/${user_name}/videos`
                        ? "text-purple py-3 block after"
                        : "text-black dark:text-mainTextDark py-3 block"
                    }
                  >
                    <p>Videos</p>
                  </NavLink>
                </div>
              </div>
            </div>
          </article>
          <div className="relative md:px-24 px-6">
            <Outlet context={user_name} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileHome;
