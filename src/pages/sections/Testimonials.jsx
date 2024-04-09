import { useStateContext } from "../../contexts/ContextProvider";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './pagination.css'

// assests
import testimonialOne from "../../assests/SVGs/testimonialOne.svg";
import testimonialTwo from "../../assests/SVGs/testimonialTwo.svg";

export default function Testimonials() {
  const { FullScreen } = useStateContext()
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
    <section className="testimonial px-8 pb-16 bigLg:px-16 bigLg:pb-20">
      <h3 className=" text-2xl font-medium text-center mb-5 md:text-3xl">
        Testimonials
      </h3>
      <div className=" bigLg:hidden relative">
        <Splide aria-label="testimonials" options={{
          type: 'loop',
          perPage: 1,
          perMove: 1,
          gap: "20px",
          focus: 1,
          autoplay: true,
          pagination: true,
          arrows: true,
          interval: 4000,
          speed: 2000,
          drag : 'free',
          snap : true
        }}
          className=""
        >
          {testimonies.map(({ id, img, name, location, testimony }) => {
            return (
              <SplideSlide key={id}>
                <div className=" m-10 flex items-start gap-x-3 max-w-screen-sm rounded-lg p-5">
                  <img src={img} alt="" className=" w-16" />
                  <div className="">
                    <h6 className=" text-sm font-medium">{name}</h6>
                    <p className=" text-xs mb-3">{location}</p>
                    <p className=" text-xs font-light">{testimony}</p>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <div className="hidden bigLg:block relative">
        <Splide options={{
          type: 'loop',
          perPage: 2,
          perMove: 1,
          gap: "20px",
          focus: 1,
          autoplay: true,
          pagination: true,
          arrows: true,
          interval: 4000,
          speed: 2000,
          drag : 'free',
          snap : true
        }}>
          {testimonies.map(({ id, img, name, location, testimony }) => {
            return (
              <SplideSlide key={id}>
                <div className=" m-10 flex items-center gap-x-3 max-w-screen-sm rounded-lg p-5 group h-[190px] hover:scale-105 duration-300">
                  <img src={img} alt="" className=" w-16" />
                  <div className="">
                    <h6 className="text-sm font-medium">{name}</h6>
                    <p className="text-xs mb-3">{location}</p>
                    <p className="text-xs font-light line-clamp-4 group-hover:line-clamp-none duration-300 group-hover:cursor-pointer">{testimony}</p>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
}
