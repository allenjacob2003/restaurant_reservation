import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-[100vh] w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url()" }}> 
      {
      /*Transparent dark overlay */
      }
      <div className='absolute inset-0 bg-gray-900 opacity-30 z-10'></div>
      {
        /*Centered text content */
      }
    <div className='relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4'>
      <h2 className='text-lg md:text-xl mb-4 tracking-widest uppercase'>Where Luxury Meets Diner</h2>
      <h1 className='text-4xl md:text-6xl font-bold mb-6'>my app</h1>
      <button className='bg-amber-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-amber-500 transtion'>Book a Table</button>
    </div>
    
    </div>
  )
}

export default Hero
