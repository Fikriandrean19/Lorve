
"use client"

import Image from "next/image";

export default function HomeDetail() {
    return (
        <section className="relative min-h-[80vh] md:h-screen w-full text-white overflow-hidden">
            <Image 
                src="/assets/home/Hero 2.webp"
                alt="Hero 2"
                width={1800}
                height={1200}
                className="absolute inset-0 object-cover w-full h-full"
                />
           
            {/* <div className="absolute inset-0 bg-black/60" /> */}

            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="w-full max-w-7xl px-6">
                    
                    <div className="text-center font-[quicksand]">
                        <h1 className="text-3xl font-semibold leading-tight md:text-6xl">
                            A symphony of
                            <br />
                            Power & Elegance
                        </h1>
                        <br />
                    </div>

                    <div className="text-center font-[quicksand]">
                        <p className="text-lg ">
                            Each vehicle embodies craftmanship, comfort, and class beyond expectation
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
}