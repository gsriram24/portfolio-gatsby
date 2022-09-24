import React from 'react';
import { motion } from 'framer-motion';

const TestimonialTile = ({ testimonials, darkMode }) => {
  const animationDuration = 1.6;
  const animationEase = [0.62, 0.28, 0.23, 0.99];
  const tileVariants = {
    hidden: {
      x: -1500,
    },
    visible: {
      x: 0,
      transition: {
        duration: animationDuration,
        ease: animationEase,
        delay: 0.2,
      },
    },
  };
  const textColor = darkMode ? 'light' : 'dark';
  const bgColor = !darkMode ? 'light' : 'dark';
  return (
    <div className="overflow-hidden">
      <motion.div
        variants={tileVariants}
        initial="hidden"
        animate="visible"
        className={`w-full project-tile flex flex-col justify-evenly min-h-56 sm:min-h-48 py-6 bg-secondary-${bgColor} px-4 sm:px-8 lg:px-10 xl:px-12 text-primary-${textColor}`}
      >
        <div className={`md:mr-6 mr-4 text-sm text-accent-${textColor}`}>
          {testimonials.testimonial}
        </div>

        <div className="text-sm mt-2">{`${testimonials.name} | ${testimonials.designation}`}</div>
      </motion.div>
    </div>
  );
};

export default TestimonialTile;
