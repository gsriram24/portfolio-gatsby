import React from 'react';
import { motion } from 'framer-motion';
import GenericTile from '../GenericTile';

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
      <motion.div variants={tileVariants} initial="hidden" animate="visible">
        <GenericTile
          description={testimonials.testimonial}
          footer={`${testimonials.name} | ${testimonials.designation}`}
          darkMode
        />
        {/* <div className={`md:mr-6 mr-4 text-sm text-accent-${textColor}`}>
          {testimonials.testimonial}
        </div>

        <div className="text-sm mt-2">{`${testimonials.name} | ${testimonials.designation}`}</div> */}
      </motion.div>
    </div>
  );
};

export default TestimonialTile;
