import { Link } from "react-router-dom";
// assests
import barber from '../../assests/images/barber.png'

export default function BestTalents() {
  const bestTalents = [
    {
      id: 1,
      text: "Barber",
      img: barber
    },
    {
      id: 2,
      text: "Fashion Designer",
    },
    {
      id: 3,
      text: "Hair Stylist",
    },
  ];
  return (
    <div className=" flex flex-col items-center gap-y-5 md:flex-row md:justify-center md:flex-wrap md:gap-x-5">
      {bestTalents.map(({ id, text, img }) => {
        return (
          <div
            key={id}
            className={`relative w-[230px] h-[167px] rounded-2xl flex flex-col justify-center items-center bg-${img} bg-no-repeat bg-cover bg-center`}
          >
            <div className=" w-full h-full bg-black/50 flex flex-col justify-center items-center">
              <Link className=" text-white font-semibold text-xl">{text}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
