"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const menu=[
    {label : 'Home', href: '/'},
    {label : 'Mercedes-Benz', href: '/Mercedes'},
    {label : 'Toyota', href: '/Toyota'},
]

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 z-50 w-full">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4
             transparent">
                <Link href="/" 
                className="text-sm font-medium text-gray-200">
                    LORVE
                </Link>

                <nav className="hidden md:flex gap-8 text-gray-200">
                    {menu.map((item) => (
                        <Link 
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium text-gray-200 hover:opacity-80 transition">
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <Button variant="secondary" className="hidden md:inline-flex bg-[#C2824D] text-white hover:bg-[#B1723A]"> Get App</Button>

                <button 
                    onClick={() => setOpen(true)}
                    className="md:hidden text-2xl text-white"
                    aria-label="Open Menu"
                    >
                    &#9776;
                </button>
            </div>

            {open && <MobileMenu onClose={() => setOpen(false)} />}
        </header>
    );
}

function MobileMenu({onClose}: {onClose: () => void}) {
    return (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm ">
            <button
                onClick={onClose}
                className="absolute right-6 top-6 text-2xl text-white"
                aria-label="Close Menu"
                >
                x
                </button>

            <div className="flex h-full flex-col justify-between px-6 py-24 text-white">
                <nav className="flex flex-col gap-8 text-lg">
                    {menu.map((item) => (
                        <Link 
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className="hover:opacity-80 transition">
                            {item.label}
                        </Link>
                    ))}
                </nav>

            <div className="flex flex-col gap-6">
                <Button 
                onClick={onClose}
                className="w-full bg-[#C2824D] text-white hover:bg-[#9c6332]">
                    Get App
                </Button>

                <div className="flex justify-center gap-4">
                    <img src="/assets/appstore.png" alt="Appstore" className="h-10" />
                    <img src="/assets/playstore.png" alt="Playstore" className="h-10" />
                </div>
            </div>
            </div>
        </div>
    )
}