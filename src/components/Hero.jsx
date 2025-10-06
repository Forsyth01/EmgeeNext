"use client";

import React, { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const vectorRightRef = useRef(null);
  const vectorLeftRef = useRef(null);
  const elementsRef = useRef([]); // [profile, intro, heading, paragraph, button]

  // Set initial states before paint to prevent flash
  useLayoutEffect(() => {
    // Background vectors
    gsap.set([vectorRightRef.current, vectorLeftRef.current], {
      opacity: 0,
      x: 0,
      rotationY: 0,
      scale: 0.9,
    });

    // Profile
    gsap.set(elementsRef.current[0], { opacity: 0, scale: 0.75, rotationY: 35 });

    // Intro
    gsap.set(elementsRef.current[1], { opacity: 0, y: 18, rotationX: 18 });

    // Heading words
    if (elementsRef.current[2]) {
      gsap.set(elementsRef.current[2].querySelectorAll(".word"), {
        opacity: 0,
        y: 46,
        rotationX: 60,
      });
    }

    // Paragraph
    gsap.set(elementsRef.current[3], { opacity: 0, y: 28 });

    // Button
    gsap.set(elementsRef.current[4], { opacity: 0, y: 14, scale: 0.94 });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headingSpans = elementsRef.current[2]
        ? elementsRef.current[2].querySelectorAll(".word")
        : [];

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Background vectors animation
      tl.to(vectorRightRef.current, { opacity: 1, x: 0, rotationY: 0, scale: 1, duration: 1.6 })
        .to(vectorLeftRef.current, { opacity: 1, x: 0, rotationY: 0, scale: 1, duration: 1.6 }, 0.2)
        .call(() => {
          gsap.to(vectorRightRef.current, { y: 14, duration: 6, yoyo: true, repeat: -1, ease: "sine.inOut" });
          gsap.to(vectorLeftRef.current, { y: -14, duration: 6, yoyo: true, repeat: -1, ease: "sine.inOut" });
        }, null, "+=0.2");

      // Profile animation
      tl.to(elementsRef.current[0], { opacity: 1, scale: 1, rotationY: 0, duration: 1 }, 0.6);

      // Intro text
      tl.to(elementsRef.current[1], { opacity: 1, y: 0, rotationX: 0, duration: 1 }, 1);

      // Heading words
      tl.to(headingSpans, { opacity: 1, y: 0, rotationX: 0, duration: 1.1, stagger: 0.12, ease: "power4.out" }, 1.4);

      // Paragraph
      tl.to(elementsRef.current[3], { opacity: 1, y: 0, duration: 1.1 }, ">-0.3");

      // Button
      tl.to(elementsRef.current[4], { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "back.out(1.4)" }, ">-0.2");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="bg-[#F5F8E9] dark:bg-[#1A1A19] transition-colors duration-700 relative perspective-[1200px]">
      {/* Background vectors */}
      <div ref={vectorRightRef} className="hidden lg:flex absolute right-0 top-0">
        <img src="/images/Vector.png" alt="" className="transition-transform duration-500 ease-in-out" />
      </div>
      <div ref={vectorLeftRef} className="hidden xl:flex absolute left-0 bottom-0">
        <img src="/images/Vector2.png" alt="" className="transition-transform duration-500 ease-in-out group-hover:-rotate-6" />
      </div>

      {/* Content */}
      <div className="min-h-[95vh] sm:min-h-[80vh] lg:min-h-[100vh] flex items-center justify-center">
        <div className="mt-18 pb-4">
          <div className="grid w-[95%] m-auto place-items-center text-center gap-y-2">
            {/* Profile */}
            <div ref={(el) => (elementsRef.current[0] = el)}>
              <img
                src="/images/profilepic.png"
                alt="George profile"
                className="hidden md:flex h-50 w-50 xs:h-60 sm:w-20 md:h-24 md:w-24 max-h-[20vw] max-w-[20vw] min-h-[60px] min-w-[60px] object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />
            </div>

            {/* Intro */}
            <div ref={(el) => (elementsRef.current[1] = el)}>
              <p className="font-medium text-lg md:text-[24px] text-gray-900 dark:text-white tracking-tight">Hi, I'm George 👋</p>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <div ref={(el) => (elementsRef.current[2] = el)} className="md:leading-[110%] leading-[220%]">
                <h1 className="font-semibold text-[30px] xs:text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-[6xl] tracking-tighter text-gray-900 dark:text-white md:space-y-3">
                  {["Designing", "Digital"].map((word, i) => (
                    <span key={i} className="word inline-block mr-1">{word}</span>
                  ))}
                  <br />
                  {["Experiences", "that", "Convert", "&"].map((word, i) => (
                    <span key={i} className="word inline-block mr-1">{word}</span>
                  ))}
                  <br className="hidden md:flex"/>
                  <span className="word inline-block mr-1">Communicate</span>
                </h1>
              </div>

              {/* Paragraph */}
              <div ref={(el) => (elementsRef.current[3] = el)}>
                <p className="font-regular text-[12px] xs:text-sm sm:text-base md:text-lg lg:text-md xl:text-md text-gray-700 dark:text-gray-300 max-w-[90%] sm:max-w-2xl mx-auto">
                  A UI/UX and Graphic Designer helping brands stand out through clean, user-focused visuals and strategy.
                </p>
              </div>
            </div>

            {/* Button */}
            <div ref={(el) => (elementsRef.current[4] = el)} className="flex gap-4 justify-center mt-4">
              <button className="group flex items-center gap-2 rounded-full bg-[#C2DE3A] hover:bg-[#d0e75e] px-8 py-2 tracking-tighter transition-all duration-300 ease-in-out text-gray-900 dark:text-black">
                <a href="mailto:georgekyrian@gmail.com" className="flex items-center gap-2">
                  <span className="font-medium">Hire Me</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;