import React from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import ProjectList from '../ProjectList';
const AllProjectsRight = ({ projects }) => {
  return (
    <ThemeContext.Consumer>
      {({ darkMode }) => (
        <div className="w-full xl:w-11/12">
          <div className="py-16" id="projects">
            <ProjectList darkMode={darkMode} projects={projects} />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default AllProjectsRight;
