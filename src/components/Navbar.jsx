import React, { useState } from 'react'
import { SiDatabricks } from 'react-icon/si'

const Navbar = () => {
  return (
    <div className='w-full absolute z-10'>
        <div className='max-w-[1240px] h-20 mx-auto px-4 flex items-center justify-between'>
            <div>
                <h1 className='text-5xl font-bold text-white'>Secured</h1>
            </div>
            <ul className='hidden md:flex items-center text-white/70 font-bold'>
                <li className='p-4 hover:text-white'>Home</li>
                <li className='p-4 hover:text-white'>Recovery</li>
                <li className='p-4 hover:text-white'>Cloud</li>
                <li className='p-4 hover:text-white'>Contact</li>
                <button className='ml-4'>Sign in</button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar