import { useState, createContext } from 'react';
import { AuthProvider } from './AuthContext';

export const SidebarContext = createContext({});

export function SidebarProvider({ children }) {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
  <AuthProvider>
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
    </AuthProvider>
  );
}
