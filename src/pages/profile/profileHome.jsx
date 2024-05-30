import Navbar from "../../components/Navbar";
import { IoFilterSharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
// import Feeds from "./components/feeds";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useState } from 'react'
import photoHeader from "../../assests/images/photo-header-crop.png"
import { perfectWorksData } from "../../utils/data";
import image2 from "../../assests/images/image2.png";
import roundedImg from "../../assests/images/Ellipse 3.png"
import web from "../../assests/images/web.png"
import phone from "../../assests/images/phone.png"
import anon from "../../assests/images/anon.png"
import { BsTelephone } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { useStateContext } from "../../contexts/ContextProvider";


const ProfileHome = () => {
    // getting each id 
    const { token } = useStateContext()
    const { cusName } = useParams();
    const eachDetail = perfectWorksData.find(function (each) {
        return each.id == 4;
    });
    const [pending, setPending] = useState(0);
    const [toggle, setToggle] = useState(1);
    const updateToggle = (id) => {
        setToggle(id);
    };
    //  obj destructure
    const { info } = eachDetail
    const { job, name, about, roundPhoto, infoHeader, phone, website, workImages } = info
    const { workImage1, workImage2, workImage3, workImage4, workImage5, workImage6 } = workImages
    return (
        <>
            <Navbar />
            <section>
                <article>
                    <div className="w-full relative">
                        <img
                            src={token?.profileImage ?? photoHeader}
                            alt=""
                            className="md:rounded-b-[60px] rounded-b-2xl object-center"
                        />
                        <div className="absolute inset-0 bg-black opacity-50 md:rounded-b-[60px] rounded-b-2xl"></div>
                        <img
                            src={token?.profileImage ?? anon}
                            alt=""
                            className="w-[25%] inseti lg:w-[15%] rounded-full"
                        />
                    </div>
                </article>

                {/* info  */}
                <div className="my-10">
                    <article className="text-center md:mt-20">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-700 md:text-2xl text-lg capitalize">
                                {cusName}
                            </h1>
                            <p className="md:text-lg text-base">{job}</p>
                        </div>
                    </article>
                    <div className="my-2 flex flex-col gap-4 md:gap-6 md:px-2 lg:px-[2rem] large:px-[5rem]">
                        {/* web */}
                        <article className="px-4 md:px-10 flex items-center gap-x-2">
                            <BsGlobe className="md:text-base text-sm" />
                            <p>{website}</p>
                        </article>
                        <article className="px-4 md:px-10 flex items-center gap-x-2">
                            <BsTelephone className="md:text-base text-sm" />
                            <p>{phone}</p>
                        </article>
                    </div>

                    {/* about and works  */}
                    <article className="">
                        <div className="flex items-center justify-center ">
                            {/* agent-tabs  */}
                            <div className="flex gap-2 my-2">
                                <div className="flex justify-center items-center gap-x-4">
                                    <button
                                        onClick={() => updateToggle(1)}
                                        className={
                                            toggle === 1
                                                ? "bg-[#3D217A] rounded-md z-10 focus:outline-none flex md:px-4 md:py-2 px-3 py-2"
                                                : "flex gap-x-3 border border-r-0 rounded-md md:px-4 md:py-2 px-3 py-2"
                                        }
                                    >
                                        {" "}
                                        <p className={toggle === 1 ? "text-white" : "text-black"}>
                                            Info
                                        </p>
                                    </button>
                                </div>
                                <button
                                    onClick={() => updateToggle(2)}
                                    className={
                                        toggle === 2
                                            ? "rounded-md text-white bg-[#3D217A] border-indigo-500 focus:outline-none  md:px-4 md:py-2 px-3 py-2"
                                            : "border rounded-md z-0  md:px-4 md:py-2 px-3 py-2"
                                    }
                                >
                                    Works
                                </button>
                            </div>
                            {/* end of agent tabs  */}
                        </div>

                        {/* tabs-center  */}
                        <div>
                            {/* pending application  */}
                            <div>
                                {/* {toggle === 1 ? <About about={about} name={name} /> : null} */}
                            </div>

                            {/* onboarded-agent  */}
                            <div>
                                {/* {toggle === 2 ? (
                  <WorksInfo
                    workImage1={workImage1}
                    workImage2={workImage2}
                    workImage3={workImage3}
                    workImage4={workImage4}
                    workImage5={workImage5}
                    workImage6={workImage6}
                  />
                ) : null} */}
                            </div>
                            {/* end of tabs center  */}
                        </div>
                    </article>
                    {/* end of works and jobs  */}
                </div>
            </section>
        </>
    )
}

export default ProfileHome