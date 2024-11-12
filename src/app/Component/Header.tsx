"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AnimatedMenu from "./AnimatedMenu";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    console.log(":Path Name", pathname);
    const handleScroll = () => {
      const threshold = 200;
      const scrollPosition = window.scrollY;
      if (pathname == "/") {
        setIsDarkBackground(scrollPosition > threshold);
      } else if (
        pathname == "/ourprojects/1" ||
        pathname == "/ourprojects/4" ||
        pathname == "/ourprojects/6" ||
        pathname == "/ourprojects/7"
      ) {
        setIsDarkBackground(true);
      } else {
        setIsDarkBackground(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 h-[15vh] sm:h-[8vh] md:h-[13vh]">
      <nav className="w-full p-4 pb-6 flex justify-between items-center">
        <div
          className={`flex items-center  ${
            isDarkBackground ? "text-white" : "text-[#606060]"
          }`}
        >
          <AnimatedMenu />
        </div>
        <div className="flex items-center ml-auto">
          <Link href="/" passHref>
            <div className="flex-shrink-0">
              <p
                className={`font-medium text-2xl md:text-4xl md:font-medium lg:text-5xl transition-colors duration-300 ${
                  isDarkBackground ? "text-white" : "text-[#606060]"
                }`}
              >
                AMDE
              </p>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
