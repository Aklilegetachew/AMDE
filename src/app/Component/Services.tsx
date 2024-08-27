import React from "react";


const Services: React.FC = () => {
  return (
    <div className="paper">
      <div className="justify-center text-center m-16 p-6 text-4xl font-bold paragcolor">
        SERVICES
      </div>

      <div className="container mx-auto p-4 flex justify-evenly">
        <div className="w-auto flex flex-col justify-center items-center">
          <div className="w-full flex justify-center mb-6">
            <img
              src="/Consulting.png"
              alt="Description of Image 1"
              className="h-auto flex justify-center"
            />
          </div>
          <h5 className="mt-auto leading-7 text-2xl flex justify-center w-full">
            CONSULTING
          </h5>
        </div>
        <div className="w-auto flex flex-col justify-center items-center">
          <div className="w-full flex justify-center mb-6">
            <img
              src="/ArchDesign.png"
              alt="Description of Image 1"
              className="h-auto flex justify-center"
            />
          </div>
          <h5 className="mt-auto leading-7 text-2xl flex justify-center w-full">
            ARCHITECTURAL DESIGN
          </h5>
        </div>
        <div className="w-auto flex flex-col justify-center items-center">
          <div className="w-full flex justify-center mb-6">
            <img
              src="/Engineering.png"
              alt="Description of Image 1"
              className="w-[160px] h-auto flex justify-center"
            />
          </div>
          <h5 className="mt-auto leading-7 text-2xl flex justify-center w-full">
            ENGINEERING
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Services;
