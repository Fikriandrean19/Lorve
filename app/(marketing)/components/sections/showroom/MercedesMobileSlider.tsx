"use client"

import Image from "next/image"

const images = [
  "/assets/mercedes/mercedes.png",
  "/assets/mercedes/mercedes1.png",
  "/assets/mercedes/mercedes2.png",
]

export default function MercedesMobileSlider() {
  return (
    <section className="md:hidden py-6">
      <div className="flex overflow-x-auto snap-x snap-mandatory">
        {images.map((img) => (
          <div
            key={img}
            className="min-w-full snap-center flex justify-center"
          >
            <Image
              src={img}
              alt="Mercedes"
              width={360}
              height={260}
              className="object-contain"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  )
}
