import React, { useState } from 'react'
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import { links } from '../constants/constants.js'



const Header = () => {

    const [mobileNav, setMobileNav] = useState(false)

    const menuVars = {
        initial: {
            scaleX: 0
        },
        animate: {
            scaleX: 1,
            transition: { duration: 0.5 }
        },
        exit: {
            scaleX: 0,
            transition: { duration: 0.5, delay: 0.8 }
        }
    }

    const conainerVars = {
        initial: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        },
        open: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                staggerDirection: 1
            }
        }
    }

    const linkVars = {
        initial: {
            y: "100%",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1]
            }
        },
        open: {
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0, 0.55, 0.45, 1]
            }
        }
    }


    return (
        <div className='sticky top-0 bg-white/90 backdrop-blur-lg z-50 flex justify-center items-center py-8'>
            <div className='w-full max-w-8xl grid grid-cols-12 md:px-12 px-4'>
                <div className='xl:col-span-8 col-span-7 flex justify-start items-center'>
                    <h1 className='text-3xl'>
                        <a href="#" className='font-logo'>
                            HAVN
                        </a>
                    </h1>
                </div>
                <div className='xl:col-span-4 col-span-5'>
                    <nav className='hidden lg:flex justify-between items-center space-x-2 pb-4 border-b border-gray-200'>
                        {links.map((el, idx) => (
                            <a href={el.link} className='py-3 px-4 rounded-full border border-gray-200 duration-150 hover:bg-dark hover:text-white hover:border-dark'>
                                {el.display}
                            </a>
                        ))}
                    </nav>

                    <button
                        onClick={() => {
                            setMobileNav(true)
                        }}
                        className='lg:hidden block ms-auto py-1 px-3 text-light-dark text-3xl'>
                        <IoMenuOutline />
                    </button>

                    {/* mobile nav */}
                    <AnimatePresence>
                        {mobileNav && (
                            <motion.div
                                variants={menuVars}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                style={{ zIndex: "10000000", transformOrigin: "right" }}
                                onClick={(e) => {
                                    setMobileNav(false);
`   `                                }}
                                className='fixed px-8 pt-12 top-0 left-0 w-full h-screen bg-white flex flex-col space-y-4 justify-start items-center'>
                                <h1 className='text-3xl font-logo text-center mb-32'>
                                    HAVN
                                </h1>
                                <button
                                    onClick={() => {
                                        setMobileNav(false)
                                    }}
                                    className='absolute top-4 right-4 text-dark text-3xl'>
                                    <IoCloseOutline />
                                </button>
                                <motion.div
                                    variants={conainerVars}
                                    initial="initial"
                                    animate="open"
                                    exit="initial"
                                    className='flex flex-col justify-center items-center w-full'
                                >
                                    {links.map((el, idx) => (
                                        <div className='overflow-hidden w-full flex flex-col justify-center items-center '>
                                            <motion.a
                                                variants={linkVars}
                                                href={el.link}
                                                className='custom-before relative inline-block  text-5xl uppercase text-center duration-150 hover:!-skew-x-12 hover:before:w-full'
                                            >
                                                {el.display}
                                            </motion.a>
                                        </div>
                                    ))}
                                </motion.div>
                            </motion.div>)}
                    </AnimatePresence>
                </div>
            </div>
        </div >
    )
}

export default Header
