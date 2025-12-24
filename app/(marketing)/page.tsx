import Image from "next/image";
import HeroLanding from "./components/sections/hero/hero-landing";
import CarShowcase from "./components/sections/hero/CarShowcase";
import Reservation from "./components/sections/hero/Reservation";
import FaQ from "./components/sections/hero/FaQ";
import Footer from "./components/Footer/Footer";

export default function HomePage() {
  return (

    <>
    <HeroLanding />
    <CarShowcase />
    <Reservation />
    <FaQ />
    <Footer />
    </>

  );
}
