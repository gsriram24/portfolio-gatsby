import React from 'react';
import Img from 'gatsby-image';
const ImageTile = ({ darkMode, image }) => {
  const textColor = darkMode ? 'light' : 'dark';
  const bgColor = !darkMode ? 'light' : 'dark';
  return (
    <div
      className={`text-primary-${textColor} relative bg-secondary-${bgColor} p-6 sm:p-10`}
    >
      <Img fluid={image.childImageSharp.fluid} />
    </div>
  );
};

export default ImageTile;
