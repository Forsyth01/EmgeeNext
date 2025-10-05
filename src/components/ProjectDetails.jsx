// app/projects/[id]/page.jsx (Next.js 13+ App Router)
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { projects } from "../../../data/projects";
import Contact from "@/components/Contact";
import BackAndToggleButton from "@/components/BackAndToggleButton";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const imgVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55 } },
};

const ProjectDetail = ({ params }) => {
  const { id } = params; // Next.js dynamic route param
  const project = projects.find((p) => p.id === parseInt(id));

  const [lightboxImg, setLightboxImg] = useState(null);
  const [loaded, setLoaded] = useState({});

  // Disable scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxImg ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [lightboxImg]);

  if (!project) return <p className="p-4 text-red-500">Project not found</p>;

  return (
    <div className="bg-[#F5F8E9] dark:bg-[#1e1e1e] transition-colors duration-700 py-10">
      {!lightboxImg && <BackAndToggleButton />}

      <div className="max-w-[90%] min-h-screen mx-auto py-12">
        {/* Title + Date */}
        <motion.div
          className="flex items-center justify-between md:pb-2"
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl font-semibold tracking-tighter text-black dark:text-white">
            {project.title}
          </h1>
          <p className="md:text-xl text-sm font-regular text-gray-700 dark:text-gray-300">
            {project.date}
          </p>
        </motion.div>

        {/* Description + Tools */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-4"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xl font-regular text-gray-800 dark:text-gray-300">
            {project.description}
          </p>

          <div className="flex items-center gap-2 flex-wrap mt-2 md:mt-0">
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Tools:
            </h2>
            {project.tools?.map((tool, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-1 py-1 bg-white dark:bg-gray-800 px-2 rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                {tool.icon && (
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                )}
                <span className="text-black dark:text-white">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roles */}
        <motion.div
          className="flex gap-2 py-4 flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold tracking-tighter text-black dark:text-white">
            Role:
          </h2>
          {project.roles?.map((role, idx) => (
            <motion.span
              key={idx}
              className="text-xl tracking-tight font-normal text-gray-800 dark:text-gray-300"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* Role Description */}
        {project.roleDescription && (
          <motion.div
            className="py-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold tracking-tighter text-black dark:text-white">
              Read Description:
            </h2>
            <motion.p
              className="text-md mb-6 text-gray-800 dark:text-gray-300 whitespace-pre-line"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              {project.roleDescription}
            </motion.p>
          </motion.div>
        )}

        {/* Gallery */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 gap-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {project.images && project.images.length > 0 ? (
            project.images.map((img, idx) => (
              <motion.div
                key={idx}
                className={`rounded-lg shadow-lg overflow-hidden relative ${
                  img.span ? "md:col-span-2" : "md:col-span-1"
                }`}
                variants={imgVariant}
                onClick={() => setLightboxImg(img.src)}
              >
                {!loaded[idx] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 animate-pulse">
                    <span className="text-gray-500">Loading...</span>
                  </div>
                )}
                <Image
                  src={img.src}
                  alt={`${project.title} ${idx + 1}`}
                  width={800}
                  height={600}
                  className="cursor-pointer transition-opacity duration-500"
                  onLoadingComplete={() =>
                    setLoaded((prev) => ({ ...prev, [idx]: true }))
                  }
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="rounded-lg shadow-lg cursor-pointer"
              onClick={() => setLightboxImg(project.coverImage)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                width={800}
                height={600}
                className="rounded-lg shadow-lg cursor-pointer"
              />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            key="overlay"
            className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setLightboxImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImg(null);
              }}
              className="absolute top-10 right-5 md:right-[5%] text-2xl p-2 rounded-full bg-white text-black hover:bg-opacity-20 transition"
            >
              <X size={20} />
            </button>

            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-h-[90%] max-w-[90%] relative"
            >
              <Image
                src={lightboxImg}
                alt="Enlarged view"
                fill
                className="object-contain rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
