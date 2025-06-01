"use client"
import React, { createContext, useState } from 'react';

export const ASideMenucontext = createContext(null);

export default function  ASideMenuProvider  ({ children }) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <ASideMenucontext.Provider value={{isSidebarOpen, setIsSidebarOpen}}>
        {children}
    </ASideMenucontext.Provider>
  );
}