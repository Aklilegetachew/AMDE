import React from "react";
import Link from "next/link";

import Logo from "../../../public/logo.svg";

const Whoarewe: React.FC = () => {
  return (
    <div className="paper">
      <div className="justify-center text-center m-16 p-6 text-4xl font-bold paragcolor">
        WHO WE ARE ?
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Section */}
          <div className="flex flex-col p-6">
            <h2 className=" text-2xl font-normal mb-4 paragcolor">
              AMDE CONSULTING ARCHITECTS &amp; ENGINEERS
            </h2>
            <p className="font-lexend-deca text-base font-normal leading-[22.5px] paragcolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. 
            </p>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center items-center">
            <img
              src="/design1.png"
              alt="Description of Image 1"
              className="w-full h-auto object-cover border border-gray-200 m-6 mb-20"
            />
            <img
              src="/logo-transparent.svg"
              alt="Description of Image 2"
              className="absolute w-[213px] h-[186.95px] object-cover border border-gray-200  bottom-0 right-50 transform translate-x-8 -translate-y-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoarewe;
