import Image from "next/image";

export default function Mercedes() {
  return (
      <section className=" min-h-[60vh] md:min-h-[calc(100vh-100px)] flex items-center justify-center bg-white"> 
     <Image
        src="/assets/showroom/depan.jpeg"
        alt="Mercedes Sprinter"
        width={530}
        height={530}
        className="object-contain w-fit"
        priority
      />
   
    </section>
  );
}
