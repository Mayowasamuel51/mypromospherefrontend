import { Link } from "react-router-dom";
// assests
import barber from '../../assests/images/barber.png'
import fashion from '../../assests/SVGs/fashion.svg'
import hair from '../../assests/SVGs/hair.svg'

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
      img: fashion
    },
    {
      id: 3,
      text: "Hair Stylist",
      img: hair
    },
  ];
  return (
    <div className=" flex flex-col items-center gap-y-5 md:flex-row md:justify-center md:flex-wrap md:gap-x-5">
      {bestTalents.map(({ id, text, img }) => {
        return (
          <div
            key={id}
            className="relative w-[230px] h-[167px] rounded-2xl flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center md:w-[200px]"
          >
            <img src={img} alt="" className=" absolute w-full h-full object-cover" />
            <div className=" w-full h-full bg-black/50 flex flex-col justify-center items-center z-20">
              <Link className=" text-white font-semibold text-xl">{text}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
