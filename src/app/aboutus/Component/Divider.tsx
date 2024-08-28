import React from "react";

const Divider: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center top-10 my-10">
      <div className="w-full h-px bg-gray-300"></div>
      <div className="absolute bg-white px-4 my-8">
        <img
          src="/PlaceHolders/logo-darkgray.svg"
          alt="Logo"
          className="h-auto w-[80px] md:w-[140px] lg:w-[160px] max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Divider;
