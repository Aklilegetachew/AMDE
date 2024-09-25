import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-[#606060] w-full px-4 flex items-center justify-between sm:h-[8vh]">
        <img
          src="/logo-namesmall.svg"
          alt="AMDE Consulting Architects &amp; Engineers"
          className="w-24 h-10 md:w-64"
        />
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between p-2">
          <p
            className="text-white text-center font-light"
            style={{ fontSize: "0.6rem" }}
          >
            {" "}
            {/* Inline style as an alternative */}
            &copy; {new Date().getFullYear()} Copyright 2024 AMDE Consulting
            Architects &amp; Engineers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
