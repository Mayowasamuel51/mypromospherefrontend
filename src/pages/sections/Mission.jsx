export default function Mission() {
  return (
    <section className=" max-w-screen-lg mx-auto px-8 py-20 bigLg:px-0">
      <div className=" flex flex-col items-center bigLg:flex-row bigLg:justify-between">
        <div className=" flex flex-col gap-y-3 bigLg:basis-1/2">
          <h2 className=" font-['Poppins'] text-3xl font-semibold bigLg:text-5xl">
            Our Mission
          </h2>
          <p className=" font-['Poppins'] text-sm leading-6 bigLg:text-lg bigLg:leading-8">
            We are here to simplify your life and make your service seeking
            journey an absolute breeze. With our platform, you can unlock a
            world of possibilities and find the perfect service providers
            tailored to your unique needs.
          </p>
        </div>
        <div>{/* the different images will be here when they are ready */}</div>
      </div>
    </section>
  );
}
