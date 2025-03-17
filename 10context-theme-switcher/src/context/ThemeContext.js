import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  // inital values, so that the first the context is made, it will have these values
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
  // the above two functions are empty, so that the first time the context is made, it will not throw an error
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}