"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { projects } from "../../../../data/projects";
import { Contact, BackAndToggleButton } from "@/components";
import Image from "next/image";

// Stagger container for gallery
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// Individual image animation
const imgVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55 } },
};

export default function ProjectDetail({ params }) {
  const { id } = React.use(params);
  const project = projects.find((p) => p.id === parseInt(id));

  const [lightboxImg, setLightboxImg] = useState(null);
  const [loadedImages, setLoadedImages] = useState({}); // Track which images are loaded

  // Disable scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxImg ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [lightboxImg]);

  const handleImageLoad = (idx) => {
    setLoadedImages((prev) => ({ ...prev, [idx]: true }));
  };

  if (!project) {
    return (
      <p className="p-4 text-red-500 text-center font-medium">
        Project not found
      </p>
    );
  }

  return (
    <div className="bg-[#F5F8E9] dark:bg-[#1e1e1e] transition-colors duration-700 py-10">
      {!lightboxImg && <BackAndToggleButton />}

      <div className="max-w-[90%] min-h-screen mx-auto py-12">
        {/* Title + Date */}
        <motion.div
          className="flex items-center justify-between md:pb-2"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl font-semibold tracking-tighter text-black dark:text-white">
            {project.title || <Skeleton width="200px" height="28px" />}
          </h1>
          <p className="md:text-xl text-sm text-gray-700 dark:text-gray-300">
            {project.date || <Skeleton width="100px" height="20px" />}
          </p>
        </motion.div>

        {/* Description + Tools */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-4"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xl text-gray-800 dark:text-gray-300">
            {project.description || <Skeleton width="80%" height="20px" />}
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
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                {tool.icon ? (
                  loadedImages[`tool-${idx}`] ? (
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={16}
                      height={16}
                      className="object-contain"
                      onLoad={() => handleImageLoad(`tool-${idx}`)}
                    />
                  ) : (
                    <Skeleton width="16px" height="16px" />
                  )
                ) : null}
                <span className="text-black dark:text-white">{tool.name || <Skeleton width="40px" height="12px" />}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roles */}
        <motion.div
          className="flex gap-2 py-4 flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold tracking-tighter text-black dark:text-white">
            Role:
          </h2>
          {project.roles?.map((role, idx) => (
            <motion.span
              key={idx}
              className="text-xl tracking-tight text-gray-800 dark:text-gray-300"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {role || <Skeleton width="80px" height="16px" />}
            </motion.span>
          ))}
        </motion.div>

        {/* Role Description */}
        {project.roleDescription && (
          <motion.div
            className="py-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold tracking-tighter text-black dark:text-white">
              Read Description:
            </h2>
            <motion.p
              className="text-md mb-6 text-gray-800 dark:text-gray-300 whitespace-pre-line"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {project.roleDescription || <Skeleton width="90%" height="16px" />}
            </motion.p>
          </motion.div>
        )}

        {/* Full-Width Gallery */}
        <motion.div
          className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {(project.images?.length ?? 0) > 0 ? (
            project.images.map((img, idx) => (
              <motion.div
                key={idx}
                className={`rounded-lg shadow-lg overflow-hidden relative mb-4 cursor-pointer ${
                  img.span ? "col-span-1 md:col-span-2" : "col-span-1"
                }`}
                variants={imgVariant}
                onClick={() => setLightboxImg(img.src)}
              >
                {!loadedImages[`img-${idx}`] && <Skeleton className="absolute inset-0 w-full h-full" />}
                <Image
                  src={img.src}
                  alt={`${project.title} ${idx + 1}`}
                  width={img.span ? 1920 : 1200}
                  height={img.span ? 1080 : 720}
                  sizes={img.span ? "100vw" : "(max-width: 768px) 100vw, 90vw"}
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="w-full h-auto object-cover"
                  onLoad={() => handleImageLoad(`img-${idx}`)}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="w-full rounded-lg shadow-lg cursor-pointer relative mb-4"
              onClick={() => setLightboxImg(project.coverImage)}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {!loadedImages.cover && <Skeleton className="absolute inset-0 w-full h-full" />}
              <Image
                src={project.coverImage}
                alt={project.title}
                width={1200}
                height={720}
                sizes="(max-width: 768px) 100vw, 90vw"
                priority
                loading="eager"
                className="w-full h-auto object-cover"
                onLoad={() => handleImageLoad("cover")}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={() => setLightboxImg(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImg(null);
              }}
              className="absolute top-10 right-5 md:right-[5%] text-2xl p-2 rounded-full bg-white text-black hover:bg-opacity-20 transition z-50"
            >
              <X size={20} />
            </button>

            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-[90vw] h-[90vh]"
            >
              <Image
                src={lightboxImg}
                alt="Enlarged view"
                fill
                className="object-contain rounded-lg shadow-lg pointer-events-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}

// Simple Skeleton component
const Skeleton = ({ width = "100%", height = "16px", className = "" }) => (
  <div
    className={`bg-gray-300 dark:bg-gray-700 animate-pulse rounded ${className}`}
    style={{ width, height }}
  />
);
