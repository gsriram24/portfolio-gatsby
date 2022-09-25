import React from 'react';
import { motion } from 'framer-motion';
import GenericTile from '../../components/GenericTile';
import { ThemeContext } from '../../context/ThemeContext';
const WorkExperienceRight = ({
  workExperience,
  projects,
  awards,
  otherResponsibilities,
}) => {
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
  return (
    <ThemeContext.Consumer>
      {({ darkMode }) => (
        <motion.div className="w-full overflow-hidden xl:w-11/12">
          <motion.div
            variants={tileVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="lg:pt-16" id="experience">
              {workExperience?.map(work => (
                <GenericTile
                  title={work.title}
                  tags={[work.duration]}
                  description={work.description}
                  darkMode={darkMode}
                />
              ))}
            </div>
            <div className="lg:pt-16" id="projects">
              {projects?.map(project => (
                <GenericTile
                  title={project.name}
                  tags={[project.duration]}
                  description={project.description}
                  darkMode={darkMode}
                />
              ))}
            </div>
            <div className="lg:pt-16" id="awards">
              {awards?.map(award => (
                <GenericTile
                  title={award.title}
                  tags={[award.duration]}
                  description={award.description}
                  darkMode={darkMode}
                />
              ))}
            </div>
            <div className="lg:pt-16 lg:h-screen" id="other">
              {otherResponsibilities?.map(responsibility => (
                <GenericTile
                  title={responsibility.title}
                  tags={[responsibility.duration]}
                  description={responsibility.description}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </ThemeContext.Consumer>
  );
};

export default WorkExperienceRight;
