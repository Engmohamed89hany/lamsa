import { createContext, useEffect, useReducer } from "react";

export const themeContext = createContext({});
const initialValue ={
  dark:localStorage.getItem("theme")==="dark"?true:false,
};
function reducerTheme(state, action) {
  switch (action.type) {
    case "DARK":
      return { ...state, dark: true };
    case "LIGHT":
      return { ...state, dark: false };
    default:
      return { ...state, dark: !state.dark };
  }
}
export default function ThemeProvider({ children }) {
  const [themeState, dispatch] = useReducer(reducerTheme, initialValue);
  useEffect(() => {
    localStorage.setItem("theme",themeState.dark?"dark":"light");
  }, [themeState.dark]);
  return (
    <themeContext.Provider value={{ themeState, dispatch }}>
      {children}
    </themeContext.Provider>
  );
}
