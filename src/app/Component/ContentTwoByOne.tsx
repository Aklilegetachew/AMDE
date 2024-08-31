import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // For smooth animations (optional)

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const DesignPage = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">SERVICES</h2>
      <div className="flex justify-center items-center">
        <Image
          src="/Consulting.png"
          alt="Brain Icon"
          width={100}
          height={100}
        />
        <p className="ml-4">SOME DESIGN SERVICE</p>
      </div>

      <h3 className="text-2xl font-semibold mt-16">CONSULTING</h3>
      <div className="flex justify-between">
        <Image
          src="/Hillhouse.jpg"
          alt="Building Image"
          width={300}
          height={200}
        />
        <p>SOME DESIGN SERVICE</p>
      </div>

      <h3 className="text-2xl font-semibold mt-16">ARCHITECTURAL DESIGN</h3>
      <div className="flex justify-between">
        <Image
          src="/house-sketch.png"
          alt="House Sketch"
          width={300}
          height={200}
        />
        <p>SOME DESIGN SERVICE</p>
      </div>
    </div>
  );
};

export default DesignPage;
