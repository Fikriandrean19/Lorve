import ToyotaDetail from "@/app/(marketing)/components/sections/showroom/ToyotaDetail"
import { cars } from "../../data/cars";
import CarGallery from "../../components/sections/showroom/CarGallery";

// const images = Array.from({length: 15}, (_, i) =>
// `/assets/putar/${String(i + 1).padStart(2, "0")}.png`
// )

export default function Page() {
    const car = cars.toyota;
    return (
        <>
        {/* <Toyota images={images}/> */}
        {/* <ToyotaMobileSlider /> */}
        <CarGallery images={car.images} alt={car.name} />
        <ToyotaDetail />
        </>
    );
}