import { useState, useContext, createContext } from "react";
const languageContext = createContext;
export function uselanguageProvider(Children) {
  const [lang, setLang] = useState("eng");
  const awichlanguage = (newlanguage) => setLang(newlanguage);
  return (
    <languageContext.Provider value={{ awichlanguage, lang }}>
      {Children}
    </languageContext.Provider>
  );
}
export function uselanguageProvider() {
  return useContext(languageContext);
}
