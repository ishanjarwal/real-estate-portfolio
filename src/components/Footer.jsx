import React from 'react'
import { links } from '../constants/constants'
import { IoLogoInstagram } from 'react-icons/io5'
import { FaFacebook } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {

    const socialLinks = [
        {
            title: "Instagram",
            icon: IoLogoInstagram,
            link: "https://www.instagram.com/ishanjarwal"
        },
        {
            title: "Facebook",
            icon: FaFacebook,
            link: "https://www.facebook.com/people/Ishan-Jarwal/pfbid0MBt2Lu2mPLFmcpWV3wCPsosYXuBB1MLpCqqe1YXJMMFwojxpsGn9UDWwUXMXaoDMl/"
        },
        {
            title: "LinkedIn",
            icon: LiaLinkedin,
            link: "https://www.linkedin.com/in/ishanjarwal/"
        },
        {
            title: "Twitter",
            icon: BsTwitter,
            link: "https://x.com/ishanjarwal"
        },
    ]

    return (
        <div className='bg-dark' >
            <div className='max-w-8xl mx-auto md:px-12 px-4 pt-32 pb-8'>
                <div className='flex lg:flex-row flex-col items-center justify-between lg:space-y-0 space-y-4'>
                    <nav className='flex-1 flex md:flex-row flex-col space-x-2 md:space-y-0 space-y-2'>
                        {socialLinks.map((el, idx) => {
                            const Icon = el.icon
                            return (
                                <a href={el.link} target='_blank' className='py-3 px-4 rounded-full border border-gray-200 duration-150 hover:bg-white hover:text-dark text-white flex justify-between space-x-2 items-center'>
                                    <span>{el.title}</span>
                                    <span>
                                        <Icon />
                                    </span>
                                </a>
                            )
                        })}
                    </nav>
                    <div className='flex-1'>
                        <div className='max-w-80 w-full'>
                            <p className='text-light-muted text-center'>Subscribe to our Newsletter for weekly updates.</p>
                            <input placeholder='example@gmail.com' type="text" className='block w-full rounded-lg bg-white outline-none px-3 py-2 mb-2' />
                            <button className='block w-full rounded-lg bg-zinc-900 text-white outline-none px-3 py-2 duration-150 hover:bg-white hover:text-dark' >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <h1 className='font-logo text-white text-center' style={{fontSize:"min(30vw, 300px)"}}>
                    HAVN
                </h1>
                <div className='border-t border-b border-white flex justify-between items-center space-x-2 md:py-8 py-4 px-4'>
                    <a href="/" className='uppercase text-light-muted md:text-lg text-center text-xs hover:text-white duration-150'>
                        Company
                    </a>
                    <a href="/" className='uppercase text-light-muted md:text-lg text-center text-xs hover:text-white duration-150'>
                        Terms and conditions
                    </a>
                    <a href="/" className='uppercase text-light-muted md:text-lg text-center text-xs hover:text-white duration-150'>
                        privacy policy
                    </a>
                    <a href="/" className='uppercase text-light-muted md:text-lg text-center text-xs hover:text-white duration-150'>
                        Instagram
                    </a>
                </div>
                <div className='flex justify-center items-center py-6'>
                    <p className='text-light-muted'>Made with 🩷 by&nbsp;
                        <a href="https://www.instagram.com/ishanjarwal" target='_blank' className='text-blue-500 uppercase'>
                            Ishan Jarwal.
                        </a>
                    </p>

                </div>
            </div>
        </div >
    )
}

export default Footer
