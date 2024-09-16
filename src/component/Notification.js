import { useState, useContext, createContext } from "react";
const NotificationContext = createContext;
export function useNotification({Children}) {
  const [notificatin, setNotification] = useState([]);
  const addNotification = () => {
    setNotification(prev) =[...prev, notificatin];
  };
  const removeNotification = () => {
    setNotification (prev) = prev.filter((n) => n.id !== id);
  };
  return <NotificationContext.provider value={{removeNotification,notificatin,addNotification}}>{Children}</NotificationContext.provider>
}
export function usenot(){
    useContext(NotificationContext)
}