import React from 'react';
import Hero from '../Hero';
import { ThemeContext } from '../../context/ThemeContext';
import TagContainer from './TagContainer';
import { Link } from 'gatsby';
const AllProjectsLeft = ({ tags, checkBoxHandler }) => {
  const heroData = {
    title1: 'All Projects',
    body: (
      <p>
        I am a programmer and an aspiring opensource developer from Bangalore,
        India looking to dive deep into ReactJS Development, Deep Learning and
        Flutter Development. I love racking my brain over challenges and puzzles
        and would like to be occupied all the time. I am also an avid gamer with
        countless hours on competitve games. <br /> <br />
        <span className="hidden lg:inline">
          Please use the buttons given below to filter the projects.
        </span>
      </p>
    ),
  };
  return (
    <ThemeContext.Consumer>
      {({ darkMode }) => (
        <>
          <Hero data={heroData} darkMode={darkMode} />
          <div className="my-10 hidden lg:block">
            <TagContainer
              tags={tags}
              darkMode={darkMode}
              checkBoxHandler={checkBoxHandler}
            />
          </div>
          <Link
            to="/"
            className={`flex flex-row items-center text-primary-${
              darkMode ? 'light' : 'dark'
            } hidden mb-10 lg:flex`}
          >
            <span className="underline text-sm mr-1">Back home</span>
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.55556 3.55556C7.43768 3.55556 7.32464 3.60238 7.24129 3.68573C7.15794 3.76908 7.11111 3.88213 7.11111 4V6.66667C7.11111 6.78454 7.06429 6.89759 6.98094 6.98094C6.89759 7.06429 6.78454 7.11111 6.66667 7.11111H1.33333C1.21546 7.11111 1.10241 7.06429 1.01906 6.98094C0.935714 6.89759 0.888889 6.78454 0.888889 6.66667V1.33333C0.888889 1.21546 0.935714 1.10241 1.01906 1.01906C1.10241 0.935714 1.21546 0.888889 1.33333 0.888889H4C4.11787 0.888889 4.23092 0.842064 4.31427 0.758714C4.39762 0.675365 4.44444 0.562318 4.44444 0.444444C4.44444 0.32657 4.39762 0.213524 4.31427 0.130175C4.23092 0.0468252 4.11787 0 4 0H1.33333C0.979711 0 0.640573 0.140476 0.390524 0.390524C0.140476 0.640573 0 0.979711 0 1.33333V6.66667C0 7.02029 0.140476 7.35943 0.390524 7.60948C0.640573 7.85952 0.979711 8 1.33333 8H6.66667C7.02029 8 7.35943 7.85952 7.60948 7.60948C7.85952 7.35943 8 7.02029 8 6.66667V4C8 3.88213 7.95318 3.76908 7.86983 3.68573C7.78648 3.60238 7.67343 3.55556 7.55556 3.55556Z"
                fill={darkMode ? '#F2F2F2' : '#1A2026'}
              />
              <path
                d="M5.77778 0.888889H6.48L3.68444 3.68C3.64279 3.72132 3.60972 3.77047 3.58716 3.82463C3.5646 3.87879 3.55298 3.93688 3.55298 3.99556C3.55298 4.05423 3.5646 4.11232 3.58716 4.16648C3.60972 4.22064 3.64279 4.26979 3.68444 4.31111C3.72576 4.35277 3.77492 4.38583 3.82908 4.4084C3.88324 4.43096 3.94133 4.44258 4 4.44258C4.05867 4.44258 4.11676 4.43096 4.17092 4.4084C4.22508 4.38583 4.27424 4.35277 4.31556 4.31111L7.11111 1.52V2.22222C7.11111 2.3401 7.15794 2.45314 7.24129 2.53649C7.32464 2.61984 7.43768 2.66667 7.55556 2.66667C7.67343 2.66667 7.78648 2.61984 7.86983 2.53649C7.95318 2.45314 8 2.3401 8 2.22222V0.444444C8 0.32657 7.95318 0.213524 7.86983 0.130175C7.78648 0.0468252 7.67343 0 7.55556 0H5.77778C5.6599 0 5.54686 0.0468252 5.46351 0.130175C5.38016 0.213524 5.33333 0.32657 5.33333 0.444444C5.33333 0.562318 5.38016 0.675365 5.46351 0.758714C5.54686 0.842064 5.6599 0.888889 5.77778 0.888889Z"
                fill={darkMode ? '#F2F2F2' : '#1A2026'}
              />
            </svg>
          </Link>
        </>
      )}
    </ThemeContext.Consumer>
  );
};

export default AllProjectsLeft;