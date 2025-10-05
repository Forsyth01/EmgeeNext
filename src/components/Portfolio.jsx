"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../../data/projects";

const Portfolio = () => {
  // Animation variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="dark:bg-[#1A1A19] bg-[#F5F8E9] py-8 transition-colors duration-700">
      <motion.div
        id="portfolio"
        className=""
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
      >
        <div className="lg:bg-white lg:dark:bg-[#222222] rounded-2xl w-[90%] m-auto lg:p-8 transition-colors duration-700">
          <h1 className="md:text-center text-left text-2xl md:text-3xl font-medium md:font-semibold tracking-tighter text-gray-900 dark:text-white pb-2 pt-4">
            Portfolio / Case Studies
          </h1>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 space-y-6 md:space-y-0 mt-6 place-items-center"
            variants={container}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300, duration: 300 }}
                className={`cursor-pointer ${
                  (index > 5 ? "hidden" : "") + " " + (index > 3 ? "2xl:hidden" : "")
                }`}
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="flex flex-col rounded-2xl shadow bg-white dark:bg-[#F5F8E9] overflow-hidden">
                    {/* Image */}
                    <div className="w-full">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="object-cover rounded-t-2xl h-70 w-100"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 px-4 pb-4 pt-3">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-black dark:text-black">
                          {project.title}
                        </h2>
                        <p className="text-[12px] text-gray-500 dark:text-gray-500">
                          {project.date}
                        </p>
                      </div>
                      <p className="text-gray-700 dark:text-black text-sm mt-2 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex-grow" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-between items-center mt-6">
            <p className="font-medium dark:text-white tracking-tighter">
              See more projects?
            </p>
            <Link href="/projects">
              <button className="group flex items-center font-medium gap-2 bg-[#C2DE3A] rounded-full px-4 py-2 transition">
                View All
                <ArrowUpRight
                  size={16}
                  className="transform transition-transform duration-300 group-hover:rotate-45"
                />
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
