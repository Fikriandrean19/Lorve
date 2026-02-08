import MercedesDetail from "@/app/(marketing)/components/sections/showroom/MercedesDetail"
import CarGallery from "@/app/(marketing)/components/sections/showroom/CarGallery";
import { cars } from "../../data/cars";
import CarDetail from "../../components/sections/showroom/CarDetail";



export default function Page() {
    const car = cars.mercedes;
    return (
        <>
        {/* <Mercedes images={images} />
        <MercedesMobileSlider /> */}
        <CarGallery images={car.images} alt={car.name} />
        {/* <MercedesDetail /> */}
        {/* <CarDetail /> */}
        </>
    );
}