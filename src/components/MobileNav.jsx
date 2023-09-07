import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileNav() {
  return (
    <div className=" flex flex-col justify-center items-center absolute right-0 top-0 w-full h-screen bg-white bg-opacity-5 backdrop-blur-2xl">
        <div className=' flex flex-col items-start gap-y-5'>
            <Link className='text-2xl text-white'>Home</Link>
            <Link className='text-2xl text-white'>About</Link>
            <Link className='text-2xl text-white'>Lorem</Link>
        </div>
    </div>
  )
}
