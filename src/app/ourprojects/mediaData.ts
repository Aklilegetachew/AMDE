type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string; // Only for images
};

// Ensure the type is properly defined in the array
export const mediaCollections: MediaItem[][] = [
  [
    { type: "image", src: "/designprototype.jpg", alt: "Image 1" },
    { type: "video", src: "./", alt: "Image 2" },
  ],
  [
    { type: "video", src: "1011248268", alt: "Image 4" },
    { type: "image", src: "/Hillhouse.jpg", alt: "Image 3" },
    { type: "image", src: "/Hillhouse.jpg", alt: "Image 3" },
  ],
];
