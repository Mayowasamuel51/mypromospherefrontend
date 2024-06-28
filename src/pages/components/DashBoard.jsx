import { useState } from "react";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import DashBoardNav from "../../components/DashBoardNav";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import anon from "../../assests/images/anon.png";
import { FaShare, FaVideo } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { MdDynamicFeed } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { Outlet } from "react-router-dom";
import { toast } from "sonner";
import Clipboard from "react-clipboard.js";
import { useQuery } from "@tanstack/react-query";


const api = import.meta.env.VITE_HOME;
const controlsVariant = {
  initial: {
    opacity: 0,
    x: "-200%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    x: "-200%",
    transition: {
      when: "afterChildren",
    },
  },
};

const childVariant = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.3,
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

function Dashboard() {
    let location = useLocation();
  const { pathname } = useLocation();
  const { token } = useStateContext();
  const [hidden, setHidden] = useState(true);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 50) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  if (!token) return <Navigate to="/" />;
  function show() {
    toast.error("Promote and share your link with your friends, customers, and family", {
      duration: 3000,
    });
  }
  const [promote,setPromote]= useState(`${api}/profile/user/${token?.user_name}`)
  console.log(location.pathname)
  return (
    <>
      <DashBoardNav />
      <main className={`px-4 md:px-10 py-20 md:py-28`}>
        <section className="flex items-start md:gap-10 gap-4">
          <motion.article
            variants={controlsVariant}
            animate={hidden ? "animate" : "initial"}
            exit="exit"
            className="top-20 left-4 fixed md:hidden z-10 rounded-md bg-purple bg-opacity-90 md:rounded-none w-fit flex items-center md:items-start text-center md:text-start flex-col justify-between gap-20 py-3 px-2 md:px-6"
          >
            <motion.div className="flex flex-col md:gap-6 gap-5">
              <motion.div
                variants={childVariant}
                className="flex flex-col gap-2"
              >
                <img
                  src={token?.profileImage ?? anon}
                  // src={profile?.data?.data[0].profileImage ? profile?.data?.data[0].profileImage : anon}
                  alt={"profile-picture"}
                  className="w-[40px] aspect-square rounded-full object-cover object-center"
                />
                <h1 className="font-medium text-sm capitalize md:block hidden">
                {token ? `${token["user_name"]}` : "Anonymous"}
                </h1>
                <p className="text-xs text-slate-400 md:block hidden">
                {token ? `${token["user"]}` : "Anonymous"}
                </p>
              </motion.div>
              <motion.div className="flex items-center md:items-start flex-col md:gap-6 gap-4 justify-center">
                <motion.div variants={childVariant}>
                  <button className="flex items-center gap-2 duration-200 rounded-md cursor-pointer">
                    <FaShare size={20} className="text-white md:text-purple" />
                    <p className="text-center md:block hidden">share</p>
                  </button>
                </motion.div>
                <motion.div variants={childVariant}>
                  <NavLink
                    to={"profileEdit"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white md:text-purple"
                        : "text-white md:text-black"
                    }
                  >
                    <button className="flex items-center gap-2 duration-200rounded-md cursor-pointer">
                      <IoIosSettings size={25} className="" />
                      <p className="text-center md:block hidden">
                        Edit profile
                      </p>
                    </button>
                  </NavLink>
                </motion.div>
                <motion.div variants={childVariant}>
                  <NavLink
                    to={"personal-Info"}
                    className={({ isActive }) =>
                      isActive
                        ? "text-white md:text-purple"
                        : "text-white md:text-black"
                    }
                  >
                    <button className="flex items-center gap-2 duration-200 rounded-md cursor-pointer">
                      <FaEdit size={25} className="" />
                      <p className="text-center md:block hidden">
                        Personal Info
                      </p>
                    </button>
                  </NavLink>
                </motion.div>
              </motion.div>
              <motion.div className="flex items-center md:items-start flex-col md:gap-6 gap-4 justify-center gap-x-6">
                <motion.div variants={childVariant}>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive && pathname === "/dashboard"
                        ? "text-white md:text-purple"
                        : "text-white md:text-black"
                    }
                  >
                    <button className="flex items-center gap-2 duration-200">
                      <MdDynamicFeed size={25} />
                      <span className="md:block hidden">Post</span>
                    </button>
                  </NavLink>
                </motion.div>
                <motion.div variants={childVariant}>
                  <NavLink
                    to="/dashboard/video"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white md:text-purple"
                        : "text-white md:text-black"
                    }
                  >
                    <button className="flex items-center gap-2 duration-200">
                      <FaVideo size={25} />
                      <span className="md:block hidden">Video</span>
                    </button>
                  </NavLink>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div variants={childVariant}>
              <NavLink
                to={`postAd`}
                className={({ isActive }) =>
                  isActive
                    ? "text-white md:text-purple"
                    : "text-white md:text-black"
                }
              >
                <button className="cursor-pointer flex items-center gap-2">
                  <FiPlusSquare size={25} />
                  <p className="md:block hidden">Post an Ad</p>
                </button>
              </NavLink>
            </motion.div>
          </motion.article>

          <article className="hidden sticky top-28 bottom-0 rounded-lg bg-purple md:bg-white md:dark:bg-darkBg w-fit md:flex items-center md:items-start text-center md:text-start flex-col justify-between gap-20 py-3 md:py-6 px-10">
            <div className="flex flex-col md:gap-6 gap-4">
              <div className="flex flex-col gap-2">
                <img
                  src={token?.profileImage ?? anon}
                  alt={"profile-picture"}
                  className="w-[60px] aspect-square rounded-full object-cover object-center"
                />
                <h1 className="font-medium text-sm capitalize md:block hidden">
                  {token ? `${token["user_name"]}` : "Anonymous"}
                </h1>
                <p className="text-xs text-slate-400 md:block hidden">
                  {token ? `${token["user"]}` : "Anonymous"}
                </p>
              </div>
              <div className="flex items-center md:items-start flex-col md:gap-6 gap-4 justify-center">
                {/* <button className="flex items-center gap-2 duration-200 rounded-md cursor-pointer"> */}
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
                  <p className="text-center  dark:text-mainTextDark">
                  Promote link
                  </p>
                </Clipboard>

                {/* <Clipboard  className="flex items-center gap-2 duration-200 rounded-md cursor-pointer"
                    data-clipboard-text="you are my promote link "
                    button-title="I'm a tooltip"
                    onSuccess={show}
                  >
                    Share your promote Link
                  </Clipboard> */}
                {/* </button> */}
                <NavLink
                  to={"profileEdit"}
                  className={({ isActive }) =>
                    isActive
                      ? "md:text-purple"
                      : "text-white dark:text-mainTextDark md:text-black"
                  }
                >
                  <button className="flex items-center gap-2 duration-200rounded-md cursor-pointer">
                    <IoIosSettings size={20} className="" />
                    <p className="text-center ">Edit profile</p>
                  </button>
                </NavLink>
                <NavLink
                  to={"personal-Info"}
                  className={({ isActive }) =>
                    isActive
                      ? "md:text-purple"
                      : "text-white dark:text-mainTextDark md:text-black"
                  }
                >
                  <button className="flex items-center gap-2 duration-200 rounded-md cursor-pointer">
                    <FaEdit size={20} className="" />
                    <p className="text-center ">Personal Info</p>
                  </button>
                </NavLink>
              </div>
              <div className="flex items-center md:items-start flex-col md:gap-6 gap-4 justify-center gap-x-6">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive && pathname === "/dashboard"
                      ? "md:text-purple"
                      : "text-white dark:text-mainTextDark md:text-black"
                  }
                >
                  <button className="flex items-center gap-2 duration-200">
                    <MdDynamicFeed size={20} />
                    <span className="">Post</span>
                  </button>
                </NavLink>
                <NavLink
                  to="/dashboard/video"
                  className={({ isActive }) =>
                    isActive
                      ? "md:text-purple"
                      : "text-white dark:text-mainTextDark md:text-black"
                  }
                >
                  <button className="flex items-center gap-2 duration-200">
                    <FaVideo size={20} />
                    <span className="">Video</span>
                  </button>
                </NavLink>
              </div>
            </div>
            <NavLink
              to={`postAd`}
              className={({ isActive }) =>
                isActive
                  ? "md:text-purple"
                  : "text-white dark:text-mainTextDark md:text-black"
              }
            >
              <button className="cursor-pointer flex items-center gap-2">
                <FiPlusSquare size={20} />
                <p className="">Post an Ad</p>
              </button>
            </NavLink>
          </article>

          <article className="flex-1">
            <div className="md:px-10 w-full">
              <AnimatePresence>
                <Outlet />
              </AnimatePresence>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
