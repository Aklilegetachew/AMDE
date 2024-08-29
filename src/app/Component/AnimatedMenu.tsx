"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import HamburgerMenu from "../../../public/hamburger-menu.svg";
import BackgroundOverlay from "../../../public/backgroudoverlay.svg";
import Socials from "../../../public/socials.svg";
import Logo from "../../../public/logo-gray.svg";
import X from "../../../public/x.svg";
import Image from "next/image";

const AnimatedMenu: React.FC = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          duration: 0.5,
          x: "-100%",
          opacity: 0,
          ease: "power2.inOut",
        });
      } else {
        gsap.fromTo(
          menuRef.current,
          {
            x: "-100%",
            opacity: 0,
          },
          {
            duration: 0.5,
            x: "0%",
            opacity: 1,
            ease: "power2.inOut",
          }
        );
      }
    }
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="bg-transparent border-none cursor-pointer text-2xl md:text-3xl lg:text-4xl"
      >
        <span>
          <HamburgerMenu />
        </span>
      </button>
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full h-full secondary-color text-white flex item-center z-50  transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <nav className=" fixed w-full top-8 left-0 px-10  flex justify-between items-center">
          <button onClick={toggleMenu} className="flex items-center">
            {/* <Image
              src="/x.svg"
              alt="Logo"
             
              className="sm:w-8 md:w-18 lg:w-16 xl:w-24 object-contain"
            /> */}

            <img
              src="/x.svg"
              alt="Logo"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
            />
            {/* <X className="sm:w-10 md:w-24 lg:w-26 xl:w-100" /> */}
          </button>

          {/* <div className="flex items-center">
            <Logo className="w-24 h-auto sm-below:w-16 mr-5 md:w-26 md:h-auto lg:w-30 lg:h-auto" />
          </div> */}
          <div className="flex items-center ">
            <img
              src="/logo-gray.svg"
              alt="Logo"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
            />
          </div>
        </nav>
        <div className="w-full flex p-10 justify-between sm:p-24 ">
          <ul className="list-none pt-20 m-0 flex flex-col w-full flex-grow flex-shrink-0 lg:w-2/3">
            <li className="font-lexend-deca text-[#727272] text-4xl sm-below:text-xl font-medium leading-[65px] text-left  hover:text-[#F5F5F5]">
              <div className="flex flex-col  justify-center items-center lg:justify-start lg:items-start border-y border-[#727272] hover:border-[#F5F5F5]">
                <a href="#">WHO WE ARE ?</a>
                <a href="#">ስለ እኛ?</a>
              </div>
            </li>

            <li className="font-lexend-deca text-[#727272] text-4xl sm-below:text-xl font-medium leading-[65px] text-left hover:text-[#F5F5F5]">
              <div className="flex flex-col  justify-center items-center lg:justify-start lg:items-start border-y border-[#727272] hover:border-[#F5F5F5]">
                <a href="#">OUR WORKS</a>
                <a href="#">ስራዎቻችን</a>
              </div>
            </li>

            <li className="font-lexend-deca text-[#727272] text-4xl sm-below:text-xl font-medium leading-[65px] text-left hover:text-[#F5F5F5]">
              <div className="flex flex-col  justify-center items-center lg:justify-start lg:items-start border-y border-[#727272] hover:border-[#F5F5F5]">
                <a href="#">Services</a>
                <a href="#">አገልግሎታችን</a>
              </div>
            </li>
            {/* <hr className="border-[#727272] hover:border-[#F5F5F5]" /> */}
            <li className="font-lexend-deca text-[#727272] text-4xl sm-below:text-xl font-medium leading-[65px] text-left hover:text-[#F5F5F5]">
              <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start border-y border-[#727272] hover:border-[#F5F5F5]">
                <a href="#">GET IN TOUCH</a>
                <a href="#">በዚህ ያግኙን</a>
              </div>
            </li>
            <hr className="border-[#727272] hover:border-[#F5F5F5]" />
          </ul>
          <div className="flex items-end justify-end w-1/4">
            <BackgroundOverlay className=" absolute top-20 right-0 bg-cover bg-center" />
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMenu;
