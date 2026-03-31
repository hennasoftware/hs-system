import { Button } from "@/shared/components/Button";
import { PenBox, Plus, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Client } from "../types";
import { Table } from "@/shared/components/Table";
import { getPageTitle } from "@/shared/utils";
import { Helmet } from "react-helmet-async";
import { SidebarMenu } from "@/shared/components/Sidebar";

const clients: Client[] = [
  // TODO: Implement function to gather "clients" from database
];

export function ClientsPage() {
  const navigate = useNavigate();
  const tableCols = [
    { key: "name", header: "Name", accessor: (c: Client) => `${c.firstName} ${c.lastName}`, sortable: true },
    { key: "email", header: "Email", accessor: (c: Client) => c.email ?? "—" },
    { key: "phone", header: "Phone", accessor: (c: Client) => c.phone ?? "—" },
    { key: "location", header: "Location", accessor: (c: Client) => `${c.city}, ${c.state}` },
    { key: "createdAt", header: "Created At", accessor: (c: Client) => c.createdAt, sortable: true },
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle("Clients")}</title>
      </Helmet>

      <SidebarMenu>
        <main className="pt-10 md:pt-0">
          <div className="mx-auto w-full">
            <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-16">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold tracking-tight">Clients</h1>

                <p className="text-muted-foreground text-sm">
                  Manage your client base in one place. View all registered clients, create new records, and update or
                  remove existing information as needed.
                </p>
              </div>

              <div className="w-full md:max-w-40">
                <Button
                  type={"button"}
                  leftAddon={<Plus size={20} />}
                  onClick={() => navigate("/clients/new")}
                  // TODO: implement "/clients/new" route to add new clients
                >
                  New&nbsp;Client
                </Button>
              </div>
            </div>

            <Table<Client>
              columns={tableCols}
              data={clients}
              context={"clients"}
              searchable
              defaultPageSize={10}
              actions={(client) => (
                <div className="flex gap-2">
                  <button
                    className="text-primary hover:text-primary-hover hover:cursor-pointer"
                    onClick={() => navigate("/clients/c/:id")}
                    // TODO: implement "/clients/c/:id" route to edit new clients
                  >
                    <PenBox size={16} />
                  </button>

                  <button
                    className="text-destructive hover:text-destructive-hover hover:cursor-pointer"
                    onClick={() => {
                      console.log("Delete", client.firstName);
                    }}
                    // TODO: implement "Delete client" function to delete clients
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
