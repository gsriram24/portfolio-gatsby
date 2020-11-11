import React from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ProjectRight = () => {
  return (
    <ThemeContext.Consumer>
      {({ darkMode }) => <>Right</>}
    </ThemeContext.Consumer>
  );
};

export default ProjectRight;
