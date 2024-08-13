import Image from "next/image";
import Header from "./Component/Header";
import ImageGallary from "./Component/ImageGallary";
import ImageCard from "./Component/ImageCard";
export default function Home() {
  interface ImageData {
    src: string;
    alt: string;
  }
  const images: ImageData[] = [
    { src: "/Hillhouseinterior.jpg", alt: "Image 1" },
    { src: "/meskelSquare2.jpg", alt: "Image 2" },
    { src: "/mazegaja.jpg", alt: "Image 2" },
    { src: "/Hillhouseinterior.jpg", alt: "Image 1" },
    { src: "/mazegaja.jpg", alt: "Image 2" },
    { src: "/meskelSquare2.jpg", alt: "Image 2" },
    // ... more images
  ];

  return (
    <main>
      <Header />
      {/* <ImageGallary /> */}
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-0">
        {images.map((image: ImageData) => (
          <ImageCard key={image.src} src={image.src} alt={image.alt} />
        ))}
      </div>

      <div className="w-full max-w-5xl p-0  mx-auto  gap-0 columns-3 space-y-5">
        <ImageCard
          key={images[0].src}
          src={images[0].src}
          alt={images[0].alt}
        />
        <ImageCard
          key={images[1].src}
          src={images[1].src}
          alt={images[1].alt}
        />
        <ImageCard
          key={images[2].src}
          src={images[2].src}
          alt={images[2].alt}
        />
        <ImageCard
          key={images[3].src}
          src={images[3].src}
          alt={images[3].alt}
        />
        <ImageCard
          key={images[3].src}
          src={images[3].src}
          alt={images[3].alt}
        />
        <ImageCard
          key={images[3].src}
          src={images[3].src}
          alt={images[3].alt}
        />
          <ImageCard
          key={images[3].src}
          src={images[3].src}
          alt={images[3].alt}
        /> 
      </div>
    </main>
  );
}
