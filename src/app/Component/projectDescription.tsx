import React from "react";

interface ProjectDetailsProps {
  projectCode: string;
  location: string;
  description: string;
  area: string;
  completionYear: string;
  awards?: string[];
}

export default function ProjectDetails({
  projectCode = "D72",
  location = "Tamaki Makaurau",
  description = "A mixed use conversion uses a woven aluminium façade to filter New Zealand's bright sunlight. 5400m² of commercial space around a spiral shaped central courtyard.",
  area = "5400m²",
  completionYear = "1996",
  awards = ["BOMA Award for Building Excellence, 1996"],
}: ProjectDetailsProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold mb-4">{projectCode}</h1>
      <h2 className="text-2xl text-gray-500 mb-12">{location}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="col-span-2">
          <p className="text-lg">{description}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Status</h3>
          <p className="text-lg">{completionYear}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Task</h3>
        <div className="border-t border-gray-300">
          <div className="font-3xl text-lg py-4 border-b border-gray-300">
            {area}
          </div>
        </div>
      </div>
    </div>
  );
}
