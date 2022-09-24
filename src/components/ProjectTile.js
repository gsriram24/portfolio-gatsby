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
          darkMode
        />
        {/* <div
          className={`w-full project-tile flex flex-col justify-center min-h-56 sm:h-48 bg-secondary-${bgColor} mb-2 px-8 lg:px-10 xl:px-12 py-6 text-primary-${textColor}`}
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
        </div> */}
      </motion.div>
    </Link>
  );
};

export default ProjectTile;
