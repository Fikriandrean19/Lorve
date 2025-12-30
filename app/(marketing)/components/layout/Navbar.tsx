

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Image from "next/image"


const menu = [
  { label: "Home", href: "/" },
  { label: "Mercedes-Benz", href: "/home/mercedes" },
  { label: "Toyota", href: "/home/Toyota" },
]

export default function Navbar() {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState (false);

  const pathname = usePathname()

  const isTransparent = pathname === "/"

  return (
  <>
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full transition-colors duration-300",
        isTransparent ? "bg-transparent" : "bg-white shadow-sm"
      )}
    >
      <div
        className={clsx(
          "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4 font-quicksand",
          isTransparent ? "text-white" : "text-gray-900"
        )}
      >

        <Link href="/" className="flex items-center h-10 ">
            <Image
                src="/assets/hero/logo.png"
                alt="LORVE Logo"
                width={50}
                height={20}
                className="h-auto w-auto"
                priority
            />
        </Link>


        <nav className="hidden md:flex gap-8">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm font-medium transition",
                isTransparent
                  ? "text-[#E5E5E5] hover:opacity-80"
                  : "text-gray-700 hover:text-black"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>


        <Button className="hidden md:inline-flex bg-[#C2824D] text-white hover:bg-[#B1723A]">
          Get the App
        </Button>


        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <HiOutlineMenu />
        </button>
      </div>
    </header>


    {isMobileMenuOpen && (
      <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden">
        <button
          className="absolute top-6 right-6 text-2xl text-white"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <HiX />
        </button>

        <nav className="flex h-full flex-col items-center justify-center gap-8 text-white">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/home/mercedes" onClick={() => setMobileMenuOpen(false)}>Mercedes</Link>
          <Link href="/home/Toyota" onClick={() => setMobileMenuOpen(false)}>Toyota</Link>

          <Button className="mt-6 w-3/4 bg-[#C2824D] text-white hover:bg-[#B1723A]">
            Get the App
          </Button>
        </nav>
      </div>
    )}
  </>
)}
