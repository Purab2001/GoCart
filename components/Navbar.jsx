"use client";
import {
  PackageIcon,
  Search,
  ShoppingCart,
  ShoppingCartIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useUser, useClerk, UserButton, Protect } from "@clerk/nextjs";

const Navbar = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const router = useRouter();

  const [search, setSearch] = useState("");
  const cartCount = useSelector((state) => state.cart.total);

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/shop?search=${search}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm transition-all duration-300">
      <div className="mx-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto py-4">
          <Link
            href="/"
            className="relative text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 group"
          >
            <span className="text-emerald-500 transition-colors group-hover:text-emerald-600">eazy</span>cart
            <span className="text-emerald-500 text-5xl leading-0">.</span>
            <Protect plan="plus">
              <p className="absolute text-[10px] font-bold tracking-widest uppercase -top-1 -right-8 px-2.5 py-0.5 rounded-full flex items-center text-emerald-700 bg-emerald-100 shadow-sm border border-emerald-200">
                plus
              </p>
            </Protect>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-6 lg:gap-10 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-amber-600 transition-colors">Shop</Link>
            <Link href="/about" className="hover:text-amber-600 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-amber-600 transition-colors">Contact</Link>

            <form
              onSubmit={handleSearch}
              className="hidden xl:flex items-center w-64 text-sm gap-2 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-full focus-within:ring-4 focus-within:ring-slate-100 focus-within:border-slate-300 transition-all shadow-inner"
            >
              <Search size={16} className="text-slate-400 group-focus-within:text-slate-600" />
              <input
                className="w-full bg-transparent outline-none text-slate-800 placeholder-slate-400 font-medium"
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
            </form>

            <Link
              href="/cart"
              className="relative flex items-center gap-2 text-slate-700 hover:text-amber-600 transition-colors group"
            >
              <div className="relative p-2 bg-slate-100 rounded-full group-hover:bg-amber-50 transition-colors">
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                  <button className="absolute -top-1 -right-1 text-[10px] font-bold text-white bg-red-500 size-5 flex items-center justify-center rounded-full shadow-sm ring-2 ring-white">
                    {cartCount}
                  </button>
                )}
              </div>
              <span className="hidden lg:block font-semibold">Cart</span>
            </Link>

            {!user ? (
              <button
                onClick={openSignIn}
                className="px-8 py-2.5 bg-slate-900 hover:bg-slate-800 font-semibold transition-all text-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
              >
                Login
              </button>
            ) : (
              <div className="border-l border-slate-200 pl-6 lg:pl-10">
                <UserButton>
                  <UserButton.MenuItems>
                    <UserButton.Action
                      labelIcon={<PackageIcon size={16} />}
                      label="My Orders"
                      onClick={() => router.push("/orders")}
                    ></UserButton.Action>
                  </UserButton.MenuItems>
                </UserButton>
              </div>
            )}
          </div>

          {/* Mobile User Button  */}
          <div className="sm:hidden flex items-center gap-4">
             <Link
              href="/cart"
              className="relative p-2 bg-slate-100 rounded-full text-slate-700"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                 <button className="absolute -top-1 -right-1 text-[10px] font-bold text-white bg-red-500 size-4.5 flex items-center justify-center rounded-full shadow-sm ring-2 ring-white">
                    {cartCount}
                 </button>
              )}
            </Link>

            {user ? (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Action
                    labelIcon={<ShoppingCartIcon size={16} />}
                    label="Cart"
                    onClick={() => router.push("/cart")}
                  ></UserButton.Action>
                  <UserButton.Action
                    labelIcon={<PackageIcon size={16} />}
                    label="My Orders"
                    onClick={() => router.push("/orders")}
                  ></UserButton.Action>
                </UserButton.MenuItems>
              </UserButton>
            ) : (
              <button
                onClick={openSignIn}
                className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-sm font-semibold transition text-white rounded-full shadow-sm"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
