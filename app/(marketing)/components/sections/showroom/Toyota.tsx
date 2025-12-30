import Image from "next/image";

export default function Toyota() {
  return (
    <section className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-white">
      <Image
        src="/assets/showroom/depanToyota.jpeg"
        alt="Mercedes Sprinter"
        width={500}
        height={500}
        className="object-contain w-fit"
        priority
      />
    </section>
  );
}
