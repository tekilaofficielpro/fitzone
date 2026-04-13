import React from 'react'

const HeaderCoach = () => {
  return (
    <section className='h-[60vh] flex flex-col justify-center items-center space-y-4 relative'>
      <h1 className='text-xl sm:text-5xl md:text-7xl text-white text-center'>MEET OUR COACHES</h1>
      <hr className="w-60 sm:w-120 md:w-200 border-t-5 border-red-500" />
      <p className='text-red-400 text-sm'>Expert trainers dedicated to your transformation.</p>
      <hr className="w-50 border-t-5 absolute right-0 bottom-0" style={{ borderImage: 'linear-gradient(to right, #ef4444, transparent) 1' }} /> 
    </section>
  )
}

export default HeaderCoach