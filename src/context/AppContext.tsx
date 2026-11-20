import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { Companion } from "../types";
import axios from "axios";
import { toast } from "react-toastify";

/** The shape of the value provided by AppContext. */
export type AppContextValue = {
  backendUrl: string;
  companions: Companion[];
  currencySymbol: string;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
};

/**
 * Defaults to `null` until AppContextProvider supplies a value, so consumers
 * must be rendered inside <AppContextProvider>.
 */
export const AppContext = createContext<AppContextValue | null>(null);

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [companions, setCompanions] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false,
  );

  const getCompanionsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/companion/list");

      if (data.success) {
        setCompanions(data.companions);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const value: AppContextValue = {
    backendUrl,
    companions,
    currencySymbol: "£",
    token,
    setToken,
  };

  useEffect(() => {
    getCompanionsData();
  }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
