import { createContext } from "react";

export interface SidebarContextType {
  collapsed: boolean;
  openMobile: boolean;
  toggleCollapse: () => void;
  toggleMobile: () => void;
  closeMobile: () => void;
}

export const SidebarContext = createContext<SidebarContextType | null>(null);
