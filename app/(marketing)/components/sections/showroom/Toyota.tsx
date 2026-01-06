"use client"

import Image from "next/image";
import {useRef, useState} from "react"

type Props = {
  images : string[]
}

export default function Toyota({images}: Props) {
  const [index, setIndex] = useState(0)
  const startX = useRef(0)

  const handleStart = (x: number) => {
    startX.current = x
  }

  const handleMove = (x: number) => {
    const delta = x - startX.current

    if (Math.abs(delta) > 10 ) {
      setIndex((prev) => 
      delta > 0 
    ? (prev + 1) % images.length
    : (prev - 1 + images.length) % images.length
    )
    startX.current = x
    }
  }
  

  return (
    <div className="flex items-center justify-center
    cursor-grab active:cursor-grabbing select-none
    min-h-[60svh]
     md:min-h-[calc(100svh-96px)]
    overflow-hidden"
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}>

    <div className="flex flex-col items-center justify-center w-full">
      <Image
        src={images[index]}
        alt="Toyota Hiace"
        width={800}
        height={400}
        className="pointer-events-none object-contain px-8"
        priority
      />
       <img
      src="/assets/icon/360 icon.svg" 
      alt="360 View" 
      className="mb-2 h-8 w-auto"
      />
    </div>
     
    </div>
  );
}

