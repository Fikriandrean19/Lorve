
"use client"

export default function HomeDetail() {
    return (
        <section className="relative h-screen w-full text-white overflow-hidden">

            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/home/bg2.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="w-full max-w-7xl px-6">
                    <div className="text-center font-[quicksand]">
                        <h1 className="text-3xl font-semibold leading-tight md:text-7xl">
                            A symphony of
                            <br />
                            Power & Elegance
                        </h1>
                    </div>
                </div>
            </div>

        </section>
    );
}