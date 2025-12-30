import { GooglePlayBadge } from "../icons/GooglePlayBadges";
import { AppStoreBadge } from "../icons/AppstoreBadges";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-32 py-16">
        
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          <div className="space-y-4 max-w-xl">
            <h3 className="text-2xl font-semibold tracking-wide">
              LORVÉ
            </h3>

            <p className=" text-gray-600 text-base sm:text-lg md:text-xl font-[archivo]">
              Design amazing digital experiences that create more happy in the world.
            </p>

            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-gray-600 font-semibold">
              <Link href="/" className="hover:text-black transition">Home</Link>
              <Link href="/home/mercedes" className="hover:text-black transition">Mercedes Benz</Link>
              <Link href="/home/Toyota" className="hover:text-black transition">Toyota</Link>
              <Link href="/home/terms" className="hover:text-black transition">Terms & Conditions</Link>
            </nav>
          </div>


          <div className="space-y-4">
            <p className="font-semibold text-[#9c6332]">Get the app</p>

            <div className="flex flex-row md:flex-col gap-4">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-gray-300" />
      </div>
    </footer>
  );
}
