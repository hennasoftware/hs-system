import { useState, useEffect, type ReactNode } from "react";
import { SidebarContext } from "./SidebarContext";

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  function toggleCollapse() {
    setCollapsed((prev) => !prev);
  }

  function toggleMobile() {
    setOpenMobile((prev) => !prev);
  }

  function closeMobile() {
    setOpenMobile(false);
  }

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        setCollapsed(false);
      } else {
        setOpenMobile(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        collapsed,
        openMobile,
        toggleCollapse,
        toggleMobile,
        closeMobile,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
