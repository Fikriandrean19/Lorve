import Image from "next/image";
import { GooglePlayBadge } from "../icons/GooglePlayBadges";
import { AppStoreBadge } from "../icons/AppstoreBadges";

export default function FooterTop() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 p-32 mt-8 bg-[#F5F5F5]">

      <div className="max-w-md space-y-6">
        <h3 className="text-2xl font-semibold tracking-wide">
          LORVÉ
        </h3>

        <p className="text-gray-600 text-[24px] ">
          Design amazing digital experiences that create more happy in the world.
        </p>

        <nav className=" flex flex-wrap gap-x-6 gap-y-4 text-gray-600 font-semibold shadow-accent">
          <a href="#">Home</a>
          <a href="#">Mercedez Benz</a>
          <a href="#">Toyota</a>
          <a href="#">Terms & Conditions</a>
        </nav>
      </div>

      <div className="space-y-4">
        <p className=" font-semibold text-[#9c6332]">Get the app</p>

        <div className="flex flex-col gap-4">
          <AppStoreBadge/>

          <GooglePlayBadge />
        </div>
      </div>
    </div>
  );
}
