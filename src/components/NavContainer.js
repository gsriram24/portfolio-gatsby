import React from 'react';
import { navigate } from 'gatsby';
const NavContainer = ({ darkMode, links }) => {
  const textColor = darkMode ? 'light' : 'dark';
  const buttonStyle = `focus:text-primary-${textColor} nav-button-${textColor} focus:font-semibold focus:outline-none`;

  return (
    <div className={`text-accent-${textColor} text-left my-16 hidden lg:block`}>
      {links.map((link, i) => (
        <div className={i > 0 && 'mt-6'}>
          <button className={buttonStyle} onClick={() => navigate(link.link)}>
            {link.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default NavContainer;
