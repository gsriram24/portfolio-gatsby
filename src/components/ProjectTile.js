import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import GenericTile from './GenericTile';
const ProjectTile = ({ project, darkMode }) => {
  project = project.node;

  const tileVariants = {
    hidden: {},
    hover: {
      scale: 1.1,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };
  return (
    <Link to={`/projects/${project.slug}`}>
      <motion.div initial="hidden" variants={tileVariants} whileHover="hover">
        <GenericTile
          title={project.projectName}
          tags={project.featuredTags}
          description={project.summary}
          darkMode={darkMode}
        />
      </motion.div>
    </Link>
  );
};

export default ProjectTile;
