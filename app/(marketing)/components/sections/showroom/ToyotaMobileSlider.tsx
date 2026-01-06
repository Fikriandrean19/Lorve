"use client"

import Image from "next/image"
import { useRef, useState } from "react"

const images = [
  "/assets/putar/05.png",
  "/assets/putar/06.png",
  "/assets/putar/07.png",
]

export default function MercedesMobileSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

const handleScroll = () => {
  if (!sliderRef.current) return

  const slider = sliderRef.current
  const slides = Array.from(slider.children)

  const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2

  let closestIndex = 0
  let closestDistance = Infinity

  slides.forEach((slide, index) => {
    const slideEl = slide as HTMLElement
    const slideCenter =
      slideEl.offsetLeft + slideEl.offsetWidth / 2

    const distance = Math.abs(sliderCenter - slideCenter)

    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = index
    }
  })

  setCurrent(closestIndex)
}



  return (
    <section className="md:hidden ">
      <div 
      ref={sliderRef}
      onScroll={handleScroll}
      className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-4">
        {images.map((img) => (
          <div
            key={img}
            className=" w-[85%] shrink-0 snap-center flex justify-center"
          >
            <Image
              src={img}
              alt="Mercedes"
              width={360}
              height={260}
              className="object-contain "
              priority
            />
          </div>
        ))}
      </div>
      

      <div className="flex justify-center">
        <div className="flex items-center gap-3 px-4 py-2 -translate-y-4 rounded-full bg-[#BFBFBF] backdrop-blur-sm">
          {images.map((_, index) => (
            <span
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-black/20" : "bg-white/40"
            }`}
            >
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
