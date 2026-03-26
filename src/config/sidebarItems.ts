import { LayoutDashboard, ClipboardList, Users, Package } from "lucide-react";

export const sidebarItems = [
  {
    section: "Basics",
    items: [
      {
        label: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
      },
      {
        label: "Orders",
        icon: ClipboardList,
        path: "/orders",
      },
      {
        label: "Clients",
        icon: Users,
        path: "/clients",
      },
      {
        label: "Services",
        icon: Package,
        path: "/services",
      },
    ],
  },
];
