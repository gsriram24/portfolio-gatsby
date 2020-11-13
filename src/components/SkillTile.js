import React from 'react';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';
const SkillTile = ({ skill, darkMode }) => {
  skill = skill.node;
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
    hidden: {},
    hover: {
      scale: 1.1,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };
  return (
    <motion.div
      className={`text-primary-${textColor} relative bg-secondary-${bgColor} pt-full skill-tile`}
      variants={tileVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
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
            <p key={s} className="skill-item">
              {s}
            </p>
          ))}
        </div>
        <div className="text-xl skill-name">{skill.title}</div>
      </div>
    </motion.div>
  );
};

export default SkillTile;
