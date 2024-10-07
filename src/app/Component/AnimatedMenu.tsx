"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import HamburgerMenu from "../../../public/ham-thin1.svg";
import X from "../../../public/x.svg";
import closeIcon from "../../../public/icons8-close.svg";

const menuItems = [
  { title: "WE ARE AMDE", subtitle: "አምድ ነን", href: "/aboutus" },
  { title: "PUBLIC", subtitle: "የህዝብ አገልግሎት", href: "/Commercial" },
  { title: "RESIDENTIAL", subtitle: "የመኖሪያ ቦታ", href: "/Residential" },
  { title: "COMMUNITY", subtitle: "ማህበረሰብ (አቀፍ)", href: "/Community" },
  { title: "CONTACT", subtitle: "አግኙን", href: "/GetInTouch" },
];

const AnimatedMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="z-51 bg-transparent border-none cursor-pointer text-2xl md:text-3xl lg:text-4xl"
        aria-label="Toggle menu"
      >
        <span className="bg-red">
          <HamburgerMenu />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 left-0 w-full h-full bg-white text-white flex items-center z-50"
          >
            <div className="min-h-screen w-full bg-white text-black flex flex-col">
              <header className="flex justify-between items-center px-8 py-8">
                <button
                  onClick={toggleMenu}
                  className="flex items-center"
                  aria-label="Close menu"
                >
                  <img src="/closePng.png.png" alt="Logo" className="w-6 h-6" />
                  {/* <closeIcon className="" /> */}
                </button>
                <Link href="/" passHref>
                  <div className="flex items-center">
                    <img
                      src="/logo.svg"
                      alt="Logo"
                      className="w-6 h-6 text-black sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
                    />
                  </div>
                </Link>
              </header>
              <main className="flex-grow flex flex-col md:flex-row">
                <motion.div
                  variants={itemVariants}
                  className="w-full md:w-1/4 p-4 space-y-2 md:space-y-4"
                >
                  <Link
                    href="#"
                    className="block text-gray-500 hover:text-black text-sm md:text-base"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="#"
                    className="block text-gray-500 hover:text-black text-sm md:text-base"
                  >
                    LinkedIn
                  </Link>
                </motion.div>
                <nav className="w-full md:w-3/4 p-4 space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      variants={itemVariants}
                      className="menu-item transition-colors duration-300 ease-in-out"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Link href={item.href}>
                        <motion.div
                          className={`${
                            hoveredIndex === null || hoveredIndex === index
                              ? "text-[#606060]"
                              : "text-gray-300"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            // type: "keyframes",
                            // duration: 1.5,
                            // times: [0, 0.5, 1],
                            // ease: "linear",
                            type: "spring",
                            stiffness: 120,
                            damping: 15,
                          }}
                        >
                          {/* Title */}
                          <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold">
                            {item.title}
                          </div>

                          {/* Subtitle with a different default color */}
                          <div
                            className={`${
                              hoveredIndex === null || hoveredIndex === index
                                ? "text-[#9c9494]"
                                : "text-gray-300"
                            } text-2xl md:text-4xl lg:text-5xl font-extrabold`}
                          >
                            {item.subtitle}
                          </div>
                        </motion.div>
                        <hr />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedMenu;
