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
    <div className="flex flex-col items-center gap-y-5 md:flex-row justify-center md:gap-x-4">
      {bestTalents.map(({ id, text, img }) => {
        return (
          <div
            key={id}
            className="relative rounded-md lg:rounded-2xl items-center bg-no-repeat bg-cover bg-center w-full"
          >
            <img src={img} alt={text} className="flex-1 aspect-square rounded-md lg:rounded-2xl object-cover" />
            <div className="rounded-md lg:rounded-2xl absolute inset-0 w-full h-full bg-black/50 flex justify-center items-center z-20">
              <Link className=" text-white font-semibold text-xl">{text}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
