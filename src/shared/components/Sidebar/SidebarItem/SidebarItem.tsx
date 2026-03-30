import type { SidebarItemProps } from "./SidebarItem.types";
import { NavLink } from "react-router-dom";

export function SidebarItem({ icon: Icon, label, path, collapsed }: SidebarItemProps) {
  return (
    <NavLink
      to={path}
      title={collapsed ? label : undefined}
      className={({ isActive }) =>
        `group relative flex items-center ${collapsed ? "justify-center" : "gap-3"} rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-card-hover text-primary shadow-border shadow-xs"
            : "text-muted-foreground hover:bg-card-hover hover:text-foreground"
        } `
      }
    >
      <Icon size={20} className="shrink-0 transition-transform group-hover:scale-105" />

      {!collapsed && <span className="whitespace-nowrap">{label}</span>}
    </NavLink>
  );
}
