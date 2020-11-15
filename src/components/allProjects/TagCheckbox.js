import React from 'react';
import Img from 'gatsby-image';
const TagCheckBox = ({ tag, darkMode, checkBoxHandler }) => {
  const textColor = darkMode ? 'light' : 'dark';
  return (
    <div className={`text-primary-${textColor}`}>
      <input
        type="checkbox"
        onChange={e => checkBoxHandler(tag.id, e.target.checked)}
        id={tag.id}
        value={tag.id}
      />
      <label
        htmlFor={tag.id}
        className=" flex flex-col w-24 items-center cursor-pointer items-center"
      >
        <div className="h-12 w-12">
          <Img className="img" fluid={tag.image.childImageSharp.fluid} />
        </div>
        <div
          className={`mt-4 text-center text-sm checkbox-text-container-${textColor}`}
        >
          {tag.tagName}
        </div>
      </label>
    </div>
  );
};

export default TagCheckBox;
