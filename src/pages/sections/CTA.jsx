import { Link } from "react-router-dom";
import diamond from "../../assests/icons/diamond.svg";

export default function CTA() {
  return (
    <section className="px-8 py-8 lg:py-16 bigLg:px-16 bg-purple flex flex-col justify-center items-center">
      <div className=" flex flex-col items-center gap-y-3 max-w-[300px] bigLg:max-w-[400px]">
        <img src={diamond} alt="" />
        <h5 className=" text-xl text-center text-white font-extrabold">
          Get Started with <span className=" tracking-[-1.5px]">MyPromoSphere</span>
        </h5>
        <p className=" text-center text-white/80 text-sm">
          Explore, discover services & skills for your desired work needs easily
        </p>
        <Link to="/">
          <button className=" bg-mistyRose px-8 py-3 rounded-2xl">Get Started</button>
        </Link>
      </div>
    </section>
  );
}
