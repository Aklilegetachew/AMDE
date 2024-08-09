import React from "react";
import Link from "next/link";

import Logo from "../../../public/logo.svg";
import HamburgerMenu from "../../../public/hamburger-menu.svg";
import AnimatedMenu from './AnimatedMenu';

const Header: React.FC = () => {
  return (
    <header>
      <nav className="w-full p-4 pb-32 flex justify-between items-center ">
        <div className="flex items-center">
        <AnimatedMenu />
        </div>
        <div className="flex items-center">
          <Logo className="w-26 h-auto mr-5 md:w-26 md:h-auto lg:w-30 lg:h-auto" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
