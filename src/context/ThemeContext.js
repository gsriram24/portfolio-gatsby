import React, { useState, createContext, useEffect } from 'react';
export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    setDarkMode(
      JSON.parse(localStorage.getItem('darkMode')) == null
        ? true
        : JSON.parse(localStorage.getItem('darkMode'))
    );
  }, []);
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        changeTheme: () => {
          setDarkMode(!darkMode);
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
