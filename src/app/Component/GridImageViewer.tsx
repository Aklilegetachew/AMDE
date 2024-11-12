"use clients";

import Link from "next/link";
import React from "react";

export const GridImageViewer = () => {
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
      thumbnail: "/GreenTowerfulltallCrop.jpg",
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
      thumbnail: "/meskelSquarecrop.jpg",
      name: "Meskel Square",
      link: "/ourprojects/6",
    },
    {
      id: 11,
      content: <p>Image 11 Content</p>,
      className: "md:row-span-3",
      thumbnail: "/meskelCityhall.jpg",
      name: "Meskel Square to City Hall",
      link: "/ourprojects/7",
    },
  ];
  return (
    <div className="mt-52 md:mt-96 lg:mt-52 h-full">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-0 h-full w-full">
        {/* Cell 1 with image, row-span-2 */}
        <Link
          href={"/ourprojects/0"}
          passHref
          key={1}
          className="bg-black  relative w-full h-full group"
        >
          <img
            src="/GreenLadderCrop.jpg"
            alt="Image 1"
            className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300  aspect-auto"
          />
          <div className="absolute bottom-0 right-0 w-full bg-opacity-50 text-black px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Green Ladder
          </div>
        </Link>

        {/* Cell 2 with image, col-span-2 for medium and larger screens */}
        <Link
          href={"/ourprojects/1"}
          passHref
          key={2}
          className="bg-black md:col-span-3 relative w-full h-full group"
        >
          <img
            src="/meskelSquareCrop2.jpg"
            alt="Image 2"
            className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300  aspect-auto"
          />
          <div className="absolute bottom-0 right-0 w-full bg-opacity-50 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            Meskel Square
          </div>
        </Link>

        {/* Cell 3 with image, row-span-2 */}
        <Link
          href={"/ourprojects/2"}
          passHref
          key={3}
          className="bg-black relative w-full h-full group"
        >
          <img
            src="/GreenTowerFront.jpg"
            alt="Image 3"
            className="h-full w-full object-cover object-right grayscale group-hover:grayscale-0 transition-all duration-300 aspect-auto"
          />
          <div className="absolute bottom-0 right-0 w-full bg-opacity-50 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Green Tower
          </div>
        </Link>

        {/* Cell 4 with image */}
        <Link
          href={"/ourprojects/3"}
          passHref
          key={4}
          className="bg-black relative w-full h-full group"
        >
          <img
            src="/Hillhouse.jpg"
            alt="Image 4"
            className="h-full w-full object-cover object-left grayscale group-hover:grayscale-0 transition-all duration-300 aspect-auto"
          />
          <div className="absolute bottom-0 right-0 w-full bg-opacity-50 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Hill House - Interior
          </div>
        </Link>

        {/* Cell 5 with image, row-span-2 */}
        <Link
          href={"/ourprojects/4"}
          passHref
          key={5}
          className="bg-black relative w-full h-full group"
        >
          <img
            src="/Hillhouse2Crop.jpg"
            alt="Image 5"
            className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300  aspect-auto"
          />
          <div className="absolute bottom-0 right-0 w-full bg-opacity-50 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Hill House
          </div>
        </Link>

        {/* Cell 6 with image */}
        <Link
          href={"/ourprojects/5"}
          passHref
          key={6}
          className="bg-black relative w-full h-full group"
        >
          <img
            src="/KKPrivate.jpg"
            alt="Image 6"
            className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300  aspect-auto"
          />
          <div className="absolute bottom-0 right-0 w-full bg-opacity-50 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Gallery Stair
          </div>
        </Link>

        <Link
          href={"/ourprojects/6"}
          passHref
          key={7}
          className="bg-black md:col-span-2 relative w-full h-full group"
        >
          <img
            src="/meskelSquareClean.jpg"
            alt="Image 7"
            className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300  aspect-auto "
          />
          <div className="absolute bottom-0 right-0 w-full bg-opacity-50 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            MCH: Mini Plaza
          </div>
        </Link>

        <Link
          href={"/ourprojects/7"}
          passHref
          key={8}
          className="flex-1 relative w-full h-full group"
        >
          <img
            src="/meskelCityhallCrop.jpg"
            alt="Image 7"
            className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300  aspect-auto"
          />
          <div className="absolute bottom-0 right-0 w-full bg-opacity-50 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            MCH: Hidden spaces
          </div>
        </Link>
        <Link
          href={"/ourprojects/8"}
          passHref
          key={9}
          className="flex-1 relative w-full h-full group"
        >
          <img
            src="/GreentowerinteriorCrop.jpg"
            alt="Image 8"
            className="h-full w-full object-cover grayscale hover:grayscale-0"
          />
          <div className="absolute bottom-0 right-0 w-full bg-opacity-50 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            The Green Tower - Interior
          </div>
        </Link>
        {/* <div className="bg-black-500 md:col-span-3 flex flex-row">
          <Link
            href={"/ourprojects/7"}
            passHref
            key={1}
            className="flex-1 relative w-full h-full group"
          >
            <img
              src="/meskelCityhallCrop.jpg"
              alt="Image 7"
              className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300  aspect-auto"
            />
            <div className="absolute bottom-0 right-0 w-full bg-opacity-50 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              MCH: Hidden spaces
            </div>
          </Link>
          <Link
            href={"/ourprojects/8"}
            passHref
            key={1}
            className="flex-1 relative w-full h-full group"
          >
            <img
              src="/GreentowerinteriorCrop.jpg"
              alt="Image 8"
              className="h-full w-full object-cover grayscale hover:grayscale-0"
            />
            <div className="absolute bottom-0 right-0 w-full bg-opacity-50 text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              The Green Tower - Interior
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};
