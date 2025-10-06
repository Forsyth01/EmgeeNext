"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const TestimonialCarousel = () => {
  return (
    <div className="block lg:flex items-center py-2 transition-colors duration-700">
      {/* Left Side Text */}
      <div className="hidden lg:flex lg:relative lg:left-[5%] text-center md:text-left lg:w-[45%] xl:w-[40%]">
        <div>
          <Image
            src="/images/quote.png"
            alt="Quote Icon"
            width={60}
            height={60}
            className="h-30 my-2 w-auto"
            loading="lazy"
          />
          <h1 className="text-[38px] leading-[1.1] font-semibold tracking-tighter text-white">
            What Our <br /> Clients <br /> say about us
          </h1>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="w-full overflow-hidden">
        <Marquee
          loop={0}
          autoFill={true}
          gradient={true}
          gradientWidth={200}
          gradientColor={[26, 26, 25]} // matches dark mode background (#1A1A19)
        >
          <div className="flex">
            <div className="mx-2 cursor-text h-[412px] relative w-[auto]">
              <Image
                src="/images/Testimonial card 1.png"
                alt="Testimonial 1"
                width={350}
                height={412}
                className="object-contain h-[412px] w-auto"
                loading="lazy"
              />
            </div>
            <div className="mx-2 cursor-text h-[412px] relative w-[auto]">
              <Image
                src="/images/Testimonial card 2.png"
                alt="Testimonial 2"
                width={350}
                height={412}
                className="object-contain h-[412px] w-auto"
                loading="lazy"
              />
            </div>
            <div className="mx-2 cursor-text h-[412px] relative w-[auto]">
              <Image
                src="/images/Testimonial card 3.png"
                alt="Testimonial 3"
                width={350}
                height={412}
                className="object-contain h-[412px] w-auto"
                loading="lazy"
              />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
