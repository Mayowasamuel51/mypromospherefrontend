// assests
import testimonialOne from "../../assests/SVGs/testimonialOne.svg";
import testimonialTwo from "../../assests/SVGs/testimonialTwo.svg";

export default function Testimonials() {
  return (
    <section className=" px-8 pb-16 bigLg:px-16 bigLg:pb-20">
      <h3 className=" text-2xl font-medium text-center mb-5">Testimonials</h3>
      <div className=" flex items-start gap-x-3 max-w-screen-sm mx-auto border-2 border-purple rounded-lg p-5">
        {/* image container */}
          <img src={testimonialOne} alt="" className=" w-16" />
        {/* details */}
        <div className="">
          <h6 className=" text-sm font-medium">Brooklyn Simmons</h6>
          <p className=" text-xs mb-3">Iceland</p>
          <p className=" text-xs font-light">
            “I was hesitant about using a service finder website, but this one
            exceeded my expectations! I needed a reliable tutor for my child,
            and the platform helped me find an experienced tutor who specialized
            in the subject. My child’s grades have improved significantly since
            working with the tutor. Thank you, M&E!”
          </p>
        </div>
      </div>
    </section>
  );
}
