import sampleImage from '../../assests/images/grow.jpeg'

export default function Grow() {
  return (
    <section className=" px-8 pb-16 flex flex-col gap-y-10 bigLg:px-16 bigLg:pb-20 bigLg:flex-row bigLg:items-center bigLg:gap-x-16">
      <div className=" flex flex-col gap-y-8 bigLg:basis-1/2">
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
          <span className=" tracking-[-1.8px]">MyPromoSphere</span> makes it easy to connect with service providers. from requesting
            quotes to scheduling appointments, our platform provides a seamless
            experience.
          </p>
        </div>
      </div>
      <div className=' bigLg:basis-1/2'>
        <img src={sampleImage} alt="a sample" className=' bigLg:w-full bigLg:h-96 bigLg:object-cover' />
      </div>
    </section>
  );
}
