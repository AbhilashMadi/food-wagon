import { useContext } from "react";
import type { ThemeProviderState } from "@/context/ThemeProvider";
import { ThemeProviderContext } from "@/context/ThemeProvider";

import type { IDataContextState } from "@/context/DataContex";
import { DataContextProvider } from "@/context/DataContex";

export const useThem = (): ThemeProviderState => {
  return useContext(ThemeProviderContext);
};

export const useData = (): IDataContextState => {
  return useContext(DataContextProvider);
};
