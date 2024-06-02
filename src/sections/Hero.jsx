import React from 'react'
import SearchForm from '../components/SearchForm'
import { FaArrowRightLong } from 'react-icons/fa6'

const Hero = () => {
    return (
        <div>
            <div className='max-w-8xl mx-auto lg:grid grid-cols-12 px-12 md:pt-12 pb-36'>
                <div className='xl:col-span-8 col-span-7 pe-32 lg:pb-0 pb-12'>
                    <h1 className='xl:text-8xl text-5xl font-heading font-bold text-dark uppercase'>
                        Your Gateway to Perfect Homes
                    </h1>
                </div>
                <div className='xl:col-span-4 col-span-5'>
                    <div>
                        <p className='text-md font-text text-dark uppercase'>
                            At <span className='font-logo font-bold'>HAVN</span>, we turn your real estate dreams into reality with personalized service, expert guidance, and a diverse range of properties.                        </p>
                        <a href='#contact' className='w-min whitespace-nowrap group flex justify-between items-center px-4 py-2 border-2 border-dark rounded-full font-text mt-8 duration-150 hover:text-white hover:bg-dark'>
                            <span>
                                Get Started
                            </span>
                            <span className='group-hover:w-auto block group-hover:opacity-100 group-hover:ms-2 duration-150 opacity-0 w-0 m-0'>
                                <FaArrowRightLong />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='bg-dark'>
                <div className='max-w-8xl mx-auto '>
                    <div className='relative md:px-12'>
                        <div className='relative md:p-8 p-4 md:-top-36 -top-28 left-1/2 -translate-x-1/2 rounded-3xl bg-white w-full overflow-hidden'>
                            <img
                                src="https://images.adsttc.com/media/images/5fbc/0d02/63c0/17d6/2c00/06d3/newsletter/open-uri20201123-21108-foycjf.jpg?1606159609"
                                alt=""
                                className='w-full h-full object-center object-cover absolute top-0 left-0'
                            />
                            {/* <div className='py-12 bg-white '>

                            </div> */}
                            <div className='md:max-w-80 md:mx-0 mx-auto'>
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
