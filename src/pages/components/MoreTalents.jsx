import { Link } from "react-router-dom";

export default function MoreTalents() {
  const moreTalents = [
    {
      id: 1,
      text: "Bakerrr",

    },
    {
      id: 2,
      text: "Mechanics",
    },
    {
      id: 3,
      text: "Tech Schools",
    },
    {
      id: 4,
      text: "Bead Workers",
    },
    {
      id: 5,
      text: "Bag Makers",


    },
    {
      id: 6,
      text: "Event deco",
    },
    {
      id: 7,
      text: "Photographers",
    },
    {
      id: 8,
      text: "Makeup Artists",
    },
  ];
  return (
    <div className=" flex flex-row items-center justify-center gap-2 flex-wrap xl:flex-nowrap xl:grid xl:grid-cols-4">
      {moreTalents.map(({id, text}) => {
        return (
          <div
            key={id}
            className=" relative w-[170px] h-[90px] rounded-2xl flex flex-col justify-center items-center bg-barber bg-no-repeat bg-cover bg-center"
          >
            <div className=" w-full h-full bg-black/50 flex flex-col justify-center items-center">
              <Link className=" text-white font-semibold text-sm">{text}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
