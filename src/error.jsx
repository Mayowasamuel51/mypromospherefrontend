import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Error = () => {
    return (
        <>
            <Navbar profile={true} />
            <div className="min-h-screen grid place-items-center">
                <div className='text-center'>
                    <h1 className="md:text-2xl font-semibold">Page Not Found</h1>
                    <p><Link to="/" className="underline text-[#3D217A]">Go to Home</Link></p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Error