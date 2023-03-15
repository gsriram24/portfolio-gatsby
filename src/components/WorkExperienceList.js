import React from 'react';
import { motion } from 'framer-motion';
import { useStaticQuery } from 'gatsby';
import WorkExperienceTile from './WorkExperienceTile';
import { graphql } from 'gatsby';
const WorkExperienceList = ({ darkMode }) => {
  const data = useStaticQuery(graphql`
    query {
      allWorkExperienceJson {
        nodes {
          companyName
          description
          duration
          id
          slug
          summary
        }
      }
    }
  `);

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
  const workExperience = data.allWorkExperienceJson.nodes;
  return (
    <motion.div
      initial={{
        overflow: 'hidden',
      }}
      animate={{
        overflow: 'visible',
        transition: { duration: 0.2, ease: 'easeInOut', delay: 1.1 },
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="project-list"
      >
        {workExperience.map(exp => (
          <WorkExperienceTile exp={exp} darkMode={darkMode} key={exp.slug} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WorkExperienceList;
