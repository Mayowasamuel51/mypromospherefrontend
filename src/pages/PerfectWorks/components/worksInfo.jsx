import React from 'react'

const WorksInfo = ({
  workImage1,
  workImage2,
  workImage3,
  workImage4,
  workImage5,
  workImage6,
}) => {
  return (
    <div className="mt-8 p-4 grid grid-cols-3 relative">
      {/* images-center  */}
      <img src={workImage1} alt="" className="w-[60%] mx-auto mr-[-1rem] " />
      <img src={workImage2} alt="" className="w-[60%] mx-auto " />
      <img src={workImage3} alt="" className="w-[60%] mx-auto ml-[-1rem]" />
      <img src={workImage4} alt="" className="w-[60%] mx-auto mt-4 mr-[-1rem]" />
      <img src={workImage5} alt="" className="w-[60%] mx-auto mt-4" />
      <img
        src={workImage6}
        alt=""
        className="w-[60%] mx-auto mt-4 ml-[-1rem]"
      />
    </div>
  );
};

export default WorksInfo