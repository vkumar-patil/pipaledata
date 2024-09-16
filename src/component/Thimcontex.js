import { createContext, useContext, useState } from "react";
const ThemContext = createContext();
export function ThemProvider({ Children }) {
  const [providethem, setProvidethem] = useState("light");
  const toggleThem = () => {
    setProvidethem((prevThem) => (prevThem == "light" ? "Dark" : "light"));
  };
  return;
  <ThemContext.Provider value={{ providethem, toggleThem }}>
    {Children}
  </ThemContext.Provider>;
}
export function useThem() {
  return useContext(ThemContext);
}
