import React from 'react';
import TechStackTile from './TechStackTile';

const TechStackContainer = ({ darkMode, techStack }) => {
  return (
    <div className="w-full md:w-3/4  grid grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-10">
      {techStack.map((tech, i) => {
        return <TechStackTile key={i} tech={tech} darkMode={darkMode} />;
      })}
    </div>
  );
};

export default TechStackContainer;
