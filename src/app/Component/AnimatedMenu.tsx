"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HamburgerMenu from "../../../public/hamburger-menu.svg";
import BackgroundOverlay from "../../../public/backgroudoverlay.svg";
import Socials from "./Socials";
import Logo from "../../../public/logo-gray.svg";
import X from "../../../public/x.svg";
import Image from "next/image";
import Link from "next/link";

const AnimatedMenu: React.FC = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Function to apply responsive font sizes based on screen width
    const applyResponsiveAnimation = () => {
      const isSmallScreen = window.innerWidth < 768; // Adjust breakpoint as needed
      const listItems = document.querySelectorAll("ul li");

      listItems.forEach((item) => {
        const smallScreenFontSize = "1em";
        const smallScreenHoverFontSize = "1.5em";
        const largeScreenFontSize = "3em";
        const largeScreenHoverFontSize = "3.5em";

        // Set initial state based on screen size
        gsap.fromTo(
          item,
          {
            fontSize: isSmallScreen ? smallScreenFontSize : largeScreenFontSize,
            fontWeight: "400",
          },
          {
            fontSize: isSmallScreen
              ? smallScreenHoverFontSize
              : largeScreenHoverFontSize,
            fontWeight: "bold",
            ease: "power3.out",
            duration: 0.4,
            paused: true,
            reversed: true,
          }
        );

        // Handle hover state
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            fontSize: isSmallScreen
              ? smallScreenHoverFontSize
              : largeScreenHoverFontSize,
            fontWeight: "bold",
            ease: "power3.out",
            duration: 0.3,
          });
        });

        // Handle mouse leave state
        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            fontSize: isSmallScreen ? smallScreenFontSize : largeScreenFontSize,
            fontWeight: "400",
            ease: "power3.in",
            duration: 0.3,
          });
        });
      });
    };

    // Apply responsive animation on load
    applyResponsiveAnimation();

    // Reapply responsive animation on window resize
    window.addEventListener("resize", applyResponsiveAnimation);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", applyResponsiveAnimation);
    };
  }, []);

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
        <nav className=" fixed w-full top-8 left-0 px-10   flex justify-between items-center">
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
        <div className="w-full md:flex p-10 sm-below:px-4 sm-below:justify-between sm-below: justify-between sm:p-24 ">
          <ul className="list-none pt-20 m-0 flex flex-col w-full flex-grow flex-shrink-0 lg:w-2/3 sm-below:h-[70%]">
            <li className="font-lexend-deca text-[#727272] text-4xl sm-below:text-2xl font-medium sm-below:leading-10 leading-[65px] text-left  hover:text-[#F5F5F5]">
              <Link href="/aboutus" passHref>
                <div className="flex flex-col  justify-center items-center lg:justify-start lg:items-start border-y border-[#727272] ">
                  <span>WHO WE ARE ?</span>
                  <span>ስለ እኛ?</span>
                </div>
              </Link>
            </li>
            <li className="font-lexend-deca text-[#727272] text-4xl sm-below:text-1xl font-medium leading-[65px] text-left hover:text-[#F5F5F5]">
              <div className="flex flex-col  justify-center items-center lg:justify-start lg:items-start border-y border-[#727272] ">
                <a href="#">OUR WORKS</a>
                <a href="#">ስራዎቻችን</a>
              </div>
            </li>
            <li className="font-lexend-deca text-[#727272] text-4xl sm-below:text-1xl font-medium leading-[65px] text-left hover:text-[#F5F5F5]">
              <div className="flex flex-col  justify-center items-center lg:justify-start lg:items-start border-y border-[#727272] ">
                <a href="#">Services</a>
                <a href="#">አገልግሎታችን</a>
              </div>
            </li>
            <li className="font-lexend-deca text-[#727272] text-4xl sm-below:text-1xl font-medium leading-[65px] text-left hover:text-[#F5F5F5]">
              <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start border-y border-[#727272] ">
                <a href="#">GET IN TOUCH</a>
                <a href="#">በዚህ ያግኙን</a>
              </div>
            </li>
            <hr className="border-[#727272] hover:border-[#F5F5F5]" />
          </ul>
          <div className="flex  items-end justify-end lg:w-1/4 sm-below:my-8">
            <BackgroundOverlay className="z-[-1] absolute top-20 right-0 bg-cover bg-center" />
            <div className=" pt-6 block sm:hidden">
              <Socials alignment="row" />
            </div>
            <div className=" pt-6 hidden sm:block">
              <Socials alignment="column" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMenu;
