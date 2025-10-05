// About.jsx
import React, { useEffect, useRef } from "react";
import MyApproach from "./MyApproach";
import SkillsAndTools from "./Skills&Tools";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll(".animate-item");

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 80,
          rotateX: 25,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about"
      className="md:dark:bg-[#1A1A19] dark:bg-[#2A2A28] transition-colors duration-700 "
    >
      <div className="perspective-[1200px]"
       ref={containerRef}
      >
       
        <div className="md:flex items-center justify-center gap-10 w-[90%] m-auto md:py-20 py-10">
          {/* About Box */}
          <div className="xl:bg-[#F6F6F3] dark:bg-[#2A2A28] rounded-2xl md:p-6 transition-colors duration-700 2xl:w-[671px] animate-item">
            <h2 className="text-3xl font-semibold tracking-tighter ml-2 mb-6 text-gray-900 dark:text-white animate-item">
              About Me
            </h2>

            <div className="flex xl:flex md:block items-center gap-4">
              <img
                src="/images/aboutme.png"
                alt="Profile"
                className="h-[148px] xl:h-[230px] lg:h-[180px] md:h-[220px] md:pb-3 lg:pb-0 animate-item"
              />
              <div className="text-gray-800 dark:text-white animate-item">
                <p className="leading-[1.3] tracking-tight">
                  I'm Erhokhon George, a UI/UX and graphic designer with over 5
                  years of experience turning ideas into clean, functional, and
                  visually engaging designs.
                </p>
                <p className="mt-2 tracking-tight leading-[1.3] dark:text-white hidden xl:flex">
                  Whether it's designing intuitive mobile apps, landing pages,
                  or high-impact social content, I bring a strategic and
                  user-focused mindset to every project.
                </p>
              </div>
            </div>

            <p className="mt-4 tracking-tight leading-[1.3] dark:text-white xl:hidden animate-item">
              Whether it's designing intuitive mobile apps, landing pages, or
              high-impact social content, I bring a strategic and user-focused
              mindset to every project.
            </p>

            <p className="mt-8 italic text-gray-700 dark:text-white animate-item">
              Fun Fact: I design best when I’m listening to deep emotional music
              – it keeps my creativity alive.
            </p>
          </div>

          {/* Skills & MyApproach */}
          <div className="space-y-6 xl:space-y-4 text-gray-900 dark:text-white">
            <div className="2xl:w-[600px] animate-item">
              <SkillsAndTools />
            </div>
            <div className="2xl:w-[600px] animate-item">
              <MyApproach />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
