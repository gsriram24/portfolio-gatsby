import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import DarkModeButton from './DarkModeButton';
import Footer from './Footer';
import Header from './Header';
import { motion } from 'framer-motion';
const Layout = ({ left, right }) => {
  const animationDuration = 1;
  const animationEase = [0.62, 0.28, 0.23, 0.99];
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: animationDuration,
        ease: animationEase,
      },
    },
  };
  return (
    <ThemeContext.Consumer>
      {({ darkMode, changeTheme }) => {
        const bgColor = darkMode ? 'bg-primary-dark' : 'bg-primary-light';
        return (
          <div
            className={`h-full min-h-screen transition duration-500 ease-in-out ${bgColor}`}
          >
            <div className="container mx-auto relative">
              <div className="hidden lg:block">
                <DarkModeButton changeTheme={changeTheme} darkMode={darkMode} />
              </div>

              <div className="flex flex-col w-full lg:flex-row">
                <div
                  className={`fixed w-full z-10 ${bgColor} transition duration-500 lg:hidden`}
                >
                  <Header darkMode={darkMode} changeTheme={changeTheme} />
                </div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  className="lg:sticky top-0 lg:w-1/2 lg:h-screen overflow-scroll justify-between mx-4 md:ml-8 lg:ml-16 pt-16 pb-12 flex flex-col left"
                >
                  {left}
                  <div className="hidden lg:block">
                    <Footer darkMode={darkMode} />
                  </div>
                </motion.div>
                <main className="lg:w-1/2 mb-16 lg:mb-0  mx-4 md:mx-8 lg:mx-16">
                  {right}
                  <div className="lg:hidden">
                    <Footer darkMode={darkMode} />
                  </div>
                </main>
              </div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Layout;
