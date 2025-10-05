import React from "react";
import TestimonialCarousel from "./testimonial/TestimonialCarousel";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <div
      id="testimonial"
      className="text-white bg-[#1A1A19] py-6 transition-colors duration-300 pt-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="md:text-4xl text-2xl text-center font-regular leading-[1.1] tracking-tighter py-4">
          Read Feedbacks, <br />
          <span className="font-semibold tracking-tight">
            Hire with confidence
          </span>
        </h1>
      </motion.div>

      <motion.div className="py-6 overflow-x-hidden">
        <TestimonialCarousel />
      </motion.div>
    </div>
  );
};

export default Testimonial;
