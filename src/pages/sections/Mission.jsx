import mission from "../../assests/images/mission.png";
import missionTwo from "../../assests/images/mission2.png";
export default function Mission() {
  return (
    <section id="about" className=" max-w-screen-exl px-8 py-20 bigLg:px-16">
      <div className=" flex flex-col items-center gap-y-10 bigLg:flex-row bigLg:gap-x-40 exl:gap-x-52">
        <div className=" flex flex-col gap-y-3 bigLg:basis-1/2">
          <h2 className=" font-['Poppins'] text-3xl font-semibold bigLg:text-5xl">
            Our Mission
          </h2>
          <p className=" font-['Poppins'] text-sm leading-6 bigLg:text-base bigLg:leading-8">
            We are here to simplify your life and make your service seeking
            journey an absolute breeze. With our platform, you can unlock a
            world of possibilities and find the perfect service providers
            tailored to your unique needs.
          </p>
        </div>
        <div>
          {/* the different images will be here when they are ready */}
          <img
            src={mission}
            alt=""
            className=" md:relative md:right-20 md:top-5 rounded-full w-[200px] h-[200px] object-cover"
          />
          <img
            src={missionTwo}
            alt=""
            className=" hidden md:block md:relative md:left-20 md:bottom-5 rounded-full w-[200px] h-[200px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
