import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-[#606060] w-full px-4 flex items-center justify-between"> 
        <img src="/logo-namesmall.svg" alt="AMDE Consulting Architects & Engineers" className="w-64 h-24" />
        <div className="flex items-center justify-between">
          <p className="text-white text-sm font-normal">&copy; {new Date().getFullYear()} Copyright 2024 AMDE Consulting Architects & Engineers</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
