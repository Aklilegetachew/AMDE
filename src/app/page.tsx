import Image from "next/image";
import Header from "./Component/Header";
import ImageGallary from "./Component/ImageGallary";
import ImageCard from "./Component/ImageCard";
import Whoarewe from "./Component/Whoarewe";
import OurWork from "./Component/OurWork";
import Services from "./Component/Services";
import GetInTouch from "./Component/GetInTouch";
import Footer from "./Component/Footer";
import { LayoutGrid } from "./Component/ui/layout-grid";
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
    <main className="min-h-screen min-w-full flex flex-col h-screen">
      <Header />
      <div className="sm:h-[89vh]">
        <LayoutGrid cards={images} />
      </div>
      <Footer />
    </main>
  );
}
