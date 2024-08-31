import React from "react";

interface PageHeadingProps {
  amharictitle: string;
  title: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ amharictitle, title }) => {
  return (
    <section
      className="relative w-full h-[350px] bg-[#606060] mt-6 bg-[url('/GroupLogo.png')] bg-contain bg-right bg-no-repeat"
      // style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full text-white">
        <div className=" w-full mt-8 grid m-4 justify-center items-center">
          <span className="text-5xl font-bold align-text-center">{title}</span>
          <span className="text-3xl mt-4 font-bold text-center text-[#727272]">
            {amharictitle}
          </span>
        </div>

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
