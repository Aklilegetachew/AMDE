import React from "react";

const PageHeading: React.FC = () => {
    return (

        <div className="relative w-full h-[300px] bg-cover bg-center transition-all duration-500 hover:filter-none" style={{ backgroundImage: "url('/meskelsquare.jpg')" }}>
        <div className="absolute inset-0 bg-black grayscale opacity-50"></div>
        <div className="absolute inset-0 flex top-12 justify-center">
          <h2 className="text-white text-2xl md:text-4xl font-semibold">
            GET IN TOUCH
          </h2>
        </div>
        <div className="absolute inset-0 filter grayscale transition-all duration-500 hover:grayscale-0"></div>
      
      </div>
    )
}

export default PageHeading;