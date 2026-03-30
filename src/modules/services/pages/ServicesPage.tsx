import { Button } from "@/shared/components/Button";
import { PenBox, Plus, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Service } from "../types";
import { Table } from "@/shared/components/Table";
import { getPageTitle } from "@/shared/utils";
import { Helmet } from "react-helmet-async";
import { SidebarMenu } from "@/shared/components/Sidebar";

const services: Service[] = [
  // TODO: Implement function to gather "services" from database
];

export function ServicesPage() {
  const navigate = useNavigate();
  const tableCols = [
    { key: "name", header: "Service", accessor: (s: Service) => s.name, sortable: true },
    { key: "description", header: "Description", accessor: (s: Service) => s.description },
    { key: "createdAt", header: "Created At", accessor: (s: Service) => s.createdAt, sortable: true },
  ];

  return (
    <>
      <Helmet>
        <title>{getPageTitle("Services")}</title>
      </Helmet>

      <SidebarMenu>
        <main className="min-h-screen">
          <div className="mx-auto w-full">
            <div className="mb-12">
              <h1 className="text-2xl font-semibold tracking-tight">Services</h1>

              <p className="text-muted-foreground text-sm">
                Organize the services you offer. Add new services, update details, or remove outdated entries to keep
                your catalog accurate.
              </p>
            </div>

            <div className="mb-6 flex w-full items-center justify-end">
              <div className="max-w-40">
                <Button
                  type={"button"}
                  leftAddon={<Plus size={20} />}
                  onClick={() => navigate("/services/new")}
                  // TODO: implement "/services/new" route to add new services
                >
                  New Service
                </Button>
              </div>
            </div>

            <Table<Service>
              columns={tableCols}
              data={services}
              context={"services"}
              searchable
              defaultPageSize={10}
              actions={(service) => (
                <div className="flex gap-2">
                  <button
                    className="text-primary hover:text-primary-hover hover:cursor-pointer"
                    onClick={() => navigate("/services/s/:id")}
                    // TODO: implement "/services/s/:id" route to edit services
                  >
                    <PenBox size={16} />
                  </button>

                  <button
                    className="text-destructive hover:text-destructive-hover hover:cursor-pointer"
                    onClick={() => {
                      console.log("Delete", service.id);
                    }}
                    // TODO: implement "Delete service" function to delete services
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
