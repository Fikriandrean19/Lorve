import Image from "next/image"

export default function HeroLanding() {
  return (
    <section className="relative h-165 md:h-225 w-full text-white">

      <div className="hidden md:block">
      <Image 
        src="/assets/hero/Hero 1.webp"
        alt="Hero Landing"
        fill
        className="object-cover bg-center h-full w-full"
        /> 
        </div>
        <div className="md:hidden">
          <Image
            src="/assets/hero/Hero 1 mobile.png"
            alt="Hero Mobile"
            fill
            className="object-cover bg-center h-full w-full"
            />
        </div>       

      {/* <div className="absolute inset-0 bg-black/60" /> */}

      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-24 md:flex-row md:gap-32 md:pb-32">

          <div className="flex-1 text-left">
            <h1 className="mb-4 font-bold font-[quicksand] text-4xl md:text-7xl">
              <span className="hidden md:block">
                For Those Who
                <br />
                Arrive, Not Just
                <br />
                Come
              </span>
              <span className="block md:hidden">
                For those Who
                <br />
                Arrive, Not Just
                <br />
                come
              </span>
            </h1>
          </div>

          <div className="flex max-w-lg flex-col items-start gap-4 text-left md:items-start md:text-left font-[quicksand]">

            <div className="flex gap-4 text-md tracking-wide text-white">
              <span className="flex items-center gap-1 font-semibold">

                <Image
                  src="/assets/icon/theme.png"
                  alt="Presence"
                  width={16}
                  height={16}
                />
                Presence
              </span>

              <span className="flex items-center font-semibold gap-1">
                <Image
                  src="/assets/icon/theme.png"
                  alt="Power"
                  width={16}
                  height={16}
                />
                Power
              </span>

              <span className="flex items-center font-semibold gap-1">
                <Image
                  src="/assets/icon/theme.png"
                  alt="Perfection"
                  width={16}
                  height={16}
                />
                Perfection
              </span>
            </div>

            <p className="text-white text-lg font-[archivo]">
              An experience crafted for those who command presence,
              where every mile speaks elegance.
            </p>

            <button className="
            mt-4 w-fit rounded-full 
            bg-white px-8 py-4 text-md font-medium
            border-white/5
             text-black transition-all 
             outline outline-transparent 
             duration-300 hover:outline-4
             hover:outline-white font-[archivo]">
              Explore Our Fleet
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
