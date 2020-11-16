import React from 'react';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';
const SkillTile = ({ skill, darkMode }) => {
  skill = skill.node;
  const animationDuration = 1.6;
  const animationEase = [0.62, 0.28, 0.23, 0.99];
  const textColor = darkMode ? 'light' : 'dark';
  const bgColor = !darkMode ? 'light' : 'dark';

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 0,
    },
    hover: {
      opacity: darkMode ? 0.1 : 0.2,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };
  const tileVariants = {
    hidden: {
      x: -800,
    },
    visible: {
      x: 0,
      transition: {
        duration: animationDuration,
        ease: animationEase,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };
  return (
    <motion.div
      initial={{
        overflow: 'hidden',
      }}
      animate={{
        overflow: 'visible',
        transition: {
          duration: 1.5,
          delay: 3,
        },
      }}
    >
      <motion.div
        className={`text-primary-${textColor} relative bg-secondary-${bgColor} pt-full skill-tile`}
        variants={tileVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="hover"
      >
        <div className="absolute h-full w-full flex flex-col px-8 py-8  justify-between top-0">
          <motion.div
            className={`absolute skill-image w-1/2  h-1/2 top-0 right-0 opacity-0`}
            variants={imageVariants}
          >
            <Img fluid={skill.icon.childImageSharp.fluid} />
          </motion.div>
          <div className={`text-accent-${textColor} text-sm`}>
            {skill.skills.map(s => (
              <div key={s} className="skill-item">
                {s}
              </div>
            ))}
          </div>
          <div className="overflow-hidden">
            <div className="text-xl skill-name">{skill.title}</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillTile;
