import type { SidebarMenuProps } from "./SidebarMenu.types";
import { SidebarProvider } from "../SidebarProvider";
import { SidebarLayout } from "../SidebarLayout";
import { SidebarMenuButton } from "../SidebarMenuButton";

export function SidebarMenu({ children }: SidebarMenuProps) {
  return (
    <SidebarProvider>
      <div className="bg-background text-foreground flex h-screen">
        <SidebarLayout />

        <SidebarMenuButton />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
