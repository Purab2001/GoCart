'use client'
import Title from './Title'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const BestSelling = () => {

    const displayQuantity = 8
    const products = useSelector(state => state.product.list)

    return (
        <div className='px-6 my-32 max-w-7xl mx-auto'>
            <Title title='Best Sellers' description={`Discover our most loved products. Explore the top ${products.length < displayQuantity ? products.length : displayQuantity} choices from our community.`} href='/shop' />
            <div className='mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-12 sm:gap-8 xl:gap-10 justify-items-center'>
                {products.slice().sort((a, b) => b.rating.length - a.rating.length).slice(0, displayQuantity).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default BestSelling