import React from 'react'

const About = ({about, name}) => {
  return (
    <div className='p-5 mt-5 md:px-12 lg:px-[5rem] large:px-[8rem]'>
      <h1 className='font-600 text-[1.3rem] md:text-[1.5rem] lg:text-[2rem]'>About {name}</h1>
      <p className='mt-5 max-w-[992px'>{about} </p>
    </div>
  );
}

export default About