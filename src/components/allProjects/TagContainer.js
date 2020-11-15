import React from 'react';
import TagCheckBox from './TagCheckbox';

const TagContainer = ({ darkMode, tags, checkBoxHandler }) => {
  return (
    <div className="w-3/4 grid grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-10">
      {tags.map((tag, i) => {
        return (
          <TagCheckBox
            key={i}
            tag={tag.node}
            darkMode={darkMode}
            checkBoxHandler={checkBoxHandler}
          />
        );
      })}
    </div>
  );
};

export default TagContainer;
