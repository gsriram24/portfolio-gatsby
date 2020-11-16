import React from 'react';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';
const ImageTile = ({ darkMode, image }) => {
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
        className={`text-primary-${textColor} relative bg-secondary-${bgColor} p-6 sm:p-10`}
      >
        <Img fluid={image.childImageSharp.fluid} />
      </motion.div>
    </div>
  );
};

export default ImageTile;
