import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
const ProjectTile = ({ project, darkMode }) => {
  project = project.node;
  const textColor = darkMode ? 'light' : 'dark';
  const bgColor = !darkMode ? 'light' : 'dark';
  const tileVariants = {
    hidden: {},
    hover: {
      scale: 1.1,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };
  return (
    <Link to={`/projects/${project.slug}`}>
      <motion.div
        className={`w-full project-tile flex flex-col justify-center h-48 bg-secondary-${bgColor} mb-2 px-8 lg:px-10 xl:px-12 text-primary-${textColor}`}
        initial="hidden"
        variants={tileVariants}
        whileHover="hover"
      >
        <div className="flex">
          {project.featuredTags.map((tag, i) => (
            <div
              key={tag}
              className={`${
                i !== project.featuredTags.length - 1 && 'md:mr-6 mr-4'
              } text-xs font-light uppercase`}
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="text-xl xl:text-2xl">{project.projectName}</div>

        <div className="text-sm mt-4">{project.summary}</div>
      </motion.div>
    </Link>
  );
};

export default ProjectTile;
