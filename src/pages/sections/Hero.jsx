import {ArrowRightIcon} from '@heroicons/react/24/solid'

export default function Hero() {
  return (
    <section className=" flex flex-col justify-center h-screen bg-gradient-to-r from-pink to-purple2">
        <div className=" flex flex-col lg:flex-row lg:justify-between">
          <div className=" px-8 lg:px-16 lg:basis-1/2">
            <h1 className=" font-['Poppins'] text-5xl font-bold leading-10 lg:text-7xl lg:leading-[92px]">Find your desired services</h1>
            <p className=" font-['Poppins'] font-medium my-3 leading-5 lg:mt-7 lg:mb-8 lg:text-[26px] lg:leading-10">
              <span className=" tracking-[-1.8px]">MyPromoSphere</span> is here to revolutionize your service discovery experience.
            </p>
            <button className=' bg-purple py-3 px-4 rounded-md text-white flex items-center gap-x-5'>
              Get Started
              <ArrowRightIcon width={20} />
            </button>
          </div>
          <div>
            {/* this is where the image will be when it's ready */}
          </div>
        </div>
      </section>
  )
}
