"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP plugins are registered only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Home = () => {
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
      className: "row-span-3",
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
      id: 7,
      content: <p>Image 7 Content</p>,
      className: "row-span-3",
      thumbnail: "/Hillhousefront.jpg",
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
      className: "row-span-3 object-bottom",
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
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Animate each image as it scrolls into view
      gsap.fromTo(
        ".image", // Now selecting the correct elements with the class 'image'
        { opacity: 0, scale: 0.8 }, // Start with images transparent and scaled down
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".image",
            start: "top 80%", // Start the animation when the image is 80% from the top of the viewport
            end: "top 20%", // End the animation when it reaches 20% from the top
            toggleActions: "play none none none", // Play once when scrolling into view
            scrub: true,
          },
        }
      );
    }
  }, [images]);

  return (
    <main className="min-w-full flex flex-col h-auto">
      <Header />
      <div className="mt-24 h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 h-full">
          {images.map((image) => (
            <div
              key={image.id}
              className={`${image.className} flex justify-center items-center image`} // Add the 'image' class to the div
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
      <Footer />
    </main>
  );
};

export default Home;
