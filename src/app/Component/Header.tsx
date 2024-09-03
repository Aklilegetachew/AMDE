import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../../public/logo.svg";
import AnimatedMenu from "./AnimatedMenu";

const Header: React.FC = () => {
  return (
    <header className="h-[15vh] sm:h-[8vh] md:h-[13vh]">
      <nav className="w-full p-4 pb-1 flex justify-between items-center">
        <div className="flex items-center">
          <AnimatedMenu />
        </div>
        <div className="flex items-center ml-auto">
          {/* Logo */}
          {/* <div className="relative w-56 sm:w-20 md:w-24 lg:w-26 xl:w-30 h-auto">
            <Image
              src="/logo.png"
              alt="Selected Image"
              width={250}
              layout="fill"
              objectFit="contain" // Use 'contain' to scale the image proportionally
              className="grayscale-0"
            />
          </div> */}

          <div className="flex-shrink-0">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-12 h-auto  md:w-16 lg:w-20 xl:w-22 object-contain"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
