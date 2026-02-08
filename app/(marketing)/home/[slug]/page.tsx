import { getCarDetail, getCars } from "@/app/(marketing)/services/car.service"
import CarGallery from "@/app/(marketing)/components/sections/showroom/CarGallery"
import CarDetail from "@/app/(marketing)/components/sections/showroom/CarDetail"
import MercedesDetail from "@/app/(marketing)/components/sections/showroom/MercedesDetail"
import { notFound } from "next/navigation"


type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

interface CarsDetail {
  car: {
    id: number
    name: string
    description: string
    price: string
    rating: number
    images: string[]
    car_specifications: any[],
    car_brand?: string
    car_type?: string
  }
}

export async function generateStaticParams() {
    try {
    const cars = (await getCars()).data;
    if (!cars) return notFound()
    const params = cars
      .filter((c: any) => c?.ID)
      .map((c: any) => ({
        slug: String(c.ID),
      }));

    if (params.length === 0) {
      return [{ slug: "1" }];
    }
    return params;
  } catch (error) {
    console.error("generateStaticParams fallback:", error);

    return [{ slug: "1" }];
  }
}

async function getDetailCar(id: string): Promise<CarsDetail | null> {
  try {
    const response = await getCarDetail(id);
    if (!response.data) return notFound()
    const car = {
      car: {
        ...response.data,
        images: response.data.images?.map(
          (img: any) => img.image_path
        ) ?? [],
      }
    };
    return car;
  } catch (error) {
    console.error(error);
    return null;
  }
}


export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const id = slug.toString();
  let cars = await getDetailCar(id)
  
  let images = cars?.car?.images
  
  let ims:string[] = []
  images?.forEach((element: any) => {
    ims.push(element)
  });

  return (
    <>
        <>
        <CarGallery images={ims} alt={cars?.car?.car_brand} />
        <CarDetail car={cars?.car!}/>
        </>
    </>
  )
}
