import { createContext, type ReactNode } from "react";
import { companions } from "../assets/assets_frontend/assets";

export const AppContext = createContext(null);

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const value = { companions };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
