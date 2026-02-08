"use client"

import CarCard from "./CarCard"
import {  getCars } from "@/app/(marketing)/services/car.service"
import { notFound } from "next/navigation"

type CarCardProps = {
  brand: string
  image: string
  price: string
  href: string
}

export async function generateGetList() {
     try {
        const response = await getCars();
        console.log(response.data)
        if (!response.data) return notFound()
        // const car = {
          
        //     ...response.data,
        //     images: response.data.images?.map(
        //       (img: any) => img.image_path
        //     ) ?? [],
          
        // };
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }
}

export default async function CarList() {

  let  data = await generateGetList();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-6 md:py-4">
      <div className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 border border-white/30 bg-[#fafafa]">
          {/* <CarCard 
            brand="Mercedes Benz Sprinter"
            image="/assets/home/Sprint.png"
            price="IDR 15 Juta"
            href="/home/mercedes"
            
          /> */}

            {data.map((car: any) => (

          <CarCard
            brand={car.car_brand}
            image={car.image_path}
            price="8.000.000"
            href={'/home/'+car.id}
          />
          ))}
        </div>
      </div>
    </section>
  )
}
