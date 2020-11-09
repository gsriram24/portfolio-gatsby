import React from 'react';
import Hero from './Hero';
import { ThemeContext } from '../../context/ThemeContext';

const IndexLeft = () => {
  return (
    <ThemeContext.Consumer>
      {({ darkMode }) => <Hero darkMode={darkMode} />}
    </ThemeContext.Consumer>
  );
};

export default IndexLeft;
