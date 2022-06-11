import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[100vh] px-4 mx-auto backgroundContact relative'>
        <div className='max-w-7xl w-full h-full'>
            <div className='absolute lg:left-[40%] top-[20%]'>
                <form action="">
                    <h1 className='text-4xl font-bold text-white lg:text-center'><span>Contact</span> Us</h1>
                    <div className='flex flex-col pt-6'>
                        <label className='text-white font-semibold text-lg' htmlFor="">Name</label>
                        <input className='bg-transparent border-2 border-slate-300 shadow-sm shadow-slate-200 py-2 pl-2 pr-40 rounded-md text-white' type="text" placeholder='Enter your name' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label className='text-white font-semibold text-lg' htmlFor="">Email</label>
                        <input className='bg-transparent border-2 border-slate-300 shadow-sm shadow-slate-200 py-2 pl-2 pr-24 rounded-md text-white' type="email" placeholder='Enter your email' />
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label className='text-white font-semibold text-lg' htmlFor="">Message</label>
                        <textarea className='bg-transparent border-2 border-slate-300 shadow-sm shadow-slate-200 p-2 rounded-md text-white' rows={10} type="text" placeholder='Enter your name' />
                    </div>
                    <div className='mt-2'>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact