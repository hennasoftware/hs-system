import type { LucideIcon } from "lucide-react";

export interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  path: string;
  collapsed: boolean;
}
