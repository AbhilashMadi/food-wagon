import type { Paths } from "@/routes/paths";
import type { FC, ReactNode } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "@/helpers/scroll";

export interface IDataContextState {
  navigateToRoute: (path: Paths) => void;
  navigateWithState: <T>(path: Paths, state: T) => void;
}

export const DataContextProvider = createContext<IDataContextState>({
  navigateToRoute: () => null,
  navigateWithState: () => null,
});

interface IDataContext {
  children: ReactNode;
}

const DataContex: FC<IDataContext> = ({ children }) => {
  const navigate = useNavigate();

  const navigateToRoute = (path: Paths): void => {
    scrollToTop();
    navigate(path);
  };

  const navigateWithState = <T,>(path: Paths, state: T): void => {
    scrollToTop();
    navigate(path, { state });
  };

  return (
    <DataContextProvider.Provider
      value={{
        navigateToRoute,
        navigateWithState,
      }}
    >
      {children}
    </DataContextProvider.Provider>
  );
};

export default DataContex;
