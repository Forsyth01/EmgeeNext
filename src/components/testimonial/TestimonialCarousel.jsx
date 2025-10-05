import React from "react";
import Marquee from "react-fast-marquee";

const TestimonialCarousel = () => {
  return (
    <div className="block lg:flex items-center py-2 transition-colors duration-700">
      {/* Left Side Text */}
      <div className="hidden lg:flex lg:relative lg:left-[5%] text-center md:text-left lg:w-[45%] xl:w-[40%]">
        <div>
          <img src="/images/quote.png" alt="" className="h-30 my-2" />
          <h1 className="text-[38px] leading-[1.1] font-semibold tracking-tighter text-white">
            What Our <br /> Clients <br /> say about us
          </h1>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="w-full overflow-hidden"> {/* containment without collapsing */}
        <Marquee
          loop={0}
          autoFill={true}
          gradient={true}
          gradientWidth={200}
          gradientColor={[26, 26, 25]} // matches dark mode background (#1A1A19)
        >
          <div className="flex">
            <img
              src="/images/Testimonial card 1.png"
              alt="Testimonial 1"
              className="mx-2 cursor-text h-[412px]"
            />
            <img
              src="/images/Testimonial card 2.png"
              alt="Testimonial 2"
              className="mx-2 cursor-text h-[412px]"
            />
            <img
              src="/images/Testimonial card 3.png"
              alt="Testimonial 3"
              className="mx-2 cursor-text h-[412px]"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
