import {useState} from 'react'
import photoHeader from "../../assests/images/photo-header-crop.png"
import { useParams } from "react-router-dom";
import { perfectWorksData } from "../../utils/data";
import image2 from "../../assests/images/image2.png";
import roundedImg from "../../assests/images/Ellipse 3.png"
import Navbar from "../PerfectWorks/components/Navbar"
import web from "../../assests/images/web.png"
import phone from "../../assests/images/phone.png"
import {BsTelephone} from "react-icons/bs"
import {BsGlobe} from "react-icons/bs"
import About from './components/About';
import WorksInfo from './components/worksInfo';
const Detail = () => {
    // getting each id 
      const { detailId } = useParams();
      const eachDetail = perfectWorksData.find(function (each) {
        return each.id == detailId;
      });

    // toggle 
        const [pending, setPending] = useState(0);
        const [toggle, setToggle] = useState(1);
        const updateToggle = (id) => {
          setToggle(id);
        };

    //  obj destructure
      const{info} = eachDetail
      const{job,name,about,roundPhoto,infoHeader, phone, website,workImages} = info
      const{workImage1,workImage2, workImage3, workImage4, workImage5, workImage6 } = workImages
  return (
    <>
      <section>
        {/* image-header  */}
       <Navbar/>
        <article>
          {/* {job} */}
          <div className="w-full relative">
            <img
              src={infoHeader}
              alt=""
              className="w-[100rem] md:w-[80rem] md:h-[22rem] large:w-full large:h-[25rem]  rounded-b-[3rem]"
            />
            <div class="absolute inset-0 bg-black opacity-50 rounded-b-[2.75rem]"></div>
            <div className=" xs:w-[4rem] xs:h-[4rem] bg-white rounded-full absolute inseti"></div>
            <img
              src={roundedImg}
              alt=""
              className="w-[25%] inseti lg:w-[15%]"
            />
          </div>
        </article>

        {/* info  */}
        <div>
          {/* name & job  */}
          <article className=" xs:mt-[4rem] md:mt-[7.8rem] lg:mt-[5.8rem] large:mt-[8rem] text-center">
            <div>
              <h1 className="font-700 text-[1.8rem] md:text-[2.4rem]">
                {name}
              </h1>
              <p className="text-[1.4rem]">{job}</p>
            </div>
            {/* <div className="">hello</div> */}
          </article>

          {/* web & phone  */}
          <div className="mt-12 md:px-2 lg:px-[2rem] large:px-[5rem]">
            {/* web */}
            <article className="px-4 md:px-10 flex items-center gap-x-2">
              <BsGlobe className="text-[1.9rem] md:text-[2.5rem]" />
              <p>{website}</p>
            </article>
            {/* phone */}
            <article className="mt-8 px-4 md:px-10 flex items-center gap-x-2">
              <BsTelephone className="text-[1.9rem] md:text-[2.5rem]" />
              <p>{phone}</p>
            </article>
          </div>

          {/* about and works  */}
          <article className="mt-12">
            <div className="flex items-center justify-center ">
              {/* agent-tabs  */}
              <div className="flex">
                {/* tab-btn  */}
                <div className="flex justify-center items-center gap-x-4">
                  <button
                    onClick={() => updateToggle(1)}
                    className={
                      toggle === 1
                        ? " xs:p-2 xs:pl-7 px-12 bg-[#3D217A] rounded-md z-10 text-[1.5rem] md:text-[1.5rem]  focus:outline-none flex gap-x-3"
                        : "xs:p-2 xs:pl-8 ml-8 flex gap-x-3 text-[1.5rem] border p-2 border-r-0 rounded-md"
                    }
                  >
                    {" "}
                    <p className={toggle === 1 ? "text-white" : "text-black"}>
                      Info
                    </p>
                    <div className="bg-indigo-500 w-[1.45rem] rounded-2xl "></div>
                  </button>
                </div>
                <button
                  onClick={() => updateToggle(2)}
                  className={
                    toggle === 2
                      ? "xs:p-2 xs:pr-7 xs:pl-8 p-4 text-[1.3rem] rounded-md text-white bg-[#3D217A] border-indigo-500 focus:outline-none"
                      : "xs:p-2 xs:pr-5 xs:pl-5 text-[1.5rem] border p-4 rounded-md ml-[-.4rem] z-0 "
                  }
                >
                  Works
                </button>
              </div>
              {/* end of agent tabs  */}
              <div className="bg-gray-300 h-[1px] mt-[0rem] md:max-w-3xl lg:max-w-5xl"></div>
            </div>

            {/* tabs-center  */}
            <div>
              {/* pending application  */}
              <div>
                {toggle === 1 ? <About about={about} name={name} /> : null}
              </div>

              {/* onboarded-agent  */}
              <div>
                {toggle === 2 ? (
                  <WorksInfo
                    workImage1={workImage1}
                    workImage2={workImage2}
                    workImage3={workImage3}
                    workImage4={workImage4}
                    workImage5={workImage5}
                    workImage6={workImage6}
                  />
                ) : null}
              </div>
              {/* end of tabs center  */}
            </div>
          </article>
          {/* end of works and jobs  */}
        </div>
      </section>
    </>
  );
}

export default Detail