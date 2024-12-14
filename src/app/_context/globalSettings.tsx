'use client';

import React, { createContext, useState, ReactNode } from 'react';

interface GlobalSettings {
  isTocCollapsed: boolean;
  toggleToc: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const GlobalSettingsContext = createContext<GlobalSettings | undefined>(undefined);

export const GlobalSettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isTocCollapsed, setIsTocCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleToc = () => setIsTocCollapsed(!isTocCollapsed);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <GlobalSettingsContext.Provider
      value={{ isTocCollapsed, toggleToc, isDarkMode, toggleDarkMode }}
    >
      {children}
    </GlobalSettingsContext.Provider>
  );
};
