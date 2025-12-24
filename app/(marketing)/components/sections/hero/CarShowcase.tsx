"use client";

import { useState } from "react";

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
    <section className="w-full bg-white overflow-hidden">

      <div className="max-w-6xl mx-auto text-center pt-24 px-6">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          A Symphony of
          <br />
          <span className="font-bold">Power & Elegance</span>
        </h1>

        <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
          each vehicle embodies craftsmanship, comfort, and class beyond expectation
        </p>

        <button className="mt-8 text-[#C2824D] font-medium hover:underline">
          See all models
        </button>
      </div>


      <div
        className="relative mt-20 h-[820px] w-full bg-center bg-cover transition-all duration-700"
        style={{
          backgroundImage: `url('${cars[current].image}')`,
        }}
      >

        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />


        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-6xl mx-auto w-full px-6 pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10 text-white">
            

            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-normal leading-snug">
                {cars[current].brand}
                <br />
                {cars[current].model}
              </h2>

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

                <button className="text-[#C2824D] font-medium hover:underline">
                  View Details
                </button>
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
