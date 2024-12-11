import Image from "next/image";
import { Menu } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  imageSrc: string;
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <main className="container mx-auto px-0 sm:px-4 mt-16 py-6 my-40">
      <div className="flex flex-wrap">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 relative group"
          >
            <Image
              src={member.imageSrc}
              alt={member.name}
              width={400}
              height={400}
              className="w-full aspect-square object-cover grayscale"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p className="text-gray-600 text-sm">{member.title}</p>
              <button className="mt-2 px-4 py-1 bg-gray-200 text-gray-800 rounded-full text-xs">
                Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
