import Image from "next/image";

export default function ImageGallery() {
  return (
    <section className="w-full flex flex-col md:flex-row gap-4 bg-[#FFE3C5]"> 
      <div className="relative w-full md:flex-1 aspect-square overflow-hidden">
        <Image
          src="/image1.jpg"
          alt="Gallery image 1"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-full md:flex-1 aspect-square overflow-hidden">
        <Image
          src="/image2.jpg"
          alt="Gallery image 2"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-full md:flex-1 aspect-square overflow-hidden">
        <Image
          src="/image3.jpg"
          alt="Gallery image 3"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}

