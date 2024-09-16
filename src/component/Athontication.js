import { createContext, useState, useContext } from "react";
const Athcontext = createContext();
export function useAthonticatin({ Children }) {
  const [user, setUser] = useState(null);
  const login = (userdata) => setUser(userdata);
  const logout = setUser(null);
  return (
    <Athcontext.Provider value={{ login, logout, user }}>
      {Children}
    </Athcontext.Provider>
  );
}
export function useAuth() {
  return useContext(Athcontext);
}
