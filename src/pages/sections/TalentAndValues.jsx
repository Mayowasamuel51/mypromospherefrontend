// assests
import diamond from "../../assests/icons/diamond.svg";
// components
import BestTalents from "../components/BestTalents";
import MoreTalents from "../components/MoreTalents";

export default function TalentAndValues() {
  return (
    <section className=" bg-offwhite px-8 py-20 flex flex-col items-center gap-y-10 bigLg:px-16 exl:flex-row exl:gap-x-10">
      <div className=" bg-darkpink/20 p-5 flex flex-col items-center exl:basis-2/3">
        <h5 className=" text-lg">
          Explore the best of{" "}
          <span className=" bg-gradient-to-r from-blue to-rose-500 bg-clip-text fill-transparent text-xl font-semibold">
            M&E
          </span>
        </h5>
        <BestTalents />

        <h6 className=" mt-10 font-medium text-sm">Discover more</h6>
        <MoreTalents />
      </div>

      <div className=" flex flex-col gap-y-10 exl:basis-1/3">
        <div className=" flex flex-col gap-y-2">
          <div className=" flex items-center gap-x-2">
            <img
              src={diamond}
              alt="diamond"
              className=" bg-purple p-1 rounded-md w-8"
            />
            <h3 className=" font-medium text-2xl">Our Value To Help You</h3>
          </div>
          <p className=" text-sm">
            We always want to provide the best value for you and make your
            search for services easy.
          </p>
        </div>
        <div className=" flex flex-col gap-y-1">
          <h4 className=" font-medium text-xl">Discover</h4>
          <p className=" text-xs px-3">
            M&E opens the doors to a vast network of services providers across
            various industries. Whether you need home improvement services
            beauty and wellness experts, our platform offers a comprehensive
            range of services.
          </p>
        </div>
        <div>
          <h4 className=" font-medium text-xl">Experience</h4>
          <p className=" text-xs px-3">
            Refine your search and discover the perfect service providers for
            your specific requirements with M&E”s advanced search flters.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
