import React from 'react';
import ImageTile from './ImageTile';
const ImagesContainer = ({ images, darkMode }) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:gap-10">
      {images.map((image, i) => {
        return (
          <div key={i} className="w-full">
            <ImageTile image={image} darkMode={darkMode} />
          </div>
        );
      })}
    </div>
  );
};

export default ImagesContainer;
