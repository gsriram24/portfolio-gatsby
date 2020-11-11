import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import DarkModeButton from './DarkModeButton';
import Footer from './Footer';
import Header from './Header';
const Layout = ({ left, right }) => {
  return (
    <ThemeContext.Consumer>
      {({ darkMode, changeTheme }) => {
        const bgColor = darkMode ? 'bg-primary-dark' : 'bg-primary-light';
        return (
          <div
            className={`w-full min-w-full h-full min-h-screen transition duration-500 ease-in-out ${bgColor}`}
          >
            <DarkModeButton changeTheme={changeTheme} darkMode={darkMode} />
            <div className="flex flex-col lg:flex-row">
              <div className="mx-8 lg:mx-16 lg:w-1/2">
                <div className="fixed bg-primary-dark lg:hidden">
                  <Header />
                </div>
                <div className="lg:fixed overflow-scroll justify-between pt-16 pb-12 lg:h-screen flex flex-col left lg:w-1/2">
                  {left}
                  <div className="hidden lg:block">
                    <Footer darkMode={darkMode} />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 my-16 lg:my-0 lg:mt-16 mx-8 lg:mx-16">
                {right}
                <div className="lg:hidden">
                  <Footer darkMode={darkMode} />
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Layout;
