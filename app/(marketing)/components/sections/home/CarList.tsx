"use client"

import CarCard from "./CarCard"

export default function CarList() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-6 md:py-4">
      <div className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 border border-white/30 bg-[#fafafa]">
          <CarCard 
            brand="Mercedes Benz Sprinter"
            image="/assets/home/Sprint.png"
            price="IDR 15 Juta"
            href="/home/mercedes"
            
          />

          <CarCard
            brand="Toyota Hiace Premio"
            image="/assets/home/Toyota.png"
            price="IDR 8 Juta"
            href="/home/Toyota"
          />
        </div>
      </div>
    </section>
  )
}
