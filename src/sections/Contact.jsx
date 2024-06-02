import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='relative bg-dark' >
            <img
                src="https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-home-design-Warm-grey-exteriors.png"
                alt=""
                className='absolute w-full h-full object-cover object-center brightness-75'
            />
            <div className='relative max-w-8xl mx-auto md:px-12 px-4 pt-32 pb-24'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='md:text-6xl text-5xl font-bold text-white'>Let's Connect</h1>
                    <div className='max-w-3xl w-full mt-12 rounded-2xl bg-slate-800/35 backdrop-blur-md p-8'>
                        <div className='flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-4'>
                            <div className='flex-1'>
                                <label className='text-white/50 text-sm'>First Name</label>
                                <input
                                    placeholder=''
                                    type="text"
                                    className='w-full border border-white/30 bg-slate-600/10 backdrop-blur-lg rounded-lg px-4 py-3 outline-none placeholder:text-slate-300 text-slate-300'
                                />
                            </div>
                            <div className='flex-1'>
                                <label className='text-white/50 text-sm'>Last Name</label>
                                <input
                                    placeholder=''
                                    type="text"
                                    className='w-full border border-white/30 bg-slate-600/10 backdrop-blur-lg rounded-lg px-4 py-3 outline-none placeholder:text-slate-300 text-slate-300'
                                />
                            </div>
                        </div>
                        <div className='md:mt-8 mt-4'>
                            <label className='text-white/50 text-sm'>E-mail</label>
                            <input
                                placeholder=''
                                type="text"
                                className='w-full border border-white/30 bg-slate-600/10 backdrop-blur-lg rounded-lg px-4 py-3 outline-none placeholder:text-slate-300 text-slate-300'
                            />
                        </div>
                        <div className='md:mt-8 mt-4'>
                            <label className='text-white/50 text-sm'>What are your looking for ?</label>
                            <select
                                placeholder=''
                                type="text"
                                className='w-full border border-white/30 bg-slate-600/10 backdrop-blur-lg rounded-lg px-4 py-3 outline-none placeholder:text-dark text-slate-300'
                            >
                                <option value="">Residential Property</option>
                                <option value="">Commercial Property</option>
                                <option value="">Rental Property</option>
                            </select>
                        </div>
                        <div className='md:mt-8 mt-4'>
                            <label className='text-white/50 text-sm'>Message</label>
                            <textarea
                                placeholder=''
                                className='w-full border border-white/30 bg-slate-600/10 backdrop-blur-lg rounded-lg px-4 py-3 outline-none placeholder:text-slate-300 text-slate-300 min-h-52 max-h-52'
                            />
                        </div>
                        <button className='mt-4 rounded-xl bg-white text-dark text-center w-full py-3 hover:brightness-75 duration-150'>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
