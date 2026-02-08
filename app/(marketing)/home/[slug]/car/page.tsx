import { getCarDetail } from "@/app/(marketing)/services/car.service"
import CarGallery from "@/app/(marketing)/components/sections/showroom/CarGallery"
import CarDetail from "@/app/(marketing)/components/sections/showroom/CarDetail"

interface PageProps {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const car = await getCarDetail(params.slug)

  return (
    <>
      <CarGallery
        images={car.images ?? [car.image_path]}
        alt={car.name}
      />
      <CarDetail car={car} />
    </>
  )
}
