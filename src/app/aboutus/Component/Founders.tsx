"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProfileModal from "./ProfileModal";

interface TeamMember {
  name: string;
  title: string;
  imageSrc: string;
  qualifications?: string;
  description: string[];
  bullets: string[];
  Finishing: string[];
}
const TeamPage = () => {
  const teamMembers = [
    {
      name: "Addisalem Feleke",
      title: "G.Manager, Architect",
      imageSrc: "/Team/Addisalem.jpg",
      style: "object-cover object-top grayscale",
      qualifications: "",
      description: [
        "Addis alem, founder and senior architect of AMDE, is a graduate of Addis Ababa university in Architecture and urban planning. She is a trained professional in both architectural and urban scales with considerable experience in building designs and master planning of institutional facilities. The physical development plan for the Ethiopian Airline compound and master planning of the institute for the Rehabilitation and medication for physically challenged people were to name the few projects that were under Addis’s project coordination.   ",
        "Amongst many, she took core positions in the development of; ",
      ],
      bullets: [
        "-	Meskel Square to City Hall Street Refurbishment project (Sub consultant and design review team leader at AMDE Design)",
        "-	National urban development scheme, Local Development plans and urban design plans – preparation of National Urban design manual under egis international ",
        "-	Preparation of the structure plan of Addis Ababa under Addis Ababa and Surrounding Oromia Integrated Plan Project Office (AASOID) (previously recognized as Addis Ababa city planning office (AACPO)) ",
        "-	Urban design project for Basha Wolde Chilot area",
        "-	Development of master plan for the 13 University projects under GTZ-IA University capacity building program.",
      ],
      Finishing: [
        "She is also a passionate researcher in areas of socio-spatial dialogue and its manifestations. Being a faculty member of the Institute of Architecture, Building constructions and City Development (EIABC, Addis Ababa University) for almost two decades, has infused her with the need for research based approach for every community based projects. In this process, AMDE strives to find the intersection between research and the implementation of ideas. ",
      ],
    },
    {
      name: "Aziza Abdulfetah",
      title: "Landscape Architect",
      imageSrc: "/Team/Aziza.jpg",
      style: "object-cover object-top grayscale",
      qualifications: "B Arch",
      description: [
        "Aziza brings extensive experience in commercial and residential architecture.",
        "She has been instrumental in developing the practice's sustainable design approach.",
      ],
      bullets: [],
      Finishing: [],
    },
    {
      name: "Beminet Yeshiwas",
      title: "Accountant",
      imageSrc: "/Team/Beminet.jpg",
      style: "object-cover object-top grayscale",
      qualifications: "B Arch",
      description: [
        "Beminet brings extensive experience in commercial and residential architecture.",
        "She has been instrumental in developing the practice's sustainable design approach.",
      ],
      bullets: [],
      Finishing: [],
    },
    {
      name: "Ruth Mekonnen",
      title: "Drafting Assistant",
      imageSrc: "/Team/Ruth.jpg",
      style: "object-cover object-top grayscale",
      qualifications: "",
      description: [
        "Ruth brings extensive experience in commercial and residential architecture.",
        "She has been instrumental in developing the practice's sustainable design approach.",
      ],
      bullets: [],
      Finishing: [],
    },
    {
      name: "Zelalem Negash",
      title: "Civil Engineer",
      imageSrc: "/Team/Zelalem.jpg",
      style: "object-cover object-top grayscale",
      qualifications: "",
      description: [
        "Zelalem brings extensive experience in commercial and residential architecture.",
        "He has been instrumental in developing the practice's sustainable design approach.",
      ],
      bullets: [],
      Finishing: [],
    },
  ];
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  return (
    <div className="py-6 my-40">
      <h2 className="text-2xl font-semibold text-center mb-12">OUR TEAM</h2>
      <main className="container  px-0">
        <div className="flex flex-wrap">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <div className="relative pb-[120%]">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className={member.style}
                  // style={{
                  //   filter: "grayscale(1) contrast(1.5) brightness(0.9)",
                  // }}
                />
              </div>
              <div className="p-4 flex bg-white w-full">
                <div className="w-3/4">
                  <h2 className="text-lg font-semibold">{member.name}</h2>
                  <p className="text-gray-600 text-sm">{member.title}</p>
                </div>
                <button
                  className="w-1/4 h-10 ml-4 px-2 py-2 bg-gray-200 text-gray-800 rounded-lg text-xs"
                  onClick={() => setSelectedMember(member)}
                >
                  Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <ProfileModal
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        member={selectedMember || teamMembers[0]}
      />
    </div>
  );
};

export default TeamPage;
