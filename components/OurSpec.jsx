import React from 'react'
import Title from './Title'
import { ourSpecsData } from '@/assets/assets'

const OurSpecs = () => {

    return (
        <div className='px-6 my-32 max-w-6xl mx-auto'>
            <Title visibleButton={false} title='Why Choose EazyCart' description="We offer top-tier service and convenience to ensure your shopping experience is smooth, secure and completely hassle-free." />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 mt-20'>
                {
                    ourSpecsData.map((spec, index) => {
                        return (
                            <div className='relative h-56 px-8 flex flex-col items-center justify-center w-full text-center rounded-3xl group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl' style={{ backgroundColor: spec.accent + '10', border: `1px solid ${spec.accent}30` }} key={index}>
                                <div className='absolute -top-8 text-white size-16 flex items-center justify-center rounded-2xl group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg' style={{ backgroundColor: spec.accent }}>
                                    <spec.icon size={26} strokeWidth={1.5} />
                                </div>
                                <h3 className='text-slate-900 font-bold text-lg mt-4'>{spec.title}</h3>
                                <p className='text-sm text-slate-600 mt-3 leading-relaxed'>{spec.description}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default OurSpecs