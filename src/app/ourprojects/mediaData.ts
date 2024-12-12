type MediaItem = {
  type: "image" | "video" | "text";
  src: string;
  alt?: string;
};

// Ensure the type is properly defined in the array
export const mediaCollections: MediaItem[][] = [
  [
    { type: "image", src: "/GreenLadder.jpg", alt: "6" },
    { type: "text", src: "Green Lader", alt: "Green Lader" },
  ],
  [
    { type: "image", src: "/meskelSquarecrop.jpg", alt: "0" },
    { type: "text", src: "/Hillhouse.jpg", alt: "Meskel Square " },
  ],
  [
    { type: "video", src: "1011250451", alt: "1" },
    // { type: "image", src: "/greenladerbetter.png", alt: "1" },
    { type: "text", src: "/Hillhouse.jpg", alt: "Green Tower" },
  ],
  [
    { type: "image", src: "/Hillhouse.jpg", alt: "4" },
    { type: "image", src: "/Hillhouseinterior.jpg", alt: "4" },
    { type: "text", src: "/Hillhouse.jpg", alt: "Hill House - interior" },
  ],
  [
    { type: "image", src: "/Hillhouse2.jpg", alt: "3" },
    { type: "image", src: "/Hillhousefront.jpg", alt: "3" },
    { type: "image", src: "/Hillhouseside.jpg", alt: "3" },
    { type: "text", src: "/Hillhouse.jpg", alt: "Hill House" },
  ],
  [
    { type: "image", src: "/KKPrivate.jpg", alt: "5" },
    { type: "image", src: "/Gallerystair1.jpg", alt: "5" },
    { type: "image", src: "/Gallerystair2.jpg", alt: "5" },
    { type: "image", src: "/Gallerystair3.jpg", alt: "5" },
    { type: "text", src: "/Hillhouse.jpg", alt: "Gallery stair" },
  ],
  [
    { type: "image", src: "/meskelSquareClean.jpg", alt: "7" },
    { type: "text", src: "/Hillhouse.jpg", alt: "Mini Plaza" },
  ],
  [
    { type: "image", src: "/meskelCityhall.jpg", alt: "8" },
    { type: "image", src: "/meskelsquareHiddenspace.jpg", alt: "8" },
    { type: "image", src: "/meskelSquare2.jpg", alt: "8" },
    { type: "text", src: "/Hillhouse.jpg", alt: "MCH: Hidden spaces" },
  ],
  [
    // { type: "video", src: "1011248268", alt: "2" },
    { type: "image", src: "/greenInt1.jpg", alt: "2" },
    // { type: "image", src: "/GreenInt2.jpg", alt: "2" },
    { type: "image", src: "/GreenInt3.jpg", alt: "2" },
    { type: "image", src: "/Greentowerinterior.jpg", alt: "2" },
    { type: "image", src: "/Greentowerinteriorside.jpg", alt: "2" },
    { type: "text", src: "/Hillhouse.jpg", alt: "The Green Tower - Interior" },
  ],
];

interface ProjectDetailsProps {
  projectCode: string;
  location: string;
  description: string;
  area: string;
  completionYear: string;
  awards?: string[];
}

export const textDetails: ProjectDetailsProps[] = [
  {
    projectCode: "MCH: Meskel Square to City Hall Street, Addis Ababa",
    location: "3.5 km pedestrian walkway",
    description:
      "Cited at the heart of Addis Ababa, the whole project is intended to keep the old structure and function intact and enhance its linkage with the adjacent functions, through well designed mobility system, and introduction of public facilities. The project begins with the re-imagination of the vast plaza of the Meskel square and ends with a mini plaza linked in-between by the 3.5km pedestrian refurbished pedestrian walkway. Mobility (both pedestrian and vehicular) was the central governing element in the reorganization of the various spaces at the two plazas and recreating the 3.5 km pedestrian walkway.    ",
    area: "Sub-consultant",
    completionYear: "Construction Completed",
    awards: [],
  },
  {
    projectCode: "Green Tower",
    location: "3B+G+15 Apartment Building",
    description:
      "Aiming at creating a luxurious residence, EMADA Homes is an apartment building with a well-integrated green to each of the spaces. The central aim is to create one whole connected green space beginning from the reception’s lavish garden leading to the intermediary public space, which is serving as an elevated public space privileged with a 360 view and culminating with a pent houses’ indoor and outdoor garden.",
    area: "Consultant",
    completionYear: "Pending construction",
    awards: [],
  },
  {
    projectCode: "Green Tower - Interior",
    location: "",
    description:
      "The vertical green space stretches from the ground floor to the top, creating the feeling of being on the ground floor throughout the apartment. Nude colors in harmony with the green create a calm atmosphere across the entire space.",
    area: "Consultant ",
    completionYear: "Pending construction",
    awards: [],
  },
  {
    projectCode: "Hill House",
    location: "Yeka Mountain, Addis Ababa",
    description:
      "Sitting on one of the hills of Addis, the Yeka mountain, the private residence relishes the city view rested within the green environment. With a dual access to the site, the project is socketed at steeping gradient allowing multiple grounds. It draws in the city view and the adjacent green into the spaces through wide glass façade. Due to the sloping land, multiple grounds are availed with three level access to the adjacent green landscape.",
    area: "Consultant",
    completionYear: "Under Construction",
    awards: [],
  },
  {
    projectCode: "Hill House - Interior",
    location: "",
    description:
      "Shades of brown with a blend of white is utilized in the interiors to create earthly feeling. Natural light plays a major role in illuminating the spaces through the wide curtain walls. Spacious interior is achieved by avoiding separating walls between spaces. ",
    area: "Consultant",
    completionYear: "Under Construction",
    awards: [],
  },
  {
    projectCode: "Gallery stair",
    location: "",
    description:
      "The stair way is best located as the tying element for all the floors beginning from the entry way. The theme of the company is reconstructed around the stair way conceptualized as the vertical gallery. This vertical gallery contains unifying color and material beginning from the reception area, the company’s recognition and achievement awards and visual elements which communicate essential materials to the guests.",
    area: "Consultant ",
    completionYear: "Conceptual Stage",
    awards: [],
  },
  {
    projectCode: "Green Ladder",
    location: "3B+G+16 Apartment Building",
    description:
      "An upcoming residential apartment building featuring 16 floors and integrating green space throughout.",
    area: "Consultant",
    completionYear: "Design Stage",
    awards: [],
  },

  {
    projectCode: "MCH: Mini Plaza",
    location: "Churchill Avenue, Addis Ababa",
    description:
      "The physical and visual connection of the Churchill avenue and the city hall is further accentuated by the mini plaza. It serves as both a connector for the commuters and a place of destination.",
    area: "Sub-consultant",
    completionYear: "Construction Completed",
    awards: [],
  },
  {
    projectCode: "MCH: Hidden Spaces",
    location: "",
    description:
      "To keep the existing iconic wall intact and incorporate functionality along the line, a replica is constructed that has hidden spaces serving the public. Landscaped seats are provided at places where there are no attached programs.",
    area: "Sub-consultant",
    completionYear: "Construction Completed",
    awards: [],
  },
];
