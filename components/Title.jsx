'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Title = ({ title, description, visibleButton = true, href = '' }) => {

    return (
        <div className='flex flex-col items-center mb-4'>
            <h2 className='text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight'>{title}</h2>
            <Link href={href} className='flex flex-col items-center gap-4 text-sm text-slate-500 mt-4 group'>
                <p className='max-w-xl text-center leading-relaxed'>{description}</p>
                {visibleButton && (
                    <button className='text-slate-900 font-semibold flex items-center gap-1.5 border-b-2 border-slate-900 pb-0.5 group-hover:text-amber-600 group-hover:border-amber-600 transition-colors'>
                        Explore Collection <ArrowRight size={16} className='group-hover:translate-x-1 transition-transform' />
                    </button>
                )}
            </Link>
        </div>
    )
}

export default Title