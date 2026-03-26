import { useLogout } from "@/modules/auth/hooks";
import { ChevronLeft, X, LogOut } from "lucide-react";
import { sidebarItems } from "@/config/sidebarItems";
import SidebarItem from "../SidebarItem/SidebarItem.tsx";
import { useSidebar } from "@/shared/hooks/useSidebar.ts";
import { Button } from "../../Button";

export default function SidebarLayout() {
  const { collapsed, openMobile, toggleCollapse, closeMobile } = useSidebar();
  const { logout } = useLogout();

  return (
    <>
      <div
        onClick={closeMobile}
        className={`fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${openMobile ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <aside
        className={`border-border bg-card fixed z-40 flex h-dvh w-64 flex-col overflow-hidden border-r-2 backdrop-blur transition-[width,transform] duration-300 ease-in-out md:relative ${collapsed ? "md:w-20" : "md:w-64"} ${openMobile ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className={`border-border flex items-center border-b-2 p-2 ${collapsed ? "justify-center" : ""}`}>
          {!collapsed && (
            <h1 className="text-foreground w-full py-2.5 pl-2 text-base font-semibold tracking-tight whitespace-nowrap">
              HS System
            </h1>
          )}
          {collapsed && (
            <h1 className="text-foreground mr-auto py-2.5 pl-2 text-center text-base font-semibold tracking-tight whitespace-nowrap">
              HS
            </h1>
          )}

          <Button
            variant="primary"
            onClick={toggleCollapse}
            className="hidden size-8 w-8 items-center justify-end md:flex"
            aria-label="Toggle sidebar"
          >
            <ChevronLeft
              size={18}
              className={`text-muted-foreground transiton-all hover:text-foreground duration-300 hover:cursor-pointer ${collapsed ? "rotate-180" : ""}`}
            />
          </Button>

          <Button
            variant="primary"
            onClick={closeMobile}
            className="ml-auto flex size-8 items-center justify-center md:hidden"
          >
            <X size={18} />
          </Button>
        </div>

        <nav className="flex-1 overflow-hidden p-3">
          {sidebarItems.map((section, index) => (
            <div key={section.section} className="mb-6 last:mb-0">
              {!collapsed && (
                <p className="text-muted-foreground mb-2 px-2 text-xs font-medium tracking-wider uppercase">
                  {section.section}
                </p>
              )}

              {collapsed && index !== 0 && <div className="bg-border my-4 h-px w-full" />}

              <div className={`flex flex-col gap-2 ${collapsed ? "items-center" : ""}`}>
                {section.items.map((item) => (
                  <SidebarItem key={item.path} {...item} collapsed={collapsed} />
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="border-border mt-auto border-t-2 p-2">
          <Button
            variant="secondary"
            onClick={logout}
            className={`text-muted-foreground hover:bg-destructive/10 hover:text-destructive focus-visible:ring-ring flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-200 hover:cursor-pointer focus-visible:ring-2 focus-visible:outline-none ${collapsed ? "justify-center" : "justify-start"} `}
          >
            <LogOut size={20} className="shrink-0 rotate-180" />

            {!collapsed && <span className="truncate text-sm font-medium">Sign out</span>}
          </Button>
        </div>
      </aside>
    </>
  );
}
