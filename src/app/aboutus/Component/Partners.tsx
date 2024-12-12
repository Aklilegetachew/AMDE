import React from "react";

const Partners = () => {
  const teamMembers = [
    {
      name: "Full Name",
      position: "CEO, Founder",
      image: "/BrandEng.jpg",
    },
    {
      name: "Full Name",
      position: "Architect",
      image: "/EH.png",
    },
    {
      name: "Full Name",
      position: "COO, Creative Director",
      image: "/Jeroccia.png",
    },
  ];

  return (
    <div className="py-6 my-28">
      <h2 className="text-2xl font-semibold text-center mb-10">OUR PARTNERS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 w-3xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto w-80 h-80  object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
