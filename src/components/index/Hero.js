import React from 'react';

const Hero = ({ darkMode }) => {
  const textColor = darkMode ? 'light' : 'dark';

  return (
    <div className={`text-primary-${textColor}`}>
      <span className="text-5xl lg:text-6xl font-semibold leading-tight">
        <div>Hi, I am</div>
        <div>Sriram</div>
      </span>
      <div className="mt-12">
        <div className={`text-base text-accent-${textColor} lg:w-2/3 `}>
          I am a programmer and an aspiring opensource developer from Bangalore,
          India looking to dive deep into ReactJS Development, Deep Learning and
          Flutter Development. I love racking my brain over challenges and
          puzzles and would like to be occupied all the time. I am also an avid
          gamer with countless hours on competitve games.
        </div>
      </div>
    </div>
  );
};

export default Hero;
