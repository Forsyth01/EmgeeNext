"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Contact, Experience, BackAndToggleButton } from "@/components";
import { projects } from "../../../data/projects";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <motion.div
      className="bg-[#F5F8E9] dark:bg-[#1e1e1e] transition-colors duration-700 relative"
      initial="hidden"
      animate="visible"
    >
      <BackAndToggleButton />

      {/* Decorative image */}
      <motion.div
        className="absolute right-0 top-15 lg:block hidden pt-4 cursor-pointer"
             initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/penproject.png"
          alt="Pen project"
          width={224}
          height={224}
          className="h-56 w-auto"
        />
      </motion.div>

      <div className="w-[90%] min-h-screen m-auto py-10 relative">
        {/* Section Heading */}
        <motion.div
          className="md:py-14 py-10 text-center font-semibold md:text-4xl text-2xl tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
           variants={containerVariants}
        >
          <h1 className="dark:text-white">
            Check out some of my works <br />
            carefully crafted with Love and <br className="hidden md:flex" />{" "}
            dedication.
          </h1>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-6 place-items-center"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="cursor-pointer hover:-translate-y-1 transition-transform duration-500"
              variants={projectVariants}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="flex flex-col rounded-2xl shadow bg-white dark:bg-[#F5F8E9] overflow-hidden">
                  {/* Image */}
                  <div className="w-full">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="object-cover rounded-t-2xl h-70 w-100"
                      priority={index === 0} // only first image loads immediately
                      loading={index === 0 ? "eager" : "lazy"}
                      placeholder="blur"
                      blurDataURL="/images/placeholder.png" // tiny blurred version
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
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Additional sections */}
      <Experience />
      <Contact />
    </motion.div>
  );
}
