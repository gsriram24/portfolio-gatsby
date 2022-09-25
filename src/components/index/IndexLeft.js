import React from 'react';
import Hero from '../Hero';
import { ThemeContext } from '../../context/ThemeContext';
import NavContainer from '../NavContainer';

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
  const links = [
    {
      name: 'WORK EXPERIENCE',
      link: '#experience',
    },
    {
      name: 'PROJECTS',
      link: '#projects',
    },
    {
      name: 'SKILLS',
      link: '#skills',
    },
    {
      name: 'CONTACT',
      link: '#contact',
    },
  ];
  return (
    <ThemeContext.Consumer>
      {({ darkMode }) => (
        <>
          <Hero data={heroData} darkMode={darkMode} />
          <NavContainer links={links} darkMode={darkMode} />
        </>
      )}
    </ThemeContext.Consumer>
  );
};

export default IndexLeft;
