import React from 'react';

const TestimonialTile = ({ testimonials, darkMode }) => {
  const textColor = darkMode ? 'light' : 'dark';
  const bgColor = !darkMode ? 'light' : 'dark';
  return (
    <div
      className={`w-full project-tile flex flex-col justify-evenly h-48 bg-secondary-${bgColor} px-8 lg:px-10 xl:px-12 text-primary-${textColor}`}
    >
      <div className={`md:mr-6 mr-4 text-sm text-accent-${textColor}`}>
        {testimonials.testimonial}
      </div>

      <div className="text-sm">{`${testimonials.name} | ${testimonials.designation}`}</div>
    </div>
  );
};

export default TestimonialTile;
