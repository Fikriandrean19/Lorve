import { cars } from "@/app/(marketing)/data/cars"
import CarGallery from "@/app/(marketing)/components/sections/showroom/CarGallery"
import MercedesMobileSlider from "@/app/(marketing)/components/sections/showroom/MercedesMobileSlider"
import MercedesDetail from "@/app/(marketing)/components/sections/showroom/MercedesDetail"
import { notFound } from "next/navigation"

type Props = {
  params: { slug: string }
}

export default function ShowroomPage({ params }: Props) {
  const car = cars[params.slug as keyof typeof cars]

  if (!car) return notFound()

  return (
    <>
      <CarGallery images={car.images} alt={car.name} />
      <MercedesMobileSlider />  
      <MercedesDetail />
    </>
  )
}
