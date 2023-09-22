import Star from "../../assests/icons/Star.svg";
import StarGroup from "../../assests/SVGs/star group.svg";
import Luke from "../../assests/SVGs/Luke Adeola.svg";
import Jane from "../../assests/SVGs/Jane Cooper.svg";
import Esther from "../../assests/SVGs/esther howard.svg";
import Wade from "../../assests/SVGs/wade warren.svg";
import Footer from "../../components/Footer";

const Photography = () => {
  const photogrpahers = [
    {
      id: 1,
      photogrpaher: "Luke Adeola",
      img: Luke,
    },
    {
      id: 2,
      photogrpaher: "Jane Cooper",
      img: Jane,
    },
    {
      id: 3,
      photogrpaher: "Wade Warren",
      img: Wade,
    },
    {
      id: 4,
      photogrpaher: "Esther Howard",
      img: Esther,
    },
    {
      id: 5,
      photogrpaher: "Brooklyn Simmons",
      img: Esther,
    },
    {
      id: 6,
      photogrpaher: "John Alexander",
      img: Esther,
    },
    {
      id: 7,
      photogrpaher: "Jenny Wilson",
      img: Esther,
    },
    {
      id: 8,
      photogrpaher: "Guy Hawkins",
      img: Esther,
    },
    {
      id: 9,
      photogrpaher: "Jacob Jones",
      img: Esther,
    },
    {
      id: 10,
      photogrpaher: "Kristin Watson",
      img: Esther,
    },
    {
      id: 11,
      photogrpaher: "Cody Fisher",
      img: Esther,
    },
  ];
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

      {/* this section displays the different photographers available on the app */}
      <section className=" px-2 my-7 md:px-8 bigLg:px-16">
        <div className=" border-2 py-2 px-3 rounded-lg">
          <p className=" flex items-center flex-wrap text-xs font-medium md:text-base">
            Clients rate photographers{" "}
            <img src={StarGroup} alt="" className=" w-20" />
            4.8/5{" "}
            <span className=" font-light">based on 20,000 clients reviews</span>
          </p>
        </div>

        <div className=" mt-5 grid grid-cols-1 gap-3 md:grid-cols-3 exl:grid-cols-4">
          {photogrpahers.map(({ id, photogrpaher, img }) => {
            return (
              <div
                key={id}
                className=" px-3 py-8 border-2 border-black/60 rounded-lg flex flex-col items-center gap-y-5"
              >
                <img src={img} alt="photographers" className=" w-20" />
                {/* container for the name, career and ratings */}
                <div className=" flex flex-col items-center">
                  <h3>{photogrpaher}</h3>
                  <p className=" font-light text-sm">Photographer</p>
                  {/* container for star icon and ratigs */}
                  <div className=" flex items-center">
                    <img src={Star} alt="star" className=" w-3" />{" "}
                    <span className=" opacity-60 text-xs">4.8/5(30 jobs)</span>
                  </div>
                </div>
                {/* container for the photographer skillsets */}
                <div className=" flex flex-wrap items-center justify-center gap-3">
                  <p className=" text-xs bg-slate-300 py-2 px-3 rounded-lg">
                    Landscape
                  </p>
                  <p className=" text-xs bg-slate-300 py-2 px-3 rounded-lg">
                    Landscape
                  </p>
                  <p className=" text-xs bg-slate-300 py-2 px-3 rounded-lg">
                    Landscape
                  </p>
                </div>

                <button className=" bg-purple py-2 px-5 text-white rounded-2xl">
                  See more
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* this section talks about how the app works */}
      <section className=" py-10 bg-slate-300 px-2 md:px-8 bigLg:px-16">
        <h2 className=" text-center text-3xl font-semibold mb-10">
          How it works
        </h2>
        <div className=" flex flex-col items-center gap-y-5 md:flex-row md:gap-x-10">
          <div className=" flex flex-col items-center gap-y-2">
            <h4 className=" text-xl font-medium">Post a job (its free)</h4>
            <p className=" text-center text-sm">
              Tell us what you need. Provide as many details as possible, but
              don’t worry about getting it perfect.
            </p>
          </div>
          <div className=" flex flex-col items-center gap-y-2">
            <h4 className=" text-xl font-medium">Talents come to you</h4>
            <p className=" text-center text-sm">
              Get qualified within 24 hours, and meet the candidates you’re
              excited about. Hire as soon as you’re ready.
            </p>
          </div>
          <div className=" flex flex-col items-center gap-y-2">
            <h4 className=" text-xl font-medium">Payment simplified</h4>
            <p className=" text-center text-sm">
              Receive invoices and make payments through MyPromoSphere. Only pay
              for work you authorize
            </p>
          </div>
        </div>
      </section>

      {/* this section is for a C.T.A */}
      <section className="border-2 border-black py-4 rounded-lg my-10 mx-2 px-2 md:mx-8 md:px-5 bigLg:mx-16">
        <div className=" flex flex-col items-center md:flex-row md:justify-between">
            <h4 className=" text-center font-medium md:text-start">A talent edge for your entire organization </h4>
            <button className=" text-white bg-purple py-2 px-4 rounded-2xl text-xs">Schedule a call</button>
        </div>
        <p className=" text-xs text-center md:text-start">MyPromoSphere has you covered for hiring, managing and scaling talents more strategically </p>
      </section>

      <Footer />
    </main>
  );
};

export default Photography;
