"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ParallaxScroll } from "./Component/ui/parallax-scroll";

import { Lexend_Deca } from "next/font/google";

// Ensure GSAP plugins are registered only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Optional: specify weights
});

const Home = () => {
  type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    className: string;
    thumbnail: string;
    name: string;
    link: string;
  };

  const images: Card[] = [
    {
      id: 12,
      content: <p>Image 1 Content</p>,
      className: "row-span-3",
      thumbnail: "/designprototype.jpg",
      name: "Test",
      link: "/ourwork#meskel-square",
    },
    {
      id: 1,
      content: <p>Image 1 Content</p>,
      className: "row-span-3",
      thumbnail: "/designprototype.jpg",
      name: "Test",
      link: "/ourwork#meskel-square",
    },
    {
      id: 2,
      content: <p>Image 2 Content</p>,
      className: "row-span-2",
      thumbnail: "/designbuilding.jpg",
      name: "Test",
      link: "/ourwork#Green-Ladder",
    },
    {
      id: 7,
      content: <p>Image 7 Content</p>,
      className: "row-span-3",
      thumbnail: "/Hillhousefront.jpg",
      name: "Test",
      link: "/ourwork#hill-house",
    },
    {
      id: 3,
      content: <p>Image 3 Content</p>,
      className: "row-span-3 object-bottom",
      thumbnail: "/meskelSquare2.jpg",
      name: "Test",
      link: "/ourwork#meskel-square",
    },
    {
      id: 8,
      content: <p>Image 8 Content</p>,
      className: "row-span-2",
      thumbnail: "/Greentowerinterior.jpg",
      name: "Test",
      link: "/ourwork#green-tower-in",
    },
    {
      id: 10,
      content: <p>Image 10 Content</p>,
      className: "row-span-2",
      thumbnail: "/Hillhouse.jpg",
      name: "Test",
      link: "/ourwork#hill-house-int",
    },
    {
      id: 13,
      content: <p>Image 13 Content</p>,
      className: "row-span-3 object-bottom",
      thumbnail: "/meskelSquarecrop.jpg",
      name: "Test",
      link: "/ourwork#meskel-square",
    },
    {
      id: 9,
      content: <p>Image 9 Content</p>,
      className: "row-span-2 row-span-3",
      thumbnail: "/design4.jpg",
      name: "Test",
      link: "/ourwork#Green-Ladder",
    },
    {
      id: 11,
      content: <p>Image 11 Content</p>,
      className: "row-span-2 row-span-3",
      thumbnail: "/Hillhouse2.jpg",
      name: "Test",
      link: "/ourwork#Hill House",
    },
  ];
  const imageUrls = images.map((image) => image.thumbnail);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollX);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className={`${lexendDeca.className} min-w-full flex flex-col h-[70rem]`}
    >
      <ParallaxScroll images={imageUrls} className="custom-scroll mt-36" />
    </main>

    // <Header />
    //
    // <div className="mt-52 h-full">
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 h-full">
    //     {images.map((image) => (
    //       <Link
    //         href={image.link}
    //         passHref
    //         key={image.id}
    //         className={`${image.className} flex justify-center items-center image`}
    //       >
    //         <img
    //           src={image.thumbnail}
    //           alt={image.name}
    //           className="w-full h-full object-cover grayscale hover:grayscale-0"
    //         />
    //       </Link>
    //     ))}
    //   </div>
    // </div>
    // <Footer />
  );
};

export default Home;
