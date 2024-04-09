import React, {useState} from "react";
import image1 from "../../assests/images/Rectangle 479.png";
import image2 from "../../assests/images/Rectangle 480.png";
import image3 from "../../assests/images/Rectangle 478.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useStateContext } from "../../contexts/ContextProvider";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './pagination.css'

const Services = () => {
  const { FullScreen } = useStateContext()
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
    {
      serviceName: "Make-up Artist",
      serviceImg: image3,
    },
  ];
  return (
    <section className="services py-10 lg:py-20 px-4 lg:px-10 overflow-x-hidden">
      <div className="">
        <div className="services-heading">
          <h1 className="text-base lg:text-5xl font-semibold lg:my-10">
            Trending Services
          </h1>
        </div>
        <div className="py-10">
          <Splide aria-label="services" options={{
            type: 'loop',
            perPage: FullScreen ? 3 : 1,
            perMove: FullScreen ? 3 : 1,
            gap: "20px",
            focus: 1,
            autoplay: true,
            pagination: true,
            arrows: true,
            interval: 4000,
            speed: 2000,
            drag : 'free',
            snap : true,
          }}
          >
          {
            ServicesArr.map((service) => {
            return (
              <SplideSlide key={service} className="">
                <div className="group relative">
                  <img src={service.serviceImg} alt="" className="w-full" />
                  <div className="bg-[#000000A6] absolute inset-0 flex justify-center items-center invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300">
                    <a href="" className="text-white font-semibold">
                      See More
                    </a>
                  </div>
                </div>
                <h3 className="mt-5 text-sm md:text-lg font-semibold">
                  {service.serviceName}
                </h3>
              </SplideSlide>
            );
            })
          }
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Services;
