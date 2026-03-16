"use client";
import { assets } from "@/assets/assets";
import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CategoriesMarquee from "./CategoriesMarquee";

const Hero = () => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || "$";

  return (
    <div className="mx-6">
      <div className="flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10 relative">
        <div className="relative flex-1 flex flex-col rounded-3xl xl:min-h-[500px] group overflow-hidden shadow-xl border border-slate-100/50">
          {/* Background Image */}
          <Image
            src={assets.hero_light_tech}
            alt="Hero Background"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
          {/* Subtle Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-linear-to-r from-white/80 via-white/50 to-transparent"></div>
          
          <div className="relative z-10 p-8 sm:p-14 h-full flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/60 text-slate-800 pr-4 p-1 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-white/40 w-fit transition-transform hover:-translate-y-1">
              <span className="bg-slate-900 px-3 py-1 rounded-full text-white tracking-wide text-[10px] sm:text-xs">
                NEW
              </span>{" "}
              Free Shipping on Orders Above $50!{" "}
              <ChevronRightIcon
                className="group-hover:ml-1 transition-all p-0 opacity-70"
                size={16}
              />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] mt-6 mb-4 font-bold text-slate-900 max-w-lg tracking-tight">
              Gadgets you'll love. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-900 to-slate-500 font-semibold">Prices you'll trust.</span>
            </h2>
            <div className="text-slate-700 font-medium mt-4 sm:mt-8 flex items-end gap-2">
              <p className="text-sm mb-1 opacity-80">Starting from</p>
              <p className="text-4xl sm:text-5xl font-bold tracking-tighter text-slate-900">{currency}4.90</p>
            </div>
            <button className="bg-slate-900 text-white text-sm font-semibold py-3.5 px-8 sm:py-4 sm:px-12 mt-8 sm:mt-10 rounded-full hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300 w-fit flex items-center gap-2">
              SHOP COLLECTION <ArrowRightIcon size={16} className="-rotate-45" />
            </button>
          </div>
        </div>

        {/* Side panels */}
        <div className="flex flex-col md:flex-row xl:flex-col gap-6 w-full xl:max-w-[380px]">
          <Link
            href="/shop"
            className="flex-1 relative overflow-hidden rounded-3xl p-8 group cursor-pointer shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
          >
            <div className="absolute inset-0 bg-linear-to-br from-orange-100 to-amber-50 transition-colors group-hover:from-orange-200 group-hover:to-orange-100"></div>
            <div className="relative z-10 flex flex-col justify-center h-full">
              <p className="text-3xl font-bold text-slate-900 max-w-[150px] leading-tight tracking-tight">
                Trending <br /> Products
              </p>
              <p className="flex items-center gap-2 mt-6 text-slate-700 font-semibold text-sm tracking-wide">
                View collection
                <ArrowRightIcon
                  className="group-hover:translate-x-2 transition-transform opacity-70"
                  size={16}
                />
              </p>
            </div>
            <Image 
              className="absolute right-[-15px] bottom-[-20px] w-44 sm:w-52 md:w-56 transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl" 
              src={assets.hero_product_img1} 
              alt="Trending Products" 
            />
          </Link>
          <Link
            href="/shop"
            className="flex-1 relative overflow-hidden rounded-3xl p-8 group cursor-pointer shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-100 to-indigo-50 transition-colors group-hover:from-blue-200 group-hover:to-blue-100"></div>
            <div className="relative z-10 flex flex-col justify-center h-full">
              <p className="text-3xl font-bold text-slate-900 max-w-[150px] leading-tight tracking-tight">
                Special <br /> Offers 20%
              </p>
              <p className="flex items-center gap-2 mt-6 text-slate-700 font-semibold text-sm tracking-wide">
                Claim discount
                <ArrowRightIcon
                  className="group-hover:translate-x-2 transition-transform opacity-70"
                  size={16}
                />
              </p>
            </div>
            <Image 
              className="absolute right-[-10px] bottom-[-15px] w-44 sm:w-52 md:w-56 transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl" 
              src={assets.hero_product_img2} 
              alt="Special Offers" 
            />
          </Link>
        </div>
      </div>
      <CategoriesMarquee />
    </div>
  );
};

export default Hero;
