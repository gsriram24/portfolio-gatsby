import React from 'react';
import Img from 'gatsby-image';
const TechStackTile = ({ tech, darkMode }) => {
  const textColor = darkMode ? 'light' : 'dark';
  return (
    <div className={`flex flex-col items-center text-primary-${textColor}`}>
      <div className="h-12 w-12">
        <Img fluid={tech.image.childImageSharp.fluid} />
      </div>
      <div className="mt-4 text-center font-semibold">{tech.name}</div>
    </div>
  );
};

export default TechStackTile;
