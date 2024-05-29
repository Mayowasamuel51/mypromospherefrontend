// assests
import diamond from "../../assests/icons/diamond.svg";
// components
import BestTalents from "../components/BestTalents";
import MoreTalents from "../components/MoreTalents";

export default function TalentAndValues() {
  return (
    <section className="bg-[#F6EFEF] px-4 py-16 flex flex-col items-center gap-y-10 lg:px-10 exl:flex-row exl:gap-x-10">
      <div className=" bg-[#F3E4E6] p-5 w-full flex flex-col exl:basis-1/2">
        <h5 className="text-center my-2 text-base md:text-xl">
          Explore the best of{" "}
          <span className=" tracking-[-1.8px] font-bold">MyPromoSphere</span>
        </h5>
        <BestTalents />
        <h6 className="text-center my-4 font-medium text-sm md:text-lg">Discover more</h6>
        <MoreTalents />
      </div>

      <div className=" flex flex-col gap-y-2 md:gap-y-6 exl:basis-1/2">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <img
              src={diamond}
              alt="diamond"
              className=" bg-purple p-1 rounded-md w-8"
            />
            <h3 className="font-semibold text-xl md:text-3xl">Our Value To Help You</h3>
          </div>
          <p className="text-xs">
            We always want to provide the best value for you and make your
            search for services easy.
          </p>
        </div>
        <div className=" flex flex-col gap-y-2">
          <h4 className="font-semibold text-xl md:text-2xl">Discover</h4>
          <p className="text-xs">
            M&E opens the doors to a vast network of services providers across
            various industries. Whether you need home improvement services
            beauty and wellness experts, our platform offers a comprehensive
            range of services.
          </p>
        </div>
        <div  className=" flex flex-col gap-y-2">
          <h4 className="font-semibold text-xl md:text-2xl">Experience</h4>
          <p className="text-xs">
            Refine your search and discover the perfect service providers for
            your specific requirements with M&E”s advanced search flters.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
