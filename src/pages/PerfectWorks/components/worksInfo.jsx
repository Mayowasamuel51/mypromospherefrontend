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
    <div className="mt-8  p-4 md:grid md:grid-cols-2 lg:grid-cols-3 relative">
      {/* images-center  */}
      <img
        src={workImage1}
        alt=""
        className="w-[80%] lg:w-[50%] mx-auto lg:mr-[-4rem] large:mr-[-6rem] md:mt-4 "
      />
      <img
        src={workImage2}
        alt=""
        className="w-[80%] lg:w-[50%] mx-auto mt-4  "
      />
      <img
        src={workImage3}
        alt=""
        className="w-[80%] lg:w-[50%] mx-auto mt-4 lg:ml-[-4rem] large:ml-[-6rem]"
      />
      <img
        src={workImage4}
        alt=""
        className="w-[80%] lg:w-[50%] mx-auto mt-4 lg:mr-[-4rem] large:mr-[-6rem]"
      />
      <img
        src={workImage5}
        alt=""
        className="w-[80%] lg:w-[50%] mx-auto mt-4"
      />
      <img
        src={workImage6}
        alt=""
        className="w-[80%] lg:w-[50%] mx-auto mt-4 lg:ml-[-4rem] large:ml-[-6rem]"
      />
    </div>
  );
};

export default WorksInfo