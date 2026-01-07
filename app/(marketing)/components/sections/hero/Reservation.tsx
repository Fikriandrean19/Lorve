"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AppStoreBadge } from "@/app/(marketing)/components/icons/AppstoreBadges"
import { GooglePlayBadge } from "@/app/(marketing)/components/icons/GooglePlayBadges"
import { PhoneMockup } from "@/app/(marketing)/components/icons/PhoneMockup";
import { CalendarDays } from "lucide-react";

export default function ReservationSection() {
  return (
    <section className="w-full py-24 bg-linear-to-b from-[#F5EDDF] to-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight font-[quicksand]">
          Effortless Reservation
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl font-archivo">
          Real-time availability for your preferred date, time, and model —
          plan your journey in seconds.
        </p>

        <Button
          variant="outline"
          className="mt-6 h-12 px-6 rounded-full gap-2 border-gray-300 bg-white hover:bg-gray-100"
        >
          <img
          src="/assets/icon/calendar Solid.svg"
          alt="Calendar"
          width={20}
          height={20}
          className=""
         />
          Check Schedule
        </Button>

        <div className="relative mt-6 h-100 md:h-130 w-full overflow-hidden flex justify-center">
        <div className="absolute p-6">
          <Image 
          width={400}
          height={700}
          src="/assets/reservation/Iphone UI.png"
          alt="Phone"
          />
        </div>
        </div>

        <div className="mt-8 flex gap-5" >
        <AppStoreBadge />
          <GooglePlayBadge />
        </div>  
        </div>
        </section>
  );
}
