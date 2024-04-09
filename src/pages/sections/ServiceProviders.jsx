import image1 from "../../assests/images/Rectangle 487.png";
import image2 from "../../assests/images/Rectangle 488.png";
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
          <div className="flex flex-wrap justify-between gap-4 px-5 items-center">
            {ProvidersArr.map((provider, index) => {
              return (
                <div key={index}>
                  <div  className="">
                  <img
                    src={provider.providerImg}
                   
                    alt=""
                  />
                  </div>
                  <div className="flex flex-col gap-1 mt-3 items-center justify-center">
                    <h2 className="text-base md:text-lg font-semibold">
                      {provider.providerName}
                    </h2>
                    <h3 className="text-sm md:text-base">
                      {provider.providerJob}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders;
