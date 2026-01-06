import Image from "next/image"
import Link from "next/link"

type CarCardProps = {
  brand: string
  image: string
  price: string
  href: string
}

export default function CarCard({
  brand,
  image,
  price,
  href,
}: CarCardProps) {
  
  return (
    <div className="rounded-xl border bg-white md:bg-[#fafafa] p-5">
      <div className="relative bg-white md:bg-[#fafafa] md:rounded-2xl md:border">
        <span className="absolute md:top-4 left-4 z-10 rounded-full border bg-[#fafafa] px-4 py-2 text-xs">
          Luxury Vans
        </span>

        <div className="relative min-h-85 md:min-h-95 overflow-hidden bg-[#fafafa] rounded-2xl">
          <Image
            src={image}
            alt={brand}
            fill
            className="object-cover block"
            priority
          />

          <div className="absolute bottom-3 left-4 right-4 hidden md:flex gap-2 text-sm text-black">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent bg-white  px-1">
              <img src="/assets/card/seat.png" className="h-6 w-6" alt="seat" />
              6 Seats
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-accent bg-white px-4">
              <img src="/assets/card/people.png" className="h-5 w-5" alt="people" />
              5 People
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-accent bg-white px-4">
              <img src="/assets/card/suitcase.png" className="h-6 w-6" alt="suitcase" />
              4 Suitcase
            </span>
          </div>
        </div>

        <div className="md:hidden flex-col mt-4 px-2">
          <h3 className="text-base font-semibold">{brand}</h3>
          <p className="mt-6 text-sm text-black">Start from</p>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-[#c2824d]">{price}</p>
            <Link href={href}>
              <button className="rounded-full bg-[#c2824d] px-6 py-2 text-sm font-medium text-white cursor-pointer">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col p-4 px-2">
        <h3 className="text-base font-semibold">{brand}</h3>
        <p className="mt-6 text-sm text-black">Start from</p>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[#c2824d]">{price}</p>
          <Link href={href}>
            <button className="rounded-full bg-[#c2824d] px-6 py-2 text-sm font-medium text-white cursor-pointer">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
