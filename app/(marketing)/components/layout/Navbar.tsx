"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { HiOutlineMenu, HiX } from "react-icons/hi"
import Image from "next/image"

const menu = [
  { label: "Home", href: "/" },
  { label: "Mercedes-Benz", href: "/home/mercedes" },
  { label: "Toyota", href: "/home/Toyota" },
]

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const pathname = usePathname()
  const isHome = pathname === "/"
  const isTransparent = isHome && !scrolled

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
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            <HiOutlineMenu />
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <button
            className="absolute top-5 right-5 text-2xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            <HiX />
          </button>

          <nav className="flex h-full flex-col items-center justify-center gap-8 text-lg font-medium">
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

          <div className="fixed bottom-0 left-0 w-full px-4 pb-6">
            <Button className="w-full rounded-full bg-[#C2824D] py-5 text-white font-semibold hover:bg-[#B1723A]">
              Get the App
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
