import React from 'react'
import { CoronaTracker } from '../stores/covidApis.store'
import { ThemeStore } from '../stores/theme.store'

export const storesContext = React.createContext({
  coronaTraker: new CoronaTracker(),
  themeStore: new ThemeStore(),
})