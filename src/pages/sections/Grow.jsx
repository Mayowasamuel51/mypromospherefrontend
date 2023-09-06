import sampleImage from '../../assests/images/barber.png'

export default function Grow() {
  return (
    <section className=" px-8 pb-16 flex flex-col gap-y-10 lg:px-16 lg:pb-20 lg:flex-row lg:items-center lg:gap-x-16">
      <div className=" flex flex-col gap-y-8 lg:basis-1/2">
        <div className=" flex flex-col gap-y-1">
          <h3 className=" text-2xl font-medium">Grow your Business</h3>
          <p className=" text-sm">
            Sign up now and get the opportunity to create and post your works
            and services, get clients and broaden your brand
          </p>
        </div>
        <div className=" flex flex-col gap-y-1">
          <h3 className=" text-2xl font-medium">Connect</h3>
          <p className=" text-sm">
            M&E makes it easy to connect with service providers. from requesting
            quotes to scheduling appointments, our platform provides a seamless
            experience.
          </p>
        </div>
      </div>
      <div className=' lg:basis-1/2'>
        <img src={sampleImage} alt="a sample" className=' lg:w-full lg:h-96' />
      </div>
    </section>
  );
}
