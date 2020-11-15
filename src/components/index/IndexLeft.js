import React from 'react';
import Hero from '../Hero';
import { ThemeContext } from '../../context/ThemeContext';
import NavContainer from './NavContainer';

const IndexLeft = () => {
  const heroData = {
    title1: 'Hello, I am',
    title2: 'Sriram',
    body: (
      <span>
        I am a programmer and an aspiring opensource developer from Bangalore,
        India looking to dive deep into ReactJS Development, Deep Learning and
        Flutter Development. I love racking my brain over challenges and puzzles
        and would like to be occupied all the time. I am also an avid gamer with
        countless hours on competitve games.
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
