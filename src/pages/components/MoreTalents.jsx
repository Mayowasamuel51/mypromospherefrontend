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
    <div className="grid gap-x-3 gap-y-3 grid-cols-1 md:grid-cols-4">
      {moreTalents.map(({ id, text, img }) => {
        return (
          <div
            key={id}
            className="w-full relative rounded-md lg:rounded-2xl items-center"
          >
            <img
              src={img}
              alt={text}
              className="w-full rounded-md lg:rounded-2xl h-20 object-cover"
            />
            <div className="rounded-md lg:rounded-2xl absolute inset-0 w-full h-full bg-black/50 flex justify-center items-center z-20">
              <Link className=" text-white font-semibold text-sm">{text}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
