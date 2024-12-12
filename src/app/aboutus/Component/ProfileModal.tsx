"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: {
    name: string;
    title: string;
    imageSrc: string;
    qualifications?: string;
    description: string[];
    bullets: string[];
    Finishing: string[];
  };
}

export default function ProfileModal({
  isOpen,
  onClose,
  member,
}: ProfileModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 60, stiffness: 300 }}
          className="fixed inset-0 bg-[#cecdcd] z-50 overflow-y-auto"
        >
          <div className="relative min-h-full">
            <button onClick={onClose} className="absolute right-6 top-6 z-50">
              <X className="h-6 w-6" />
            </button>

            <div className="container mx-auto px-6 py-16 max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-12">
                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold mb-2"
                  >
                    {member.name}
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                  >
                    {member.title}
                  </motion.h2>
                  {member.qualifications && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-600 mb-12"
                    >
                      {member.qualifications}
                    </motion.p>
                  )}

                  <div className="space-y-6 text-justify">
                    {member.description.map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-gray-800 leading-relaxed"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                  <div className="space-y-6 text-justify">
                    {member.bullets.map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-gray-800 leading-relaxed pl-6"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                  <div className="space-y-6 mt-4 w-full text-justify">
                    {member.Finishing.map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="w- full text-gray-800 leading-relaxed "
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </div>

                <div className="lg:relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="sticky top-6"
                  >
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="w-full grayscale"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
