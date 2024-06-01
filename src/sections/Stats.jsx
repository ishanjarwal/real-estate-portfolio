import React from 'react'
import { BiWalk } from 'react-icons/bi';
import { IoHome, IoHomeOutline } from 'react-icons/io5';
import { LiaHandshake } from "react-icons/lia";

const Stats = () => {
    return (
        <div id='stats' className='bg-dark pt-12 pb-36'>
            <div className='max-w-8xl mx-auto'>
                <div className='lg:grid grid-cols-5 md:px-12 px-4'>
                    <div className='col-span-2 lg:-mb-0 mb-8' >
                        <h1 className='text-4xl font-semibold text-white font-heading'>
                            Fabulous Properties by Top Builders in the Town.
                        </h1>
                        <p className='text-backdrop mt-4'>
                            Explore our listings, meet our team, and discover why we're the preferred choice for all your real estate needs.                        </p>
                    </div>
                    <div className='col-span-3 flex lg:justify-end items-center space-x-4'>
                        <div className='p-4 h-52 w-full max-w-40 rounded-lg bg-light-backdrop flex flex-col items-start justify-between'>
                            <span className='flex justify-center items-center p-2 rounded-md bg-backdrop text-3xl text-dark'>
                                <LiaHandshake />
                            </span>
                            <div>
                                <h2 className='md:text-5xl text-3xl text-dark'>20+</h2>
                                <p className='text-lg text-dark/25 leading-6 h-12'>Happy Clients</p>
                            </div>
                        </div>
                        <div className='p-4 h-52 w-full max-w-40 rounded-lg bg-light-backdrop flex flex-col items-start justify-between'>
                            <span className='flex justify-center items-center p-2 rounded-md bg-backdrop text-3xl text-dark'>
                                <IoHomeOutline />
                            </span>
                            <div>
                                <h2 className='md:text-5xl text-3xl text-dark'>50+</h2>
                                <p className='text-lg text-dark/25 leading-6 h-12'>Properties Delivered</p>
                            </div>
                        </div>
                        <div className='p-4 h-52 w-full max-w-40 rounded-lg bg-light-backdrop flex flex-col items-start justify-between'>
                            <span className='flex justify-center items-center p-2 rounded-md bg-backdrop text-3xl text-dark'>
                                <BiWalk />
                            </span>
                            <div>
                                <h2 className='md:text-5xl text-3xl text-dark'>1K+</h2>
                                <p className='text-lg text-dark/25 leading-6 h-12'>Site Visits</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Stats
