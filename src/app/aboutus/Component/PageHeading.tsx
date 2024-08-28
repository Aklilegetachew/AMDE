import React from "react";

const PageHeading: React.FC = () => {
  return (
    <section
      className="relative w-full h-[350px] bg-cover bg-center"
      style={{ backgroundImage: `url('/meskelsquare.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative  z-10 flex flex-col items-center justify-between h-full text-white">
        <h1 className="text-5xl font-bold mt-8">WHO WE ARE</h1>
        <div className="flex top-10">
          <div className="mt-6 mx-4">
            <svg
              className="w-5 h-10 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          <p className="mt-6 text-sm">Scroll Down To Discover More</p>
          <div className="mt-6 mx-4">
            <svg
              className="w-5 h-10 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeading;
