import Mercedes from "@/app/(marketing)/components/sections/showroom/Mercedes"
import MercedesDetail from "@/app/(marketing)/components/sections/showroom/MercedesDetail"
import MercedesMobileSlider from "@/app/(marketing)/components/sections/showroom/MercedesMobileSlider";


const images = Array.from({length: 15}, (_, i) =>
`/assets/putar/${String(i + 1).padStart(2, "0")}.png`
)

export default function Page() {
    return (
        <>
        <Mercedes images={images} />
        <MercedesMobileSlider />
        <MercedesDetail />
        </>
    );
}