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
    <div className="w-full max-w-sm rounded-2xl border border-accent bg-[#FAFAFA] p-4 sm:p-6">

      <div className="relative rounded-xl border border-accent bg-white/90 p-4">
        <span className="absolute left-4 top-4 rounded-full border bg-white/80 px-3 py-1 text-xs shadow">
          Luxury Vans
        </span>

        <Image
          src={image}
          alt={brand}
          width={400}
          height={240}
          className="mx-auto h-40 w-full object-contain sm:h-48"
        />

        <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600">
          <span className="rounded-full bg-gray-100 px-3 py-1">6 Seats</span>
          <span className="rounded-full bg-gray-100 px-3 py-1">5 People</span>
          <span className="rounded-full bg-gray-100 px-3 py-1">4 Suitcase</span>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-base font-semibold sm:text-lg">{brand}</h3>

        <p className="text-xs text-gray-500 sm:text-sm">Start from</p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-[#C2824D]">{price}</p>

          <Link href={href} className="w-auto sm:w-auto">
            <button className="w-26 rounded-full bg-[#C2824D] py-2 text-sm font-medium text-white transition hover:opacity-90">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
