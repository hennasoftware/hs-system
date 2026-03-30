import { Button } from "@/shared/components/Button";
import { PenBox, Plus, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Order } from "../types";
import { Table } from "@/shared/components/Table";
import { getPageTitle } from "@/shared/utils";
import { Helmet } from "react-helmet-async";
import { SidebarMenu } from "@/shared/components/Sidebar";

const orders: Order[] = [
  // TODO: Implement function to gather "orders" from database
];

export function OrdersPage() {
  const navigate = useNavigate();
  const tableCols = [
    { key: "id", header: "Order ID", accessor: (o: Order) => o.id, sortable: true },
    { key: "clientId", header: "Client ID", accessor: (o: Order) => o.clientId },
    { key: "createdAt", header: "Created At", accessor: (o: Order) => o.createdAt, sortable: true },
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle("Orders")}</title>
      </Helmet>

      <SidebarMenu>
        <main className="min-h-screen">
          <div className="mx-auto w-full">
            <div className="mb-12">
              <h1 className="text-2xl font-semibold tracking-tight">Orders</h1>

              <p className="text-muted-foreground text-sm">
                Track and manage all orders efficiently. Browse existing orders, create new ones, and edit or delete
                records to keep everything up to date.
              </p>
            </div>

            <div className="mb-6 flex w-full items-center justify-end">
              <div className="max-w-40">
                <Button
                  type={"button"}
                  leftAddon={<Plus size={20} />}
                  onClick={() => navigate("/orders/new")}
                  // TODO: implement "/orders/new" route to add new orders
                >
                  New Order
                </Button>
              </div>
            </div>

            <Table<Order>
              columns={tableCols}
              data={orders}
              context={"orders"}
              searchable
              defaultPageSize={10}
              actions={(order) => (
                <div className="flex gap-2">
                  <button
                    className="text-primary hover:text-primary-hover hover:cursor-pointer"
                    onClick={() => navigate("/orders/o/:id")}
                    // TODO: implement "/orders/o/:id" route to edit orders
                  >
                    <PenBox size={16} />
                  </button>

                  <button
                    className="text-destructive hover:text-destructive-hover hover:cursor-pointer"
                    onClick={() => {
                      console.log("Delete", order.id);
                    }}
                    // TODO: implement "Delete order" function to delete orders
                  >
                    <Trash size={16} />
                  </button>
                </div>
              )}
            />
          </div>
        </main>
      </SidebarMenu>
    </>
  );
}
