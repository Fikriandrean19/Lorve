import Image from "next/image"

export default function HeroLanding() {
  return (
    <section className="relative h-screen w-full text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/hero/hero-bg.png')" }}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-24 md:flex-row md:gap-32 md:pb-32">

          <div className="flex-1 text-left">
            <h1 className="mb-6 font-bold font-[quicksand] leading-tight text-4xl md:text-7xl">
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

          <div className="flex max-w-md flex-col items-start gap-6 text-left md:items-start md:text-left font-[quicksand]">

            <div className="flex gap-6 text-sm uppercase tracking-wide text-white/80">
              <span className="flex items-center gap-2">
                <Image
                  src="/assets/hero/iconBaru.png"
                  alt="Presence"
                  width={16}
                  height={16}
                />
                Presence
              </span>

              <span className="flex items-center gap-2">
                <Image
                  src="/assets/hero/iconBaru.png"
                  alt="Power"
                  width={16}
                  height={16}
                />
                Power
              </span>

              <span className="flex items-center gap-2">
                <Image
                  src="/assets/hero/iconBaru.png"
                  alt="Perfection"
                  width={16}
                  height={16}
                />
                Perfection
              </span>
            </div>

            <p className="text-white/80">
              An experience crafted for those who command presence,
              where every mile speaks elegance.
            </p>

            <button className="mt-4 w-fit rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-white/90 font-[archivo]">
              Explore Our Fleet
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
