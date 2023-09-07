import {ArrowRightIcon} from '@heroicons/react/24/solid'
import HeroImage from '../../assests/images/heroImage.svg'

export default function Hero() {
  return (
    <section className=" pt-16 bg-gradient-to-r from-pink to-purple2 lg:pt-28">
        <div className=" flex flex-col items-center gap-y-10 lg:flex-row lg:justify-between">
          <div className=" px-8 lg:px-16 lg:basis-1/2">
            <h1 className=" font-['Poppins'] text-5xl font-bold leading-10 lg:text-7xl lg:leading-[92px]">Find your desired services</h1>
            <p className=" font-['Poppins'] font-medium my-7 leading-5 lg:text-[26px] lg:leading-10">
              <span className=" tracking-[-1.8px]">MyPromoSphere</span> is here to revolutionize your service discovery experience.
            </p>
            <button className=' bg-purple py-3 px-4 rounded-md text-white flex items-center gap-x-5'>
              Get Started
              <ArrowRightIcon width={20} />
            </button>
          </div>
          <div className=' lg:basis-1/2'>
            {/* this is where the image will be when it's ready */}
            <img src={HeroImage} alt="" className='' />
          </div>
        </div>
      </section>
  )
}
