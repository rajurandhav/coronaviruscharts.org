import React from "react";
import { MapState, ThemeStore, CoronaTracker, UtilsStore, DrawerState } from "../stores";
import i18n from '../i18n'
import { useLocalStore } from "mobx-react"; // 6.x or mobx-react-lite@1.4.0
import { I18nextProvider } from 'react-i18next'

export const storesContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    coronaTraker: new CoronaTracker(),
    themeStore: new ThemeStore(),
    mapState: new MapState(),
    utilStore: new UtilsStore(i18n),
    drawerState: new DrawerState()
  }));
  return (
    <storesContext.Provider value={store}>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </storesContext.Provider>
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
