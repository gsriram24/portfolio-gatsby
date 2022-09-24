import React from 'react';
import { navigate } from 'gatsby';
const NavContainer = ({ darkMode }) => {
  const textColor = darkMode ? 'light' : 'dark';
  const buttonStyle = `focus:text-primary-${textColor} nav-button-${textColor} focus:font-semibold focus:outline-none`;

  return (
    <div className={`text-accent-${textColor} text-left my-16 hidden lg:block`}>
      <div>
        <button className={buttonStyle} onClick={() => navigate('#experience')}>
          WORK EXPERIENCE
        </button>
      </div>
      <div className="mt-6">
        <button className={buttonStyle} onClick={() => navigate('#projects')}>
          PROJECTS
        </button>
      </div>
      <div className="mt-6">
        <button className={buttonStyle} onClick={() => navigate('#skills')}>
          SKILLS
        </button>
      </div>
      <div className="mt-6">
        <button className={buttonStyle} onClick={() => navigate('#contact')}>
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default NavContainer;
