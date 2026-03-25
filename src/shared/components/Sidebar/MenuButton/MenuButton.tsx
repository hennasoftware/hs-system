import { Menu } from "lucide-react";
import { useSidebar } from "../Context/useSidebar";

export default function MenuButton() {
  const { toggleMobile, openMobile } = useSidebar();

  return (
    <button
      onClick={toggleMobile}
      className={`bg-background/80 border-border/60 hover:bg-accent fixed top-5 left-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl border shadow-sm backdrop-blur-md transition-all hover:scale-105 active:scale-95 md:hidden ${openMobile ? "pointer-events-none opacity-0" : "opacity-100"} `}
    >
      <Menu size={22} />
    </button>
  );
}
