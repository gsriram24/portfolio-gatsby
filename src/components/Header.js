import React from 'react';
import { globalHistory as history } from '@reach/router';
import { navigate, Link } from 'gatsby';

const Header = ({ darkMode }) => {
  const textColor = darkMode ? 'light' : 'dark';
  const buttonStyle = `focus:text-primary-${textColor} ml-6 text-sm focus:font-semibold focus:outline-none`;
  return (
    <div
      className={`text-primary-${textColor} flex items-center flex-row justify-between py-4 px-4`}
    >
      <Link to="/">
        <svg
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.55556 15.5557H12.4444C13.3023 15.5557 14 14.858 14 14.0002V7.00016C14.0001 6.89801 13.98 6.79684 13.9409 6.70247C13.9018 6.60811 13.8444 6.5224 13.7721 6.45027L7.54989 0.228045C7.47772 0.155754 7.39201 0.0984025 7.29765 0.059272C7.20329 0.0201414 7.10215 0 7 0C6.89785 0 6.79671 0.0201414 6.70235 0.059272C6.60799 0.0984025 6.52228 0.155754 6.45011 0.228045L0.227889 6.45027C0.155557 6.5224 0.0981896 6.60811 0.0590813 6.70247C0.019973 6.79684 -0.000105109 6.89801 4.13791e-07 7.00016V14.0002C4.13791e-07 14.858 0.697667 15.5557 1.55556 15.5557ZM5.44444 14.0002V10.1113H8.55556V14.0002H5.44444ZM1.55556 7.32216L7 1.87771L12.4444 7.32216L12.4452 14.0002H10.1111V10.1113C10.1111 9.25338 9.41344 8.55571 8.55556 8.55571H5.44444C4.58656 8.55571 3.88889 9.25338 3.88889 10.1113V14.0002H1.55556V7.32216Z"
            fill={darkMode ? '#F2F2F2' : '#1A2026'}
          />
        </svg>
      </Link>
      <div className={`flex flex-row text-accent-${textColor}`}>
        {history.location.pathname === '/' && (
          <>
            <button
              className={buttonStyle}
              onClick={() => navigate('/#projects')}
            >
              PROJECTS
            </button>
            <button
              className={buttonStyle}
              onClick={() => navigate('/#skills')}
            >
              SKILLS
            </button>
          </>
        )}

        <button className={buttonStyle} onClick={() => navigate('/#contact')}>
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default Header;
