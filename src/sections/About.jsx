import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const About = () => {
    return (
        <div id='about' className='bg-white'>
            <div className='relative max-w-8xl mx-auto md:px-12 px-4 pt-36 pb-36'>
                <img
                    src="/section_switch_light.png"
                    alt=""
                    className='absolute left-0 w-1/2 bottom-full'
                />
                <img
                    src="/section_switch.png"
                    alt=""
                    className='absolute right-0 w-1/2 top-0 transform rotate-180'
                />
                <img
                    src="/section_switch_light.png"
                    alt=""
                    className='absolute left-0 w-1/2 top-full rotate-180'
                />
                <img
                    src="/section_switch.png"
                    alt=""
                    className='absolute right-0 w-1/2 bottom-0 transform z-10'
                />
                <div className='lg:grid grid-cols-12 '>
                    <div className='xl:col-span-8 col-span-7'>
                        <h1 className='lg:text-6xl text-4xl font-semibold text-dark font-heading uppercase'>
                            We deliver unparalleled real estate services.
                        </h1>
                    </div>
                    <div className='xl:col-span-4 col-span-5 lg:mt-0 mt-8'>
                        <p className='text-dark'>
                            We understand that every client is unique. Our services are customized to meet your specific needs and preferences.                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-6 lg:grid-rows-2 md:grid-rows-3 grid-rows-none gap-4 mt-12' >
                    <div className='lg:col-span-4 md:col-span-3 col-span-6 md:row-span-1 rounded-3xl p-12 bg-dark'>
                        <div className='h-full flex flex-col justify-between'>
                            <div>
                                <h1 className='md:text-4xl text-3xl font-semibold text-white font-heading w-3/4'>
                                    Browse our hand-picked selection of the finest properties available.</h1>
                                <p className='text-light-muted mt-4 w-3/4'>
                                    Your dream home is just a click away! At HAVN, we pride ourselves on providing exceptional real estate services, whether you're buying, selling, or renting                                </p>
                            </div>
                            <div className='flex justify-between items-center w-full'>
                                <p className='text-backdrop'>by Ishan Jarwal</p>
                                <a href='https://www.instagram.com/ishanjarwal' target='_blank' className='p-6 bg-white rounded-full duration-150 hover:scale-150 hover:bg-dark hover:text-white'>
                                    <span className='text-2xl'>
                                        <MdOutlineArrowOutward />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-2 md:col-span-3 col-span-6 lg:row-span-2 md:row-span-3 rounded-3xl overflow-hidden bg-dark'>
                        <img
                            src="https://bimheroes.com/wp-content/uploads/2023/09/architectural-3d-rendering-lunas-studio.jpg"
                            className='w-full h-full object-cover object-center'
                            alt=""
                        />
                    </div>
                    <div className='lg:col-span-2 md:col-span-3 col-span-6 md:row-span-1 rounded-3xl overflow-hidden bg-dark'>
                        <img
                            src="https://assets-global.website-files.com/5894a32730554b620f7bf36d/5e8342522fb7310f16ab9f45_5b82c36b2b7a39bc1eb486b0_Architectural-Rendering-is-Not-Easy%252C-Here-is-Why-EASY-RENDER.jpeg"
                            className='w-full h-full object-cover object-center'
                            alt=""
                        />
                    </div>
                    <div className='lg:col-span-2 md:col-span-3 col-span-6 md:row-span-1 rounded-3xl p-4 bg-dark'>
                        <div className='rounded-lg overflow-hidden '>
                            <img
                                src="https://assets-global.website-files.com/5894a32730554b620f7bf36d/5e8342522fb7310f16ab9f45_5b82c36b2b7a39bc1eb486b0_Architectural-Rendering-is-Not-Easy%252C-Here-is-Why-EASY-RENDER.jpeg"
                                className='w-full h-full object-cover object-center'
                                alt=""
                            />
                        </div>
                        <div className='mt-8 px-4'>
                            <h3 className='text-xl text-white leading-6'>Find the best of real estate in the city. Commercial and Residential plots at best price</h3>
                            <p className='text-light-muted mt-2'>HAVN is a premier real estate agency dedicated to connecting clients with their ideal homes. With over 20 years of experience in the industry</p>
                            <a href="/" className='block text-light-muted mt-4 underline'>Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
