import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const Features = () => {
  return (
    <div id='features' className='bg-dark'>
      <div className='max-w-8xl mx-auto md:px-12 px-4 pt-32 pb-24'>
        <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-4 lg:space-x-4 space-x-0 justify-between items-start'>
          <div className='flex-1'>
            <div>
              <h1 className='text-white text-6xl font-bold'>Easily find your next Home.</h1>
              <p className='text-light-muted mt-4'>
                Our team of seasoned professionals brings a wealth of knowledge and experience to the table, ensuring you receive the best guidance and support.                </p>
              <ul className='mt-12'>
                <li className='flex justify-start items-center space-x-4'>
                  <span className='p-4 rounded-full bg-backdrop text-2xl'>
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  <span className='text-white text-lg'>
                    100% Genuine Properties
                  </span>
                </li>
                <li className='flex justify-start items-center space-x-4 mt-8'>
                  <span className='p-4 rounded-full bg-backdrop text-2xl'>
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  <span className='text-white text-lg'>
                    Fully Furnished Homes
                  </span>
                </li>
                <li className='flex justify-start items-center space-x-4 mt-8'>
                  <span className='p-4 rounded-full bg-backdrop text-2xl'>
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  <span className='text-white text-lg'>
                    Top Notch Interior
                  </span>
                </li>
              </ul>
              <a href='#contact' className='block w-min whitespace-nowrap py-3 px-4 text-lg text-white border border-white rounded-full mt-8 duration-150 hover:px-12 hover:bg-white hover:text-dark '>
                Connect Now
              </a>
            </div>
          </div>
          <div className='flex-1 self-stretch'>
            <div className='rounded-3xl overflow-hidden h-full'>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Architectural_render_%28Blender%29.jpg/1200px-Architectural_render_%28Blender%29.jpg"
                alt=""
                className='w-full h-full object-cover object-center'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
