import Image from "next/image";
import Header from "../Component/Header";
import ImageGallary from "../Component/ImageGallary";
import ImageCard from "../Component/ImageCard";
import Whoarewe from "../Component/Whoarewe";
import OurWork from "../Component/OurWork";
import Services from "../Component/Services";
import GetInTouch from "../Component/GetInTouch";
import Footer from "../Component/Footer";
export default function Home() {
  type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    className: string;
    thumbnail: string;
    name: string;
  };
  const images: Card[] = [
    {
      id: 1,
      content: <p>Image 1 Content</p>,
      className: " row-span-3",
      thumbnail: "/designprototype.jpg",
      name: "Test",
    },
    {
      id: 2,
      content: <p>Image 2 Content</p>,
      className: "row-span-2",
      thumbnail: "/designbuilding.jpg",
      name: "Test",
    },
    {
      id: 3,
      content: <p>Image 3 Content</p>,
      className: "row-span-3 object-bottom",
      thumbnail: "/meskelSquare2.jpg",
      name: "Test",
    },

    {
      id: 7,
      content: <p>Image 7 Content</p>,
      className: "row-span-3",
      thumbnail: "/Hillhousefront.jpg",
      name: "Test",
    },
    {
      id: 8,
      content: <p>Image 8 Content</p>,
      className: "row-span-2",
      thumbnail: "/Greentowerinterior.jpg",
      name: "Test",
    },
    {
      id: 10,
      content: <p>Image 10 Content</p>,
      className: "row-span-2",
      thumbnail: "/Hillhouse.jpg",
      name: "Test",
    },
    {
      id: 13,
      content: <p>Image 13 Content</p>,
      className: " row-span-3 object-bottom",
      thumbnail: "/meskelSquarecrop.jpg",
      name: "Test",
    },
    {
      id: 9,
      content: <p>Image 9 Content</p>,
      className: "row-span-2 row-span-3",
      thumbnail: "/design4.jpg",
      name: "Test",
    },

    {
      id: 11,
      content: <p>Image 11 Content</p>,
      className: "row-span-2 row-span-3",
      thumbnail: "/Hillhouse2.jpg",
      name: "Test",
    },
    // {
    //   id: 12,
    //   content: <p>Image 12 Content</p>,
    //   className: "",
    //   thumbnail: "/Hillhouseside.jpg",
    // },

    // ... more images
  ];

  return (
    <main className="h-screen">
      <Header />
      <div className="">
        {/* <div className="grid grid-cols-3 grid-rows-8 gap-0 h-full">
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
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 h-full">
          {images.map((image) => (
            <div
              key={image.id}
              className={`${image.className} flex justify-center items-center`}
            >
              <img
                src={image.thumbnail}
                alt={image.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0"
              />
            </div>
          ))}
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
