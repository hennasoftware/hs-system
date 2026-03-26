import { SidebarProvider } from "@/shared/components/Sidebar/SidebarProvider/SidebarProvider";
import SidebarLayout from "../SidebarLayout/SidebarLayout.tsx";
import SidebarMenuButton from "@/shared/components/Sidebar/SidebarMenuButton/SidebarMenuButton";

interface Props {
  children: React.ReactNode;
}

export function SidebarMenu({ children }: Props) {
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
