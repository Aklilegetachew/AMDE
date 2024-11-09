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
    { type: "image", src: "/ColorexSmall.png", alt: "5" },
    { type: "text", src: "/Hillhouse.jpg", alt: "Colorx" },
  ],
  [
    { type: "image", src: "/miniPlaza.jpg", alt: "7" },
    { type: "text", src: "/Hillhouse.jpg", alt: "Mini Plaza" },
  ],
  [
    { type: "image", src: "/meskelCityhall.jpg", alt: "8" },
    { type: "image", src: "/meskelsquareHiddenspace.jpg", alt: "8" },
    { type: "image", src: "/meskelSquare2.jpg", alt: "8" },
    { type: "text", src: "/Hillhouse.jpg", alt: "MCH: Hidden spaces" },
  ],
  [
    { type: "video", src: "1011248268", alt: "2" },
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
      "The project aims to maintain the old structure and function while enhancing its linkage with adjacent functions through a well-designed mobility system. It spans 3.5km of refurbished pedestrian walkway connecting two plazas. Mobility, both pedestrian and vehicular, governs the reorganization of the spaces.",
    area: "Sub-consultant",
    completionYear: "Construction Completed",
    awards: [],
  },
  {
    projectCode: "Green Tower",
    location: "3B+G+15 Apartment Building",
    description:
      "A luxurious apartment building with well-integrated green spaces. The design emphasizes a connected green environment from the lavish garden at the reception to the penthouse's indoor and outdoor gardens, featuring public spaces with 360-degree views.",
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
      "A private residence on a steep gradient with dual access, offering a view of the city and adjacent green landscapes. Wide glass facades draw in views, with three-level access to the surrounding landscape due to the sloping terrain.",
    area: "Consultant",
    completionYear: "Under Construction",
    awards: [],
  },
  {
    projectCode: "Hill House - Interior",
    location: "",
    description:
      "The interior design uses earthy shades of brown and white, with natural light playing a key role in illuminating the spaces through wide curtain walls. The spacious interior is achieved by minimizing walls between spaces.",
    area: "Consultant",
    completionYear: "Under Construction",
    awards: [],
  },
  {
    projectCode: "Colorex",
    location: "9-floor apartment building ",
    description:
      "A nine-story residential apartment that experiments with bold colors, assigning each unit a distinct color palette. The building provokes interaction with its environment through its daring and playful use of color.",
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
      "The physical and visual connection between Churchill Avenue and the City Hall is enhanced by the mini plaza, serving as both a connector for commuters and a destination.",
    area: "Sub-consultant",
    completionYear: "Construction Completed",
    awards: [],
  },
  {
    projectCode: "MCH: Hidden Spaces",
    location: "",
    description:
      "A replica is constructed to keep the existing iconic wall intact while incorporating functionality. It includes hidden spaces serving the public, with landscaped seats in areas without attached programs.",
    area: "Sub-consultant",
    completionYear: "Construction Completed",
    awards: [],
  },
];
