import React from 'react'

const Data = () => {
  return (
    <div className='w-full h-[100vh] relative backgroundData'>
        <div className='max-w-full bg-gray-900/20 absolute top-0 left-0 w-full h-full mx-auto px-4'>
            <div className='h-[60vh] md:h-[100vh] flex flex-col justify-center px-4 left-[20%] md:left-[50%] bg-dark/20 md:w-5/12 absolute'>
                <h2 className='text-4xl font-bold'><span>Data</span> Recovery</h2>
                <p className='text-base text-slate-900 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste ullam velit quo facilis dolorem consequuntur quod, autem aliquam quis quasi veniam voluptate culpa eum temporibus id deserunt a ea?</p>
                <div>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Data