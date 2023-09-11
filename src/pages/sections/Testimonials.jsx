// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// assests
import testimonialOne from "../../assests/SVGs/testimonialOne.svg";
import testimonialTwo from "../../assests/SVGs/testimonialTwo.svg";

export default function Testimonials() {
  const testimonies = [
    {
      id: 1,
      img: testimonialOne,
      name: "Cameron Williamson",
      location: "South Africa",
      testimony:
        "M&E made my relocation stress-free! I needed a moving company on short notice, and the platform quickly helped me find a reputable one nearby. The movers were efficient and took great care of my belongings. Highly recommended!",
    },
    {
      id: 2,
      img: testimonialTwo,
      name: "Brooklyn Simmons",
      location: "Iceland",
      testimony:
        "I was hesitant about using a service finder website, but this one exceeded my expectations! I needed a reliable tutor for my child, and the platform helped me find an experienced tutor who specialized in the subject. My child’s grades have improved significantly since working with the tutor. Thank you, M&E!",
    },
  ];
  return (
    <section className=" px-8 pb-16 bigLg:px-16 bigLg:pb-20">
      <h3 className=" text-2xl font-medium text-center mb-5">Testimonials</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonies.map(({ id, img, name, location, testimony }) => {
          return (
            <SwiperSlide key={id}>
              <div className=" m-10 flex items-start gap-x-3 max-w-screen-sm mx-auto border-2 border-purple rounded-lg p-5">
                {/* image container */}
                <img src={img} alt="" className=" w-16" />
                {/* details */}
                <div className="">
                  <h6 className=" text-sm font-medium">{name}</h6>
                  <p className=" text-xs mb-3">{location}</p>
                  <p className=" text-xs font-light">{testimony}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
