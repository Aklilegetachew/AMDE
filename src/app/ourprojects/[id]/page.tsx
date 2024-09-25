"use client";

import { notFound } from "next/navigation";

import { mediaCollections } from "../mediaData";
import ParallaxMedia from "../../Component/ParallaxMedia";
import Header from "@/app/Component/Header";

type Props = {
  params: {
    id: string | string[] | undefined; // Handle string, string[], or undefined
  };
};

export default function ParallaxPage({ params }: Props) {
  const { id } = params;

  
  if (typeof id !== "string") {
    notFound(); 
  }

  // Convert id to a number and use it as an index for the mediaCollections array
  const mediaIndex = parseInt(id as string, 10);

  // Check if the mediaIndex is a valid number and if it exists in mediaCollections
  const mediaArray =
    !isNaN(mediaIndex) && mediaCollections[mediaIndex]
      ? mediaCollections[mediaIndex]
      : [];

  if (mediaArray.length === 0) {
    notFound(); // Trigger a 404 page if the media array is not found
  }

  return (
    <div>
      <Header />
      <ParallaxMedia mediaArray={mediaArray} />
    </div>
  );
}
