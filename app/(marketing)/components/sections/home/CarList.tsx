"use client"

import CarCard from "./CarCard"

export default function CarList(){
    return (
    <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">

            <CarCard 
            brand="Mercedes Benz Sprinter"
            image="/assets/home/sprintbg.png"
            price="IDR 15 Juta"
            href="/home/detail"/>

            <CarCard 
            brand="Mercedes Benz Sprinter"
            image="/assets/home/sprintbg.png"
            price="IDR 15 Juta"
            href="/home/detail"/>
            </div>
    </section>
    );
}