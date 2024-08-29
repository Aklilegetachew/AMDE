import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-[#606060] w-full px-4 flex items-center justify-between h-[8vh]">
        <img
          src="/logo-namesmall.svg"
          alt="AMDE Consulting Architects &amp; Engineers"
          className="w-64 h-10"
        />
        <div className="flex items-center justify-between">
          <p className="text-white text-sm font-normal">
            &copy; {new Date().getFullYear()} Copyright 2024 AMDE Consulting
            Architects &amp; Engineers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
