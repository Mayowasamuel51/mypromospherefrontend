import { Link } from "react-router-dom";

// assests
import Bags from "../../assests/images/Accessories.jpeg";
import Baker from "../../assests/images/Baker.jpeg";
import Beads from "../../assests/images/Bead works.jpeg";
import Events from "../../assests/images/Event deco.jpeg";
import Makeup from "../../assests/images/Makeup artist.jpeg";
import Mechanic from "../../assests/images/Mechanic.jpeg";
import Photographer from "../../assests/images/Photographer.jpeg";
import Tech from "../../assests/images/Tech schools.jpeg";

export default function MoreTalents() {
  const moreTalents = [
    {
      id: 1,
      text: "Baker",
      img: Baker,
    },
    {
      id: 2,
      text: "Mechanics",
      img: Mechanic,
    },
    {
      id: 3,
      text: "Tech Schools",
      img: Tech,
    },
    {
      id: 4,
      text: "Bead Workers",
      img: Beads,
    },
    {
      id: 5,
      text: "Bag Makers",
      img: Bags,
    },
    {
      id: 6,
      text: "Event deco",
      img: Events,
    },
    {
      id: 7,
      text: "Photographers",
      img: Photographer,
    },
    {
      id: 8,
      text: "Makeup Artists",
      img: Makeup,
    },
  ];
  return (
    <div className=" grid grid-cols-1 gap-3 md:grid-cols-4">
      {moreTalents.map(({ id, text, img }) => {
        return (
          <div
            key={id}
            className=" relative w-[230px] h-[90px] rounded-2xl flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center md:w-[150px]"
          >
            <img
              src={img}
              alt={text}
              className=" absolute w-full h-full object-cover"
            />
            <div className=" w-full h-full bg-black/50 flex flex-col justify-center items-center z-20">
              <Link className=" text-white font-semibold text-sm">{text}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
