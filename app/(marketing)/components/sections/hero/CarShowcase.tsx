"use client";

import { useState } from "react";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const cars = [
  {
    brand: "Mercedes Benz",
    model: "Sprinter",
    imageMobile: "/assets/slider/Model Unit 1-1.webp",
    imageDesktop: "/assets/slider/Model Unit 1.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur dolore doloribus magnam blanditiis dolor.",
  },
  {
    brand: "Toyota Hiace",
    model: "Premio",
    imageMobile: "/assets/slider/Model Unit 2-1.webp",
    imageDesktop: "/assets/slider/Model Unit 2.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur dolore doloribus magnam blanditiis dolor.",
  },
];

export default function CarShowcase() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % cars.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? cars.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="w-full h-full overflow-hidden">
      <div className="relative z-20 bg-white pt-14 md:pt-24 md:pb-28 text-center">
        <h1 className="text-5xl font-bold font-[quicksand]">
          <span className="hidden md:block">
            A Symphony of<br />Power & Elegance
          </span>
          <span className="md:hidden text-3xl block">
            A Symphony of power <br /> & Elegance
          </span>
        </h1>

        <p className="mt-6 text-gray-500 px-2">
          each vehicle embodies craftsmanship, comfort, and class beyond expectation
        </p>

        <Link href="/home/detail">
          <button className="mt-8 text-[#C2824D] hover:text-[#9c6332] cursor-pointer transition duration-100 font-semibold">
            See All Models
          </button>
        </Link>
      </div>

      <div className="relative h-160 md:h-170 overflow-hidden">
        <div className="absolute inset-0 md:hidden">
          <Image
            src={cars[current].imageMobile}
            alt="Slider mobile"
            fill
            className={`absolute inset-0 object-cover transition-opacity duration-300 ease-in-out ${
              isAnimating ? "opacity-60" : "opacity-100"
            }`}
          />
        </div>

        <div className="absolute inset-0 hidden md:block">
          <Image
            src={cars[current].imageDesktop}
            alt="Slider desktop"
            fill
            className={`absolute inset-0 object-cover transition-opacity duration-300 ease-in-out ${
              isAnimating ? "opacity-60" : "opacity-100"
            }`}
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-6xl mx-auto w-full px-6 pb-16 flex flex-col md:flex-row md:items-end md:justify-between md:gap-10 text-white">
            <div className="flex flex-col gap-0 max-w-md font-[quicksand]">
              <h1 className="text-5xl mb-16 font-semibold">
                <span className="hidden md:block">
                  {cars[current].brand}
                  <br />
                  {cars[current].model}
                </span>
                <span className="block text-3xl md:hidden">
                  {cars[current].brand} {cars[current].model}
                </span>
              </h1>

              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="hidden w-12 h-12 rounded-full border border-white/40 shadow-[0_8px_20px_rgba(0,0,0,0.35)] md:flex items-center justify-center text-white hover:bg-white/20 transition backdrop-blur-sm"
                >
                  <BsArrowLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="hidden w-12 h-12 rounded-full border border-white/40 shadow-[0_8px_20px_rgba(0,0,0,0.35)] md:flex items-center justify-center text-white hover:bg-white/20 transition backdrop-blur-sm"
                >
                  <BsArrowRight />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 md:p-6 max-w-md">
              <p className="text-white leading-relaxed">
                {cars[current].description}
              </p>

              <div className="flex items-center gap-6 mt-6">
                <button className="bg-white text-black px-6 py-3 rounded-full font-medium outline-6 outline-transparent hover:outline-white transition">
                  Book Now
                </button>

                <Link href="/">
                  <button className="text-[#C2824D] font-medium hover:underline">
                    View Details
                  </button>
                </Link>
              </div>

              <div className="flex md:hidden items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-white/40 shadow-[0_8px_20px_rgba(0,0,0,0.35)] flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  <BsArrowLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-white/40 shadow-[0_8px_20px_rgba(0,0,0,0.35)] flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </div>

         <div className="hidden md:flex justify-center pb-6">
          <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/40 backdrop-blur-sm">
            {cars.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition ${
                  index === current ? "bg-black" : "bg-black/30"
                }`}
              />
            ))}
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
