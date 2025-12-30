"use client";

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
          <CalendarDays className="w-4 h-4 " />
          Check Schedule
        </Button>

        <div className="relative mt-6 h-105 w-full overflow-hidden flex justify-center">
        <div className="absolute -bottom-55">
            <PhoneMockup>
            <div className="h-full flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-lg font-semibold">Reserve Your Car</h3>
                <p className="mt-2 text-sm text-gray-500">
                Pick a date, time, and model in seconds.
                </p>

                <button className="mt-6 bg-black text-white px-4 py-2 rounded-full text-sm">
                Get Started
                </button>
            </div>
            </PhoneMockup>
        </div>
        </div>

        <div className="mt-10 flex gap-8" >
        <AppStoreBadge />
          <GooglePlayBadge />
        </div>  
        </div>
        </section>
  );
}
