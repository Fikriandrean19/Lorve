"use client"

import { useState } from "react"
import Image from "next/image"
import { MdOutlineStar } from "react-icons/md"
import { SlPeople } from "react-icons/sl"
import { PiGearFineBold } from "react-icons/pi"
import { RxCross2 } from "react-icons/rx"
import { Plus, Minus } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Card } from "@/components/ui/card"

const images = [
  "/assets/toyota/toyota.png",
  "/assets/toyota/toyota1.png",
  "/assets/toyota/toyota2.png",
  "/assets/toyota/toyota3.png",
]

export default function ToyotaDetail () {

  const [activeImage, setActiveImage] = useState(images[0])

      return (
        <section className="min-h-[calc(100vh-80px)] px-4 py-6 md:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="hidden md:block lg:sticky lg:top-24 self-start">
              <div className="h-90 border rounded-2xl p-6 flex items-center justify-center mb-4">
                <Image
                  src={activeImage}
                  alt="Toyota Hiace"
                  width={400}
                  height={260}
                  className="object-contain"
                  priority
                />
              </div>
    
              <div className="grid grid-cols-4 gap-3">
                {images.map((img) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(img)}
                    className={`border rounded-xl p-2 flex items-center justify-center transition
                      ${
                        activeImage === img
                          ? "border-[#9C5A3C]"
                          : "border-gray-200"
                      }
                    `}
                  >
                    <Image
                      src={img}
                      alt="thumbnail"
                      width={100}
                      height={80}
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
    
            <div className="flex flex-col justify-start">
              <p className="text-sm text-gray-500 mb-2">Luxury Vans</p>
    
              <h1 className="text-3xl font-semibold font-[quicksand] mb-4">
                Toyota Hiace premio
              </h1>
    
              <p className="text-gray-600 mb-4">
                Experience ultimate luxury and comfort with advanced technology and superior performance.
              </p>
    
              <p className="text-gray-600 mb-4">
                Start From{" "}
                <span className="text-2xl font-semibold text-[#9C5A3C]">
                  8 Juta
                </span>
              </p>
    
              <div className="flex items-center gap-1 text-sm mb-6">
                <MdOutlineStar className="text-[#9C5A3C]" size={16} />
                <span>4.8/5 (347 Review)</span>
              </div>
    
              <Accordion
                type="multiple"
                defaultValue={["item-1"]}
                className="space-y-2 font-[archivo]"
              >
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger
                    className="group py-2 flex justify-between items-center text-base font-medium hover:no-underline [&>svg]:hidden"
                  >
                    <span className="font-semibold text-xl">Specification</span>
                    <span>
                      <Plus className="h-4 w-4 group-data-[state=open]:hidden rounded-full border border-[#C2824D] text-[#C2824D] " />
                      <Minus className="h-4 w-4 hidden group-data-[state=open]:block border rounded-full border-[#C2824D] text-[#C2824D]" />
                    </span>
                  </AccordionTrigger>
    
                  <AccordionContent className="pt-2 pb-0">
                    <div className="flex gap-2 overflow-x-auto pb-2
                      md:grid md:grid-cols-4 md:overflow-visible">
    
                      <Card className=" min-w-50 h-28 rounded-2xl border p-4 gap-4 md:min-w-0">
                        <SlPeople size={20} className="text-[#9C5A3C]" />
                        <div className="flex flex-col gap-1">
                        <p className="text-sm font-semibold">Capacity</p>
                        <p className="text-sm text-gray-500">5 Passengers</p>
                        </div>
                      </Card>
    
                      <Card className=" min-w-50 h-28 rounded-2xl border p-4 gap-4 md:min-w-0">
                        <PiGearFineBold size={20} className="text-[#9C5A3C]" />
                        <div className="flex flex-col gap-1">
                        <p className="text-sm font-semibold">Transmision</p>
                        <p className="text-sm text-gray-500">Leather Seats</p>
                        </div>
                      </Card>
    
                      <Card className=" min-w-50 h-28 rounded-2xl border p-4 gap-4 md:min-w-0">
                        <PiGearFineBold size={20} className="text-[#9C5A3C]" />
                        <div className="flex flex-col gap-1">
                        <p className="text-sm font-semibold">Transmission</p>
                        <p className="text-sm text-gray-500">Automatic</p>
                        </div>
                      </Card>
    
                      <Card className=" min-w-50 h-28 rounded-2xl border p-4 gap-4 md:min-w-0">
                        <PiGearFineBold size={20} className="text-[#9C5A3C]" />
                        <div className="flex flex-col gap-1">
                        <p className="text-sm font-semibold">Transmision</p>
                        <p className="text-sm text-gray-500">Diesel</p>
                        </div>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>
    
                <AccordionItem value="item-2" className="border-none">
                    <AccordionTrigger
                    className="group py-2 flex justify-between items-center text-md font-medium hover:no-underline [&>svg]:hidden">
    
                    <span className="font-semibold text-xl">Facilities</span>
                    <span>
                        <Plus className="h-4 w-4 group-data-[state=open]:hidden rounded-full border border-[#C2824D] text-[#C2824D]" />
                        <Minus className="h-4 w-4 hidden group-data-[state=open]:block border rounded-full border-[#C2824D] text-[#C2824D]" />
                    </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-0">
                        <div className="">
                            <p className="pb-2">Climate Control</p>
                            <p className="pb-2">GPS Navigation</p>
                            <p className="pb-2">Bluetooth</p>
                            <p className="pb-2">Premium Sound System</p>
                            <p className="pb-2">Leather Seat</p>
                            <p className="pb-2">USB Charging</p>
                            <p className="pb-2">Ambient Lighting</p>
                            <p className="pb-2">Privacy Curtains</p>
                            <p className="pb-2">HD Entertainment Screen</p>
                            <p className="pb-2">Panoramic & Sunroof</p>
                            <p className="pb-2">Captain Seat Configuration</p>
                            <p className="pb-2">High-quality suspension</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
    
                <AccordionItem value="item-3" className="border-none">
                    <AccordionTrigger
                    className="group-py-2 flex justify-between items-center text-base font-medium hover:no-underline [&>svg]:hidden">
    
                    <span className="font-semibold text-xl">Accessibility</span>
                    <span>
                        <Plus className="h-4 w-4 group-data-[state=open]:hidden rounded-full border border-[#C2824D] text-[#C2824D]" />
                        <Minus className="h-4 w-4 hidden group-data-[state=open]:block border rounded-full border-[#C2824D] text-[#C2824D]" />
                    </span>
                    </AccordionTrigger>
    
                    <AccordionContent className="pt-2 pb-0">
                        <div className="">
                            <p className="pb-2">Easy entry with automatic sliding door</p>
                            <p className="pb-2">Specious cabin layout for easier movement</p>
                            <p className="pb-2">Reclining sear for improved comfort</p>
                            <p className="pb-2">Idividual climate control</p>
                            <p className="pb-2">Driver assistance for boarding and exiting the vehicle</p>
                        </div>
    
                    </AccordionContent>
                </AccordionItem>
    
                <AccordionItem value="item-4" className="border-none">
                    <AccordionTrigger
                    className="group py-2 flex justify-between items-center text-base font-medium hover:no-underline [&>svg]:hidden">
    
                    <span className="font-semibold text-xl">Lugage Capacity</span>
                    <span>
                        <Plus className="h-4 w-4 group-data-[state=open]:hidden rounded-full border border-[#C2824D] text-[#C2824D]" />
                        <Minus className="h-4 w-4 hidden group-data-[state=open]:block border rounded-full border-[#C2824D] text-[#C2824D]" />
                    </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-0">
                    <div className="grid grid-cols-2 gap-3">
                        <Card className=" w-full h-28 rounded-2xl border p-4 gap-4">
                        <SlPeople size={20} className="text-[#9C5A3C]" />
                        <div className="flex flex-col gap-1">
                        <p className="text-sm font-semibold">Capacity</p>
                        <p className="text-xs text-gray-500">5 Passengers</p>
                        </div>
                      </Card>
    
                      <Card className="w-full h-28 rounded-2xl border p-4 gap-4">
                        <PiGearFineBold size={20} className="text-[#9C5A3C]" />
                        <div className="flex flex-col gap-1">
                        <p className="text-sm font-semibold">Transmision</p>
                        <p className="text-xs text-gray-500">Leather Seats</p>
                        </div>
                      </Card>
                    </div>
    
                    </AccordionContent>
                </AccordionItem>
    
                <AccordionItem value="item-5" className="border-none">
                    <AccordionTrigger
                    className="group py-2 flex justify-between items-center text-base font-medium hover:no-underline [&>svg]:hidden">
    
                    <span className="font-semibold text-lg">Included in The Price</span>
                    <span>
                        <Plus className="h-4 w-4 group-data-[state=open]:hidden rounded-full border border-[#C2824D] text-[#C2824D]" />
                        <Minus className="h-4 w-4 hidden group-data-[state=open]:block border rounded-full border-[#C2824D] text-[#C2824D]" />
                    </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-0">
                        <div className="">
                            <li>Climate Control</li>
                            <li>GPS Navigation</li>
                            <li>Bluetooth</li>
                        </div>
    
                    </AccordionContent>
                </AccordionItem>
    
                <AccordionItem value="item-6" className="border-none">
                    <AccordionTrigger
                    className="group py-2 flex justify-between items-center text-base font-medium hover:no-underline [&>svg]:hidden">
    
                    <span className="font-semibold text-xl">Do's & Don'ts</span>
                    <span>
                        <Plus className="h-4 w-4 group-data-[state=open]:hidden rounded-full border border-[#C2824D] text-[#C2824D]" />
                        <Minus className="h-4 w-4 hidden group-data-[state=open]:block border rounded-full border-[#C2824D] text-[#C2824D]" />
                    </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-0">
                        <div className="font-semibold text-[#9C5A3C] text-lg">
                            <p>Do's</p>
                        </div>
                        <p className="pb-2">Use the vehicle for bussinesstrips, family occasions, or VIP events</p>
                        <p className="pb-2">Consume light snacks and non-alcoholic drinks</p>
                        <p className="pb-2">Ask the driver for assistance when needed</p>
                        <p className="pb-2">Request cabin adjusment (seat, AC, lighting)</p>
    
                        <div className="font-semibold text-[#9C5A3C] text-lg">
                            <p>Don'ts</p>
                        </div>
    
                        <div className="flex flex-row gap-4">
                        <RxCross2 className="mt-1"/>
                        <span className="">Smoke or vape inside the vehicle</span>
                        </div>
    
                        <div className="flex flex-row gap-4">
                        <RxCross2 className="mt-1"/>
                        <span className="">Consume alcohol or bring prohibited items</span>
                        </div>
    
                        <div className="flex flex-row gap-4">
                        <RxCross2 className="mt-1"/>
                        <span className="">Bring pets without prior notice</span>
                        </div>
    
                        <div className="flex flex-row gap-4">
                        <RxCross2 className="mt-1"/>
                        <span className="">Modify seats layouts or open restricted panels</span>
                        </div>
    
                        <div className="flex flex-row gap-4">
                        <RxCross2 className="mt-1"/>
                        <span className="">Engage in unsafe or unlawful activities</span>
                        </div>
    
    
                    </AccordionContent>
                </AccordionItem>
    
              </Accordion>
              <div className="flex flex-row justify-end">
              <button className="mt-10 w-sm rounded-full bg-[#C2824D] py-4 text-white font-semibold transition hover:bg-[#B1723A]">Book Now</button>
              </div>
            </div>
          </div>
        </section>
      )
}