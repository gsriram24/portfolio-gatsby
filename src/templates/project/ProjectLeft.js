import React from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ProjectLeft = () => {
  return (
    <ThemeContext.Consumer>{({ darkMode }) => <>Left</>}</ThemeContext.Consumer>
  );
};

export default ProjectLeft;
