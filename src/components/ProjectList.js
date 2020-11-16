import React from 'react';
import ProjectTile from './ProjectTile';
import { motion } from 'framer-motion';
const ProjectList = ({ projects, darkMode }) => {
  const animationDuration = 1.2;
  const animationEase = [0.62, 0.28, 0.23, 0.99];
  const containerVariants = {
    hidden: {
      x: -1500,
    },
    visible: {
      x: 0,
      transition: {
        duration: animationDuration,
        ease: animationEase,
      },
    },
  };
  return (
    <motion.div
      initial={{
        overflow: 'hidden',
      }}
      animate={{
        overflow: 'visible',
        transition: { duration: 0.2, ease: 'easeInOut', delay: 2 },
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="project-list"
      >
        {projects.map((project, i) => (
          <ProjectTile key={i} project={project} darkMode={darkMode} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectList;
