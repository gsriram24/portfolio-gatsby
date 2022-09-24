import React, { useContext } from 'react';
import Hero from '../Hero';
import { ThemeContext } from '../../context/ThemeContext';
import NavContainer from './NavContainer';

const IndexLeft = () => {
  const heroData = {
    title1: 'Hi, I am',
    title2: 'Sriram',
    body: (
      <span>
        I am a developer based in Bangalore, India looking to dive deep into
        Software Development and Deep Learning. This website gives a glimpse
        into my work demonstrating various skills that I have picked up through
        my never ending journey of learning new tools and technologies.
      </span>
    ),
  };
  return (
    <ThemeContext.Consumer>
      {({ darkMode }) => (
        <>
          <Hero data={heroData} darkMode={darkMode} />
          <NavContainer darkMode={darkMode} />
        </>
      )}
    </ThemeContext.Consumer>
  );
};

export default IndexLeft;
