import React from 'react'

const StartNow = () => {
  return (
    <div id='start-now' className='relative flex justify-center items-center' style={{ height: "min(100vh, 700px)" }}>
      <img
        src="https://a.storyblok.com/f/180614/1094x985/c75cd3331f/villa-side-view-render.jpg"
        alt=""
        className='absolute w-full h-full object-cover object-center'
      />
      <div className='relative max-w-6xl px-4'>
        <h1 className='md:text-6xl text-5xl text-white text-center uppercase'>
          where ideas turn into stunning designs
        </h1>
        <a href='#contact' className='block w-min whitespace-nowrap mx-auto py-6 px-8 text-lg text-white border border-white rounded-full mt-4 duration-150 hover:px-12 hover:bg-white hover:text-dark '>
          Connect Now
        </a>
      </div>
    </div>
  )
}

export default StartNow
