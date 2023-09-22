import { perfectWorksData } from "../../../utils/data"
import { Link } from "react-router-dom";

const Images = () => {
  return (
    <>
      <div className="mt-16 smax:grid smax:grid-cols-2 lg:grid-cols-3 lg:large:grid-cols-4 gap-[2.2rem]">
        {perfectWorksData.map(function (work, index) {
          const { id, image, rounded, name } = work;
          return (
            <Link to={`detail/${id}`}>
              <div className="mt-3 cursor-pointer" key={index}>
                <img src={image} alt="" className="w-full" />
                <div className="mt-5 flex items-center space-x-5">
                  <img src={rounded} alt="rounded" className="w-[15%]" />
                  <h3>{name}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
  
}
// md:grid md:grid-cols-2 md:grid-cols-3 lg:large:grid-cols-4 space-y-2 space-x-2
export default Images