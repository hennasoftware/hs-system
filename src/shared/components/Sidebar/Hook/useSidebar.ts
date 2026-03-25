import { useState } from "react";

export function useSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsCollapsed((prev) => !prev);
  }

  function toggleSidebar() {
    setIsOpen((prev) => !prev);
  }

  return {
    isCollapsed,
    isOpen,
    toggleCollapse,
    toggleSidebar,
  };
}
