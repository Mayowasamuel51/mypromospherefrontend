import React from "react";
import image1 from "../../assests/images/rectangle 479.png";
import image2 from "../../assests/images/rectangle 480.png";
import image3 from "../../assests/images/rectangle 478.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Services = () => {
  const ServicesArr = [
    {
      serviceName: "Make-up Artist",
      serviceImg: image3,
    },
    {
      serviceName: "Nail Technician",
      serviceImg: image1,
    },
    {
      serviceName: "Wig Hubs",
      serviceImg: image2,
    },
    {
      serviceName: "Wig Hubs",
      serviceImg: image2,
    },
  ];
  return (
    <section className="services py-10  px-5 overflow-x-hidden">
      <div className="container max-w-[88rem]   mx-auto">
        <div className="services-heading">
          <h1 className="text-[1.7rem] md:text-[2.4rem] font-semibold">
            Trending Services
          </h1>
        </div>
        <div className="services-carousel relative">
          <div className="services-flex max-w-[88rem] mx-auto flex gap-5 mt-5  overflow-x-scroll scroll-container">
            <div className="arr-left w-14 md:w-16 h-14 md:h-16 rounded-full flex items-center justify-center absolute left-[-2rem] z-50 cursor-pointer top-[40%] bg-[#f8f4f4] text-black">
              <FaAngleLeft className="text-[1.8rem] md:text-[2rem]" />
            </div>
            <div className="arr-left w-14 md:w-16 h-14 md:h-16  rounded-full flex items-center justify-center absolute right-[-2rem] z-50 cursor-pointer top-[40%] bg-[#f8f4f4] text-black">
              <FaAngleRight className="text-[1.8rem] md:text-[2rem]" />
            </div>
            {ServicesArr.map((service) => {
              return (
                <div className="flex  items-center min-w-[460px] justify-center flex-col cursor-pointer">
                  <div className="hover-img  relative">
                    <img src={service.serviceImg} alt="" />
                    <div className="rectangle-hover  bg-[#000000A6] hidden items-center justify-center absolute top-0 bottom-0 right-0 left-0">
                      <a href="" className="text-white font-semibold">
                        See More
                      </a>
                    </div>
                  </div>
                  <h3 className="mt-5 text-sm md:text-lg font-semibold">
                    {service.serviceName}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
