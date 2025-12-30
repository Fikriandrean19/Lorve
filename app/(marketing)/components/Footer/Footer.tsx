import { GooglePlayBadge } from "../icons/GooglePlayBadges"
import { AppStoreBadge } from "../icons/AppstoreBadges"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-12 lg:px-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row">

          <div className="max-w-xl space-y-4">

            <div className="h-auto w-fit">
              <Image
                src="/assets/hero/logoBaru.png"
                alt="LORVÉ Logo"
                width={60}
                height={30}
                priority
              />
            </div>

            <p className="text-base text-gray-600 sm:text-lg md:text-xl font-[archivo]">
              Design amazing digital experiences that create more happy in the world.
            </p>

            <nav className="flex flex-wrap gap-x-6 gap-y-3 font-semibold text-gray-600">
              <Link href="/" className="transition hover:text-black">Home</Link>
              <Link href="/home/mercedes" className="transition hover:text-black">Mercedes Benz</Link>
              <Link href="/home/Toyota" className="transition hover:text-black">Toyota</Link>
              <Link href="/home/terms" className="transition hover:text-black">Terms & Conditions</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-[#9c6332]">Get the app</p>

            <div className="flex flex-row gap-4 md:flex-col">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-300" />
      </div>
    </footer>
  )
}
