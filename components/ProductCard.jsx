'use client'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ product }) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    // calculate the average rating of the product
    const rating = Math.round(product.rating.reduce((acc, curr) => acc + curr.rating, 0) / product.rating.length);

    return (
        <Link href={`/product/${product.id}`} className='group max-xl:mx-auto block hover:-translate-y-1 transition-all duration-300'>
            <div className='bg-[#F8F9FA] h-48 sm:w-64 sm:h-72 rounded-3xl flex items-center justify-center relative overflow-hidden group-hover:shadow-xl transition-shadow border border-slate-100'>
                <Image width={500} height={500} className='max-h-36 sm:max-h-48 w-auto group-hover:scale-110 transition duration-500 drop-shadow-md mix-blend-multiply' src={product.images[0]} alt="" />
                {product.rating.length > 5 && (
                    <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-slate-800 shadow-sm border border-white">🔥 Hot</div>
                )}
            </div>
            <div className='flex justify-between gap-3 text-sm pt-4 px-2 sm:max-w-64'>
                <div className="flex-1">
                    <p className='font-semibold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1'>{product.name}</p>
                    <div className='flex gap-0.5 mt-1.5'>
                        {Array(5).fill('').map((_, index) => (
                            <StarIcon key={index} size={14} className='text-transparent' fill={rating >= index + 1 ? "#F59E0B" : "#E5E7EB"} />
                        ))}
                    </div>
                </div>
                <p className='font-bold text-lg text-slate-900 tracking-tight'>{currency}{product.price}</p>
            </div>
        </Link>
    )
}

export default ProductCard