"use client";
import React from "react";
import Image from "next/image";

const skills = [
  { name: "Figma", icon: "/assets/icons/figma.png" },
  { name: "Photoshop", icon: "/assets/icons/photoshop.png" },
  { name: "UI/UX" },
  { name: "CorelDRAW", icon: "/assets/icons/coreldraw.png" },
  { name: "Wireframing" },
  { name: "Visual Storytelling" },
  { name: "Prototyping" },
  { name: "Brand Identity" },
];

const SkillsAndTools = () => {
  return (
    <div className="p-4 shadow-md rounded-2xl bg-white dark:bg-[#2A2A28] transition-colors duration-700 my-8 sm:my-0">
      <h2 className="text-2xl tracking-tight font-semibold mb-4 text-gray-900 dark:text-white">
        Skills & Tools
      </h2>

      <ul className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center gap-2 bg-[#F5F8E9] dark:bg-[#3A3A38] rounded-md md:rounded-full px-4 md:py-2 py-1 font-medium tracking-tight md:text-md text-[12px] text-gray-900 dark:text-gray-200 transition-colors duration-700"
          >
            {skill.icon && (
              <Image
                src={skill.icon}
                alt={skill.name}
                width={24}
                height={24}
                className="object-contain"
              />
            )}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsAndTools;
