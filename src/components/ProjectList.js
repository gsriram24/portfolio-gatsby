import React from 'react';
import ProjectTile from './ProjectTile';

const ProjectList = ({ projects, darkMode }) => {
  return (
    <div className="project-list">
      {projects.map((project, i) => (
        <ProjectTile key={i} project={project} darkMode={darkMode} />
      ))}
    </div>
  );
};

export default ProjectList;
