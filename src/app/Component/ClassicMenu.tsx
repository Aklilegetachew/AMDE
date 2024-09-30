"use client"

import { useState } from "react"

import X from "../../../public/x.svg";
import Link from "next/link"
import { motion } from "framer-motion"

const navItems = [
  { title: "PUBLIC", subtitle: "ARUMONI" },
  { title: "COMMERCIAL", subtitle: "A-KIRI TANGATA" },
  { title: "RESIDENTIAL", subtitle: "KAINGA NOHO" },
  { title: "STUDIO", subtitle: "NGA TANGATA" },
  { title: "CONTACT", subtitle: "RANGITAKI" },
]

export default function Component() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <header className="flex justify-between items-center p-4">
        <X className="w-6 h-6" />
      
        <div className="text-xl font-bold">PATTERSONS</div>
      </header>
      <main className="flex-grow flex">
        <div className="w-1/4 p-4 space-y-2">
          <Link href="#" className="block text-gray-500 hover:text-black">
            Instagram
          </Link>
          <Link href="#" className="block text-gray-500 hover:text-black">
            LinkedIn
          </Link>
        </div>
        <nav className="w-3/4 p-4 space-y-4 text-5xl font-bold">
          {navItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="transition-colors duration-300 ease-in-out"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
            >
              <div
                className={
                  hoveredIndex === null || hoveredIndex === index
                    ? "text-black"
                    : "text-gray-300"
                }
              >
                {item.title}
              </div>
              <div
                className={
                  hoveredIndex === null || hoveredIndex === index
                    ? "text-gray-300"
                    : "text-gray-100"
                }
              >
                {item.subtitle}
              </div>
            </motion.div>
          ))}
        </nav>
      </main>
    </div>
  )
}