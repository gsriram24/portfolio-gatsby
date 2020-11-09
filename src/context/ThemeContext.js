import React, { useState, createContext } from 'react';
export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeContext.Provider
      value={{ darkMode, changeTheme: () => setDarkMode(!darkMode) }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
