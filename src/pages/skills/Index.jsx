import Star from '../../assests/icons/Star.svg';

const Photography = () => {
  return (
    <main>
      <section className=" px-2 md:px-8 bigLg:px-16">
        <h1 className=" text-2xl font-medium md:text-3xl">
          Hire the best Photographers
        </h1>
        <p className=" mt-1 mb-3 text-xs font-medium md:text-base">
          Check out MyPromosphere photographers with the skill you need for your
          next job.
        </p>
        <button className=" bg-purple text-white rounded-lg py-2 px-6 text-sm font-semibold md:text-base">
            Hire talents
        </button>
      </section>

      <section className=" px-2 md:px-8 bigLg:px-16">
        <div>
            <p>Clients rate photographers</p>
        </div>
      </section>
    </main>
  );
};

export default Photography;
