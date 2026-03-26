import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  label: string;
  path: string;
  collapsed: boolean;
}

export default function SidebarItem({ icon: Icon, label, path, collapsed }: Props) {
  return (
    <NavLink
      to={path}
      title={collapsed ? label : undefined}
      className={({ isActive }) =>
        `group relative flex items-center ${collapsed ? "justify-center" : "gap-3"} rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-card-foreground/10 text-primary shadow-sm"
            : "text-muted-foreground hover:bg-card-foreground/10 hover:text-foreground"
        } `
      }
    >
      <Icon size={20} className="shrink-0 transition-transform group-hover:scale-105" />

      {!collapsed && <span className="whitespace-nowrap">{label}</span>}
    </NavLink>
  );
}
