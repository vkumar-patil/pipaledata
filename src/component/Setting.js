import { useState, createContext, useContext } from "react";

const SettingContext = createContext;
export function Settingprovider({ Children }) {
  const [setting, setSetting] = useState(null);
  Them = "light";
  Notification = true;
  const useStting = () => {
    setSetting((prev = (prev) => [...prev, ...setting]));
    return (
      <SettingContext.provider value={{ useStting, setting }}>
        {Children}
      </SettingContext.provider>
    );
  };
}
export function useSettin() {
  useContext(SettingContext);
}
