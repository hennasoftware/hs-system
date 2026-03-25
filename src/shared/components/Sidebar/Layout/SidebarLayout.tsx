import { ChevronLeft, X, LogOut } from "lucide-react";
import { sidebarItems } from "../Data/SidebarData.ts";
import SidebarItem from "../Data/SidebarItem.tsx";
import { useSidebar } from "../Context/useSidebar.ts";
import { Button } from "../../Button";

export default function SidebarLayout() {
  const { collapsed, openMobile, toggleCollapse, closeMobile } = useSidebar();

  return (
    <>
      <div
        onClick={closeMobile}
        className={`fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${openMobile ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <aside
        className={`border-border/60 bg-background/95 fixed z-40 flex h-dvh w-64 flex-col overflow-hidden border-r backdrop-blur transition-[width,transform] duration-300 ease-in-out md:relative ${collapsed ? "md:w-20" : "md:w-64"} ${openMobile ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div
          className={`border-border/50 flex h-16 items-center border-b ${collapsed ? "justify-center px-2" : "gap-3 px-4"}`}
        >
          {!collapsed && <h1 className="text-base font-semibold tracking-tight whitespace-nowrap">HS System</h1>}

          <Button
            variant="primary"
            onClick={toggleCollapse}
            className="ml-auto hidden size-8 items-center justify-center md:flex"
            aria-label="Toggle sidebar"
          >
            <ChevronLeft size={18} className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} />
          </Button>

          <Button
            variant="primary"
            onClick={closeMobile}
            className="ml-auto flex size-8 items-center justify-center md:hidden"
          >
            <X size={18} />
          </Button>
        </div>

        <nav className="flex-1 overflow-hidden px-3 py-4">
          {sidebarItems.map((section, index) => (
            <div key={section.section} className="mb-6 last:mb-0">
              {!collapsed && (
                <p className="text-muted-foreground mb-2 px-2 text-xs font-medium tracking-wider uppercase">
                  {section.section}
                </p>
              )}

              {collapsed && index !== 0 && <div className="bg-border/60 my-4 h-px w-full" />}

              <div className={`flex flex-col gap-1 ${collapsed ? "items-center" : ""}`}>
                {section.items.map((item) => (
                  <SidebarItem key={item.path} {...item} collapsed={collapsed} />
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="border-border/60 mt-auto border-t p-3">
          <Button
            variant="secondary"
            onClick={() => {}}
            className={`text-foreground hover:bg-destructive/10 hover:text-destructive focus-visible:ring-ring flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none ${collapsed ? "justify-center" : "justify-start"} `}
          >
            <LogOut size={20} className="shrink-0" />

            {!collapsed && <span className="truncate text-sm font-medium">Logout</span>}
          </Button>
        </div>
      </aside>
    </>
  );
}
