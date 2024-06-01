import { Switch } from '@headlessui/react'
import React from 'react'

const SearchForm = () => {
    return (
        <div className='rounded-2xl bg-slate-800/35 backdrop-blur-md p-8'>
            <h1 className='text-white text-3xl font-logo'>HAVN</h1>
            <div className='mt-8'>
                <label className='text-white/50 text-sm'>Locality</label>
                <select
                    placeholder='Select a country'
                    type="text"
                    className='w-full border border-white/30 bg-slate-600/10 backdrop-blur-lg rounded-lg px-3 py-3 outline-none placeholder:text-slate-300 text-slate-300'
                >
                    <option value="India">Jagatpura</option>
                    <option value="India">Mansarovar</option>
                    <option value="India">C-Scheme</option>
                    <option value="India">Vaishali Nagar</option>
                    <option value="India">Kalwar Road</option>
                </select>
            </div>
            <div className='mt-8'>
                <label className='text-white/50 text-sm'>Size</label>
                <select
                    placeholder='Select a country'
                    type="text"
                    className='w-full border border-white/30 bg-slate-600/10 backdrop-blur-lg rounded-lg px-3 py-3 outline-none placeholder:text-slate-300 text-slate-300'
                >
                    <option value="India">900 - 1800 sq. ft.</option>
                    <option value="India">1800 - 2000 sq. ft.</option>
                    <option value="India">2000 - 2500 sq. ft.</option>
                    <option value="India">2500 + sq. ft.</option>
                </select>
            </div>
            <div className='mt-8'>
                <label className='text-white/50 text-sm'>Capacity</label>
                <select
                    placeholder='Select a country'
                    type="text"
                    className='w-full border border-white/30 bg-slate-600/10 backdrop-blur-lg rounded-lg px-3 py-3 outline-none placeholder:text-slate-300 text-slate-300'
                >
                    <option value="India">1BHK</option>
                    <option value="India">2BHK</option>
                    <option value="India">3BHK</option>
                    <option value="India">3+ BHK</option>
                </select>
            </div>
            <div className='mt-8'>
                <label className='text-white/50 text-sm'>Features</label>
                <div className='bg-slate-600/10 border-white/30 border p-4 rounded-xl backdrop-blur-sm'>
                    <div className='flex justify-start space-x-4 '>
                        <Switch
                            className="group relative flex h-7 w-12 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out outline-none   data-[checked]:bg-green-500"
                        >
                            <span
                                aria-hidden="true"
                                className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                            />
                        </Switch>
                        <span className='text-slate-300'>Pool</span>
                    </div>
                    <div className='flex justify-start space-x-4 mt-4'>
                        <Switch
                            className="group relative flex h-7 w-12 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out outline-none   data-[checked]:bg-green-500"
                        >
                            <span
                                aria-hidden="true"
                                className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                            />
                        </Switch>
                        <span className='text-slate-300'>Fully Furnished</span>
                    </div>
                    <div className='flex justify-start space-x-4 mt-4'>
                        <Switch
                            className="group relative flex h-7 w-12 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out outline-none   data-[checked]:bg-green-500"
                        >
                            <span
                                aria-hidden="true"
                                className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                            />
                        </Switch>
                        <span className='text-slate-300'>Ready to Shift</span>
                    </div>
                </div>
                <button className='text-dark bg-white rounded-xl py-3 w-full mt-4 hover:bg-dark hover:text-white duration-150'>
                    Show Results
                </button>
            </div>
        </div>
    )
}

export default SearchForm
