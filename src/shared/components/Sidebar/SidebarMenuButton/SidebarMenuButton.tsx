import { Menu } from "lucide-react";
import { useSidebar } from "@/shared/hooks/useSidebar";

export function SidebarMenuButton() {
  const { toggleMobile, openMobile } = useSidebar();

  return (
    <button
      onClick={toggleMobile}
      className={`bg-background border-border hover:bg-background-hover shadow-border fixed top-5 right-10 z-50 flex h-11 w-11 items-center justify-center rounded-xl border shadow-xs backdrop-blur-md transition-all hover:scale-105 hover:cursor-pointer active:scale-95 md:hidden ${openMobile ? "pointer-events-none opacity-0" : "opacity-100"} `}
    >
      <Menu size={22} />
    </button>
  );
}
