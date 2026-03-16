'use client'

import { addToCart } from "@/lib/features/cart/cartSlice";
import { StarIcon, TagIcon, EarthIcon, CreditCardIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = ({ product }) => {

    const productId = product.id;
    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$';

    const cart = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const router = useRouter()

    const [mainImage, setMainImage] = useState(product.images[0]);

    const addToCartHandler = () => {
        dispatch(addToCart({ productId }))
    }

    const averageRating = product.rating.reduce((acc, item) => acc + item.rating, 0) / product.rating.length;
    
    return (
        <div className="flex max-lg:flex-col gap-16">
            <div className="flex max-sm:flex-col-reverse gap-4">
                <div className="flex sm:flex-col gap-4">
                    {product.images.map((image, index) => (
                        <div key={index} onClick={() => setMainImage(product.images[index])} className={`bg-slate-50 border border-slate-100 flex items-center justify-center size-24 shadow-sm rounded-xl group cursor-pointer transition-all ${mainImage === image ? 'ring-2 ring-emerald-500' : 'hover:scale-105'}`}>
                            <Image src={image} className="group-active:scale-95 transition-transform object-contain" alt="" width={55} height={55} />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center h-100 sm:size-113 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm p-4">
                    <Image src={mainImage} alt="" className="object-contain" width={320} height={320} />
                </div>
            </div>
            <div className="flex-1">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900">{product.name}</h1>
                <div className='flex items-center mt-3'>
                    {Array(5).fill('').map((_, index) => (
                        <StarIcon key={index} size={16} className='text-transparent' fill={averageRating >= index + 1 ? "#10b981" : "#e2e8f0"} />
                    ))}
                    <p className="text-sm ml-3 text-slate-500">{product.rating.length} Reviews</p>
                </div>
                <div className="flex items-start my-6 gap-3 text-2xl font-semibold text-slate-800">
                    <p> {currency}{product.price} </p>
                    <p className="text-xl text-slate-500 line-through">{currency}{product.mrp}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                    <TagIcon size={14} />
                    <p>Save {((product.mrp - product.price) / product.mrp * 100).toFixed(0)}% right now</p>
                </div>
                <div className="flex items-end gap-5 mt-10">
                    {
                        cart[productId] && (
                            <div className="flex flex-col gap-3">
                                <p className="text-lg text-slate-800 font-semibold">Quantity</p>
                                <Counter productId={productId} />
                            </div>
                        )
                    }
                        <button onClick={() => !cart[productId] ? addToCartHandler() : router.push('/cart')} className="bg-slate-900 text-white px-10 py-3.5 text-sm font-semibold rounded-xl hover:-translate-y-0.5 shadow hover:shadow-lg hover:bg-slate-800 active:scale-95 transition-all">
                        {!cart[productId] ? 'Add to Cart' : 'View Cart'}
                    </button>
                </div>
                <hr className="border-gray-300 my-5" />
                <div className="flex flex-col gap-4 text-slate-500">
                    <p className="flex gap-3"> <EarthIcon className="text-slate-400" /> Free shipping worldwide </p>
                    <p className="flex gap-3"> <CreditCardIcon className="text-slate-400" /> 100% Secured Payment </p>
                    <p className="flex gap-3"> <UserIcon className="text-slate-400" /> Trusted by top brands </p>
                </div>

            </div>
        </div>
    )
}

export default ProductDetails