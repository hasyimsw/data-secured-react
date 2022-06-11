import React from 'react'

const Cloud = () => {
  return (
    <div name='cloud' className='w-full h-[100vh] px-4 mx-auto relative backgroundCloud'>
        <div className='max-w-full w-full h-full'>
            <div className='absolute lg:left-[10%] top-[40%]'>
                <h2 className='text-4xl font-bold text-white'><span>Cloud</span> Recovery</h2>
                <p className='lg:w-5/12 text-white py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo tenetur nulla totam sunt ad labore dolorum beatae quas pariatur ut officia aliquid corporis aliquam, vel perspiciatis quidem, esse temporibus. Modi!</p>
                <div className='mt-5'>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cloud