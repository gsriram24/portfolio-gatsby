import React from 'react';
import IndexLeft from '../components/index/IndexLeft';
import Layout from '../components/Layout';
import { ThemeContext } from '../context/ThemeContext';

import '../css/tailwind.css';
import './index.css';
const Home = () => {
  return (
    <Layout
      left={<IndexLeft />}
      right={
        <ThemeContext.Consumer>
          {({ darkMode }) => (
            <>
              <div className={`text-primary-${darkMode ? 'light' : 'dark'}`}>
                Right
              </div>
              <div
                className={`h-screen text-primary-${
                  darkMode ? 'light' : 'dark'
                }`}
              >
                Right
              </div>
              <div
                className={`h-screen text-primary-${
                  darkMode ? 'light' : 'dark'
                }`}
              >
                Right
              </div>
            </>
          )}
        </ThemeContext.Consumer>
      }
    />
  );
};
export default Home;
