import React from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import ContactForm from '../ContactForm';
import SkillContainer from '../SkillContainer';
import WorkExperienceList from '../WorkExperienceList';
import ProjectListContainer from './ProjectListContainer';
const IndexRight = ({ projects }) => {
  return (
    <ThemeContext.Consumer>
      {({ darkMode }) => (
        <div className="w-full xl:w-11/12">
          <div className="pt-16" id="experience">
            <WorkExperienceList darkMode={darkMode} />
          </div>
          <div className="pt-16" id="projects">
            <ProjectListContainer darkMode={darkMode} projects={projects} />
          </div>
          <div className="pt-16" id="skills">
            <SkillContainer darkMode={darkMode} />
          </div>
          <div className="lg:h-screen pt-16 pb-16" id="contact">
            <ContactForm darkMode={darkMode} />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default IndexRight;
