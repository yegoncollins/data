import React from 'react'
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#00fffb] font-bold p-2'>GROW WITH DATA ANALYTICS</p>
          <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold md:py-6'>Grow with data.</h1>
          <div>
            <p className='md:text-4xl sm:text-3 xl text-xl font-bold'>Fast, Flexible financing for</p>
            <Typed
            strings= {['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
            />
          </div>

      </div>
    </div>
  )
}

export default Hero