import React from "react";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Full Name",
      position: "CEO, Founder",
      image: "/PlaceHolders/person1.png", // Replace with actual image paths
    },
    {
      name: "Full Name",
      position: "COO, Creative Director",
      image: "/PlaceHolders/person2.png", // Replace with actual image paths
    },
    {
      name: "Full Name",
      position: "Architect",
      image: "/PlaceHolders/person1.png", // Replace with actual image paths
    },
  ];

  return (
    <div className="py-6 my-40">
      <h2 className="text-2xl font-semibold text-center mb-12">OUR TEAM</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-3xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto w-40 h-40 md:w-48 md:h-48  object-cover"
            />
            <h3 className="text-lg font-medium mt-4">{member.name}</h3>
            <p className="text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
