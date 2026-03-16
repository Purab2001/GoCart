import React from 'react'
import Title from './Title'

const Newsletter = () => {
    return (
        <div className='flex flex-col items-center mx-4 my-36'>
            <Title title="Join Newsletter" description="Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week." visibleButton={false} />
            <div className='flex bg-white text-sm p-1.5 rounded-full w-full max-w-xl mt-8 shadow-sm border border-slate-200 focus-within:border-slate-400 focus-within:ring-4 focus-within:ring-slate-100 transition-all duration-300'>
                <input className='flex-1 pl-6 bg-transparent outline-none text-slate-800 placeholder-slate-400 font-medium' type="text" placeholder='Enter your email address' />
                <button className='font-semibold bg-slate-900 text-white px-8 py-3.5 rounded-full hover:bg-slate-800 hover:shadow-md active:scale-95 transition-all duration-300'>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter