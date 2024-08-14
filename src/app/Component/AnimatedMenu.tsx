"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import HamburgerMenu from "../../../public/hamburger-menu.svg";
import BackgroundOverlay from "../../../public/backgroudoverlay.svg";
import Socials from "../../../public/socials.svg";
import Logo from "../../../public/logo-gray.svg";
import X from "../../../public/x.svg";

const AnimatedMenu: React.FC = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
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
        className={`fixed top-0 left-0 w-full h-full secondary-color text-white flex item-center  transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <nav className=" fixed w-full top-8 left-0 h-10 p-10  flex justify-between items-center">
          <button onClick={toggleMenu} className="flex items-center">
            <X className="w-auto h-auto" />
          </button>

          <div className="flex items-center">
            <Logo className="w-24 h-auto sm-below:w-16 mr-5 md:w-26 md:h-auto lg:w-30 lg:h-auto" />
          </div>
        </nav>
        <div className="w-full flex p-24 justify-between">
          <ul className="list-none pt-20 m-0 flex flex-col flex-grow flex-shrink-0 w-2/3">
            <hr />
            <li className="font-lexend-deca text-4xl sm-below:text-xl font-medium leading-[65px] text-left">
              <div className="flex flex-col">
                <a href="#">WHO WE ARE ?</a>
                <a href="#">ስለ እኛ?</a>
              </div>
            </li>
            <hr />
            <li className="font-lexend-deca text-4xl sm-below:text-xl font-medium leading-[65px] text-left">
              <div className="flex flex-col">
                <a href="#">OUR WORKS</a>
                <a href="#">ስራዎቻችን</a>
              </div>
            </li>
            <hr />
            <li className="font-lexend-deca text-4xl sm-below:text-xl font-medium leading-[65px] text-left">
              <div className="flex flex-col">
                <a href="#">Services</a>
                <a href="#">አገልግሎታችን</a>
              </div>
            </li>
            <hr />
            <li className="font-lexend-deca text-4xl sm-below:text-xl font-medium leading-[65px] text-left">
              <div className="flex flex-col">
                <a href="#">GET IN TOUCH</a>
                <a href="#">በዚህ ያግኙን</a>
              </div>
            </li>
            <hr />
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
