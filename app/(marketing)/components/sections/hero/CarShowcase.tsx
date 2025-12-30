"use client";

import { useState } from "react";
import Link from "next/link";

const cars = [
  {
    brand: "Mercedes Benz",
    model: "Sprinter",
    image: "/assets/hero/carShowcase.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur dolore doloribus magnam blanditiis dolor.",
  },
  {
    brand: "Toyota Hiace",
    model: "Premio",
    image: "/assets/hero/carShowcase2.jpeg",
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
        setIsAnimating(false);
        setCurrent((prev) => (prev + 1) % cars.length);
    }, 300);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
        setIsAnimating(false);
        setCurrent((prev) => (prev === 0 ? cars.length - 1 : prev - 1));
    }, 300);
  };

  return (
    <section className="w-ful overflow-hidden">

        <div className="relative z-20 bg-white pt-26 pb-30 text-center">
          <h1 className="text-5xl font-semibold font-[quicksand]">
            
            <span className="hidden md:block">
            A Symphony of<br />Power & Elegance
            </span>
          <span className=" block md:hidden text-4xl">
            A Symphony of power <br /> & Elegance
          </span>
          </h1>

          <p className="mt-6 text-gray-500">
            each vehicle embodies craftsmanship, comfort, and class beyond expectation
          </p>
          <Link href="/home/detail">
          <button className="mt-8 text-orange-500 hover:text-[#9c6332] cursor-pointer transition duration-100">
            See all models
          </button>
          </Link>
        </div>



      <div
        className="relative h-150 overflow-hidden transition-all duration-700">
          <img src={cars[current].image} className="absolute inset-0 w-full h-full object-cover"/>

              <div className="absolute inset-0 backdrop-blur-x" />
              <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-transparent"/>

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-6xl mx-auto w-full px-6 pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10 text-white">
            
            <div className="flex flex-col gap-0 max-w-md">
              <h1 className="text-5xl font-semibold leading-snug">
                {cars[current].brand}
                <br />
                {cars[current].model}
              </h1>

              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-white/70 text-white hover:bg-white/20 transition"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-white/70 text-white hover:bg-white/20 transition"
                >
                  →
                </button>
              </div>
            </div>


            <div className="flex flex-col items-start gap-5 max-w-md">
              <p className="text-gray-300 leading-relaxed">
                {cars[current].description}
              </p>

              <div className="flex items-center gap-6">
                <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
                  Book Now
                </button>

                <Link href= "/">
                <button className="text-[#C2824D] font-medium hover:underline">
                  View Details
                </button>
                </Link>
              </div>
            </div>
          </div>


          <div className="flex justify-center gap-3 pb-6">
            {cars.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition ${
                  index === current ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
