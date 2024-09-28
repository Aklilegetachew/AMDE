"use client";

import { notFound } from "next/navigation";

import { mediaCollections } from "../mediaData";
import ParallaxMedia from "../../Component/ParallaxMedia";
import Header from "@/app/Component/Header";
import { Lexend_Deca } from "next/font/google";

type Props = {
  params: {
    id: string | string[] | undefined; // Handle string, string[], or undefined
  };
};
const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Optional: specify weights
});
export default function ParallaxPage({ params }: Props) {
  const { id } = params;

  if (typeof id !== "string") {
    notFound();
  }

  const mediaIndex = parseInt(id as string, 10);

  const mediaArray =
    !isNaN(mediaIndex) && mediaCollections[mediaIndex]
      ? mediaCollections[mediaIndex]
      : [];

  if (mediaArray.length === 0) {
    notFound();
  }

  return (
    <div className={`${lexendDeca.className}`}>
      <Header />
      <ParallaxMedia mediaArray={mediaArray} />
    </div>
  );
}
