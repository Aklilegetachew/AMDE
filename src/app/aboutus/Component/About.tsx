import React from "react";

const About: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:flex md:items-center md:justify-between">
      <div className="md:w-1/2">
        <img
          src="/PlaceHolders/Aboutus.png"
          alt="Architecture Image"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12">
        <h2 className="text-4xl font-bold mb-4">ABOUT US</h2>
        <h3 className="text-2xl font-semibold mb-4">
          AMDE CONSULTING ARCHITECTS &amp; ENGINEERS
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </section>
  );
};

export default About;
