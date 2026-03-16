'use client'
import ProductCard from "@/components/ProductCard"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { MailIcon, MapPinIcon } from "lucide-react"
import Loading from "@/components/Loading"
import Image from "next/image"
import axios from "axios"
import toast from "react-hot-toast"

export default function StoreShop() {

    const { username } = useParams()
    const [products, setProducts] = useState([])
    const [storeInfo, setStoreInfo] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchStoreData = async () => {
        try {
            const {data} = await axios.get(`/api/store/data?username=${username}`)
            setStoreInfo(data.store)
            setProducts(data.store.Product)
        } catch (error) {
            toast.error(error?.response?.data?.error || error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchStoreData()
    }, [])

    return !loading ? (
        <div className="min-h-[70vh] mx-6">

            {/* Store Info Banner */}
            {storeInfo && (
                <div className="max-w-7xl mx-auto bg-white border border-slate-200 shadow-sm rounded-2xl p-6 md:p-10 mt-6 flex flex-col md:flex-row items-center gap-8">
                    <Image
                        src={storeInfo.logo}
                        alt={storeInfo.name}
                        className="size-32 sm:size-40 object-cover border border-slate-200 rounded-2xl shadow-sm"
                        width={200}
                        height={200}
                    />
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900">{storeInfo.name}</h1>
                        <p className="text-sm font-medium text-slate-500 mt-2 max-w-lg">{storeInfo.description}</p>
                        <div className="text-xs text-slate-500 mt-4 space-y-1"></div>
                        <div className="space-y-3 mt-4 text-sm font-medium text-slate-600">
                            <div className="flex items-center gap-2">
                                <MapPinIcon className="w-4 h-4 text-emerald-500" />
                                <span>{storeInfo.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MailIcon className="w-4 h-4 text-emerald-500" />
                                <span>{storeInfo.email}</span>
                            </div>
                           
                        </div>
                    </div>
                </div>
            )}

            {/* Products */}
            <div className="max-w-7xl mx-auto mb-40 mt-16">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">Store <span className="text-emerald-500">Products</span></h2>
                <div className="grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12 mx-auto">
                    {products.map((product) => <ProductCard key={product.id} product={product} />)}
                </div>
            </div>
        </div>
    ) : <Loading />
}