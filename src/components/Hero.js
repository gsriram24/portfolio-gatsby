import React from 'react';
const Hero = ({ darkMode, data }) => {
  const textColor = darkMode ? 'light' : 'dark';
  console.log(data.title1.length >= 20);
  return (
    <div className={`text-primary-${textColor}`}>
      <span
        className={`text-5xl lg:text-${
          data.title1.length >= 20 ? '5xl' : '6xl'
        } font-semibold leading-tight`}
      >
        <div>{data.title1}</div>
        {data.title2 && <div>{data.title2}</div>}
      </span>
      <div className="mt-12">
        <div className={`text-base text-accent-${textColor} md:w-3/4 `}>
          {data.body}
        </div>
      </div>
    </div>
  );
};

export default Hero;
