"use client"; // Needed because we use hooks and framer-motion

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const BackAndToggleButton = ({ fallback = "/", className }) => {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <motion.div
      className={`sticky top-10 z-[500] md:w-[95%] m-auto md:px-6 px-4 flex items-center justify-between ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
    >
      {/* Back Arrow with hover animation */}
      <motion.button
        onClick={goBack}
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.95, rotate: 0 }}
        className="p-2 bg-[#C2DE3A] rounded-full shadow-lg"
      >
        <ArrowLeft className="text-black" size={28} />
      </motion.button>

      {/* Theme Toggle */}
      <div className="hidden md:flex">
        <ThemeToggle />
      </div>
    </motion.div>
  );
};

export default BackAndToggleButton;
