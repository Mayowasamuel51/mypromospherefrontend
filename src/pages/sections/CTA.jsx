// assests
import diamond from "../../assests/icons/diamond.svg";

export default function CTA() {
  return (
    <section className=" px-8 py-8 lg:px-16 bg-purple flex flex-col justify-center items-center">
      <div className=" flex flex-col items-center gap-y-3 max-w-[300px]">
        <img src={diamond} alt="" />
        <h5 className=" text-xl text-white font-extrabold">
          Get Started with <span>M&E</span>
        </h5>
        <p className=" text-center text-white/80 text-sm">
          Explore, discover services & skills for your desired work needs easily
        </p>
        <button className=" bg-mistyRose px-8 py-3 rounded-2xl">Get Started</button>
      </div>
    </section>
  );
}
