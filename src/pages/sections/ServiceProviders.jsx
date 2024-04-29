import image1 from "../../assests/images/Rectangle 487.png";
import image2 from "../../assests/images/Rectangle 488.png";

import male_unknown from "../../assests/images/male-unknown.png"
import female_unknown from "../../assests/images/female-unknown.jpg"


const ServiceProviders = () => {
  const ProvidersArr = [
    {
      providerName: "Brenda Uthman",
      providerJob: "Interior Decorator",
      providerImg: image1,
    },
    {
      providerName: "Amanda Stone",
      providerJob: "Designer",
      providerImg: image2,
    },
  ];
  return (
    <section className="bg-[#EC6A872B] py-10  md:py-20 ">
      <div className=" max-w-[88rem]   mx-auto ">
        <div className="heading text-center">
          <h1 className="text-base md:text-xl font-semibold">
            Top service Providers of the Week
          </h1>
        </div>
        <div className="prov-carousel mt-10 mx-auto">
          <div className="flex flex-wrap justify-evenly px-5 items-center">
            <div>
              <div  className="">
              <img
                src={female_unknown}
                className="rounded-xl"
                alt="Topm Service Provider Of the Week"
              />
              </div>
              <div className="flex flex-col gap-2 mt-3 items-center justify-center">
                <h2 className="text-base md:text-lg font-semibold">
                  Your Name Could Be Here
                </h2>
                <h3 className="text-sm md:text-base">
                  Your Profession Could Be Here
                </h3>
              </div>
            </div>
            <div>
              <div  className="">
              <img
                src={female_unknown}
                className="rounded-xl"
                alt="Top Service Provider of the week"
              />
              </div>
              <div className="flex flex-col gap-1 mt-3 items-center justify-center">
                <h2 className="text-base md:text-lg font-semibold">
                  Your Name Could Be Here
                </h2>
                <h3 className="text-sm md:text-base">
                  Your Profession Could Be Here
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders;
