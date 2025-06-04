"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { GridImageViewer } from "./Component/GridImageViewer";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { Lexend_Deca } from "next/font/google";

// Ensure GSAP plugins are registered only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
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
      id: 1,
      content: <p>Green Tower</p>,
      className: "md:row-span-2 ",
      thumbnail: "/GreenTowerfulltall.jpg",
      name: "Green Tower",
      link: "/ourprojects/0",
    },
    {
      id: 2,
      content: <p>Colorex</p>,
      className: "md:row-span-1",
      thumbnail: "/KKPrivate.jpg",
      name: "Colorex",
      link: "/ourprojects/1",
    },
    {
      id: 7,
      content: <p>Green Ladder</p>,
      className: "md:row-span-3",
      thumbnail: "/GreenLadder.jpg",
      name: "Green Ladder",
      link: "/ourprojects/2",
    },
    {
      id: 3,
      content: <p>Hill House</p>,
      className: "md:row-span-1 object-bottom",
      thumbnail: "/Hillhouse2.jpg",
      name: "Hill House",
      link: "/ourprojects/3",
    },
    {
      id: 8,
      content: <p>The Green Tower - Interior</p>,
      className: "md:row-span-2",
      thumbnail: "/Greentowerinterior.jpg",
      name: "The Green Tower - Interior",
      link: "/ourprojects/4",
    },
    {
      id: 10,
      content: <p>Hill House Interior</p>,
      className: "md:row-span-2",
      thumbnail: "/Hillhouse.jpg",
      name: "Hill House Interior",
      link: "/ourprojects/5",
    },
    {
      id: 13,
      content: <p>Image 13 Content</p>,
      className: "md:row-span-3  md:col-span-2 object-bottom",
      thumbnail: "/meskelSquareClean.jpg",
      name: "Meskel Square",
      link: "/ourprojects/6",
    },
    {
      id: 11,
      content: <p>Image 11 Content</p>,
      className: "md:row-span-3",
      thumbnail: "/",
      name: "Meskel Square to City Hall",
      link: "/ourprojects/7",
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
    // <main
    //   className={`${lexendDeca.className} min-w-full flex flex-col h-[70rem]`}
    // >
    //   <Header />

    //   <div className="mt-52 h-full">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 h-full">
    //       {images.map((image) => (
    //         <Link
    //           href={image.link}
    //           passHref
    //           key={image.id}
    //           className={`${image.className} flex justify-center items-center image`}
    //         >
    //           <img
    //             src={image.thumbnail}
    //             alt={image.name}
    //             className="w-full h-full object-cover grayscale hover:grayscale-0"
    //           />
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    //   <Footer />
    /* <ParallaxScroll images={imageUrls} className="custom-scroll mt-36" /> */
    /* </main> */

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

    <main className={`${lexendDeca.className} w-full flex flex-col `}>
      <Header />
      {/* <div className="mt-52 ">
        <div className="grid grid-cols-1 sm:grid-cols-3  lg:grid-cols-3 gap-0 ">
          {images.map((image) => (
            <Link
              href={image.link}
              passHref
              key={image.id}
              className={`${image.className}  items-end`} // Add the 'image' class to the div
              aria-label={image.name}
            >
              <div className="relative w-full h-full group">
                <img
                  src={image.thumbnail}
                  alt={image.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300  aspect-auto"
                />
                <div className="absolute bottom-0 right-0 w-full bg-opacity-50 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div> */}

      <GridImageViewer />
      <Footer />
    </main>
  );
};

export default Home;
