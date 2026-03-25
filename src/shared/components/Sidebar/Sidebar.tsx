import { SidebarProvider } from "./Context/SidebarProvider";
import SidebarLayout from "./Layout/SidebarLayout.tsx";
import MenuButton from "./MenuButton/MenuButton";

interface Props {
  children: React.ReactNode;
}

export default function Sidebar({ children }: Props) {
  return (
    <SidebarProvider>
      <div className="bg-background text-foreground flex h-screen">
        <SidebarLayout />

        <MenuButton />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
