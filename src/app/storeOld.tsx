import Image from "next/image";
import Header from "./Component/Header";
import ImageGallary from "./Component/ImageGallary";
import ImageCard from "./Component/ImageCard";
import Whoarewe from "./Component/Whoarewe";
import OurWork from "./Component/OurWork";
import Services from "./Component/Services";
import GetInTouch from "./Component/GetInTouch";
import Footer from "./Component/Footer";
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
    { src: "/Hillhousefront.jpg", alt: "Image 2" },
    // ... more images
  ];

  return (
    <main className="h-screen">
      <Header />
      <div className="">
        <div className="grid grid-cols-3 grid-rows-8 gap-0 h-full">
          <div className="bg-red-200  row-span-6">
            {" "}
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 "
            />
          </div>
          <div className="bg-yellow-300  row-span-3">
            <img
              src={images[6].src}
              alt={images[6].alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0"
            />
          </div>
          <div className="bg-gray-400 row-span-6 ">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0"
            />
          </div>
          <div className="bg-gray-200  row-span-5">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0"
            />
          </div>
          <div className="bg-gray-300  row-span-3">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 "
            />
          </div>
          <div className="bg-gray-400  row-span-3">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 "
            />
          </div>
          <div className="bg-gray-200">scroll down </div>
        </div>
      </div>
      <Whoarewe />
      <OurWork />
      <Services />
      <GetInTouch />
      <Footer />
    </main>

  );
}
