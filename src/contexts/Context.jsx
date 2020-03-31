import React from "react";
import { MapState, ThemeStore, CoronaTracker } from "../stores";
import { useLocalStore } from "mobx-react"; // 6.x or mobx-react-lite@1.4.0

export const storesContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    coronaTraker: new CoronaTracker(),
    themeStore: new ThemeStore(),
    mapState: new MapState()
  }));
  return (
    <storesContext.Provider value={store}>{children}</storesContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(storesContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};
