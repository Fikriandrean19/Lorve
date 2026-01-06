"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { HiOutlineMenu, HiX } from "react-icons/hi"
import Image from "next/image"
import { AppStoreBadge } from "../icons/AppstoreBadges"
import { GooglePlayBadge } from "../icons/GooglePlayBadges"

const menu = [
  { label: "Home", href: "/" },
  { label: "Mercedes-Benz", href: "/home/mercedes" },
  { label: "Toyota", href: "/home/Toyota" },
]

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname()
  const TransparentRoute = new Set ( ["/", "/home/detail"])
  const isTransparentRoute = TransparentRoute.has(pathname)
  const isTransparent = isTransparentRoute && !scrolled

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

          <Link href="/" className="flex items-center h-10">
            <Image
              src="/assets/hero/logoBaru.png"
              alt="LORVE Logo"
              width={50}
              height={20}
              priority
            />
          </Link>

          <nav className="hidden md:flex gap-12">
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
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            <HiOutlineMenu />
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-60 bg-white md:hidden">
          <div className="border-b h-20  ">
            <Link href="/" className="flex items-center p-4">
            <Image
              src="/assets/hero/logoBaru.png"
              alt="LORVE Logo"
              width={60}
              height={20}
              priority
            />
          </Link>

          <button
            className="absolute top-8 right-5 text-4xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            <HiX />
          </button>
          </div>

          <nav className="flex h-full p-2 mt-8 flex-col gap-12 text-xl font-medium">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
              
            ))}
          </nav>

          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ">
            <Button className="bg-[#C2824D] py-5 px-20 text-white font-semibold hover:bg-[#B1723A]">
              Get the App
            </Button>

            <div className="flex flex-cols-2 gap-2">
            <span className="p-4">
            <AppStoreBadge />
            </span>
            <span className="p-4">
            <GooglePlayBadge />
            </span>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
