import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-[#606060] w-full px-4 flex items-center justify-between h-[8vh]">
        <img
          src="/logo-namesmall.svg"
          alt="AMDE Consulting Architects &amp; Engineers"
          className="w-24 h-10 md:w-64"
        />
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between p-2">
          <p className="text-white text-center text-xs sm:text-sm lg:text-base font-normal">
            &copy; {new Date().getFullYear()} Copyright 2024 AMDE Consulting
            Architects &amp; Engineers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
