import Toyota from "@/app/(marketing)/components/sections/showroom/Toyota"
import ToyotaDetail from "@/app/(marketing)/components/sections/showroom/ToyotaDetail"
import ToyotaMobileSlider from "@/app/(marketing)/components/sections/showroom/ToyotaMobileSlider";

const images = Array.from({length: 15}, (_, i) =>
`/assets/putar/${String(i + 1).padStart(2, "0")}.png`
)

export default function Page() {
    return (
        <>
        <Toyota images={images}/>
        <ToyotaMobileSlider />
        <ToyotaDetail />
        </>
    );
}