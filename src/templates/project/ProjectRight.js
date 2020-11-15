import React from 'react';
import ImagesContainer from '../../components/project/ImagesContainer';
import ProjectLink from '../../components/project/ProjectLink';
import TestimonialTile from '../../components/project/TestimonialTile';
import { ThemeContext } from '../../context/ThemeContext';

const ProjectRight = ({ images, testimonials, demo, github }) => {
  return (
    <ThemeContext.Consumer>
      {({ darkMode }) => (
        <div className="w-full xl:w-11/12">
          <div className="pt-16">
            <ImagesContainer images={images} darkMode={darkMode} />
          </div>

          {testimonials && (
            <div className="mt-16">
              <TestimonialTile
                testimonials={testimonials}
                darkMode={darkMode}
              />
            </div>
          )}

          <ProjectLink darkMode={darkMode} demo={demo} github={github} />
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default ProjectRight;
