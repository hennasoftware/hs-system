import { LayoutDashboard, ClipboardList, Users, Package, CreditCard, Folder, Mail } from "lucide-react";

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
        label: "Products",
        icon: Package,
        path: "/products",
      },
    ],
  },
  {
    section: "System",
    items: [
      {
        label: "Payments",
        icon: CreditCard,
        path: "/payments",
      },
      {
        label: "Files",
        icon: Folder,
        path: "/files",
      },
      {
        label: "Emails",
        icon: Mail,
        path: "/emails",
      },
    ],
  },
];
