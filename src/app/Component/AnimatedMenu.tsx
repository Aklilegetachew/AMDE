"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import HamburgerMenu from "../../../public/hamburger-menu.svg";
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
        className={`fixed top-0 left-0 w-full h-full secondary-color  text-white flex transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <nav className=" fixed w-full top-10 left-0 h-10 p-10 flex justify-between items-center">
          <button onClick={toggleMenu} className="flex items-center">
            <X />
          </button>

          <div className="flex items-center">
            <Logo className="w-26 h-auto mr-5 md:w-26 md:h-auto lg:w-30 lg:h-auto" />
          </div>
        </nav>
        {/* 
         */}
      </div>
    </div>
  );
};

export default AnimatedMenu;
