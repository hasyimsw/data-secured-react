import React from 'react'
import { SiDatabricks } from "react-icons/si";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='w-full backgroundFooter relative'>
        <div className='max-w-full bg-gray-900/20 pt-10 px-4'>
            <div className='flex items-center max-w-7xl mx-auto'>
                <SiDatabricks className="mt-2 mr-3 primaryColor" size={44} />
                <h1 className="text-4xl font-bold text-[#0d2154]">Secured.</h1>
            </div>
            <div className='max-w-7xl mx-auto py-10 grid grid-cols-2 md:grid-cols-4'>
                <div className='text-[#0d2154] pb-10 md:pb-0'>
                    <h2 className='text-xl font-bold'>NAVIGATION</h2>
                    <div className='pt-4 space-y-2'>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='text-[#0d2154]'>
                    <h2 className='text-xl font-bold'>MY ACCOUNT</h2>
                    <div className='pt-4 space-y-2'>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='text-[#0d2154]'>
                    <h2 className='text-xl font-bold'>INFORMATION</h2>
                    <div className='pt-4 space-y-2'>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='text-[#0d2154]'>
                    <h2 className='text-xl font-bold'>LEGAL</h2>
                    <div className='pt-4 space-y-2'>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
            <div className='pb-4 max-w-7xl mx-auto'>
                <h2 className='text-xl font-bold py-2'>JOIN OUR TEAM</h2>
                <input className='rounded-md py-[6px] pl-2 pr-16 border-[1px] border-slate-400 shadow-md' placeholder='Enter your email' type="email" />
            </div>
            <div className='flex max-w-7xl mx-auto space-x-2 pb-4'>
                <FiFacebook size={24} />
                <FiGithub size={24} />
                <FiInstagram size={24} />
                <FiLinkedin size={24} />
                <FiDribbble size={24} />
            </div>
            <div>
                <p className="text-center font-semibold text-slate-800 text-sm pt-4 pb-2">
                    &copy; 2022 &#124; coded with ❤️ by Hasyim (aka Kicuyy)
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer