import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../../public/logo.svg";
import AnimatedMenu from "./AnimatedMenu";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 h-[15vh] sm:h-[8vh] md:h-[13vh] ">
      <nav className="w-full p-4 pb-6 flex justify-between items-center">
        <div className="flex items-center">
          <AnimatedMenu />
        </div>
        <div className="flex items-center ml-auto">
          <Link href="/" passHref>
            <div className="flex-shrink-0">
              {/* <img
                src="/logo.svg"
                alt="Logo"
                className="w-12 h-auto  md:w-16 lg:w-20 xl:w-22 object-contain"
              /> */}
              <p className="font-medium text-2xl md:text-4xl md:font-medium lg:text-5xl text-[#606060]">
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
