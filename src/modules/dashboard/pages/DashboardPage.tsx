import { useAuth } from "@/modules/auth/hooks";
import { getPageTitle } from "@/shared/utils";
import { Helmet } from "react-helmet-async";
import { SidebarMenu } from "@/shared/components/Sidebar";

export function DashboardPage() {
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>{getPageTitle("Dashboard")}</title>
      </Helmet>

      <SidebarMenu>
        <main className="bg-background flex min-h-screen flex-col items-center justify-center px-6 text-center lg:px-8">
          <p className="text-primary text-base font-semibold">
            Hello, {user?.firstName} {user?.lastName}!
          </p>

          <h1 className="text-foreground mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
            Dashboard
          </h1>

          <p className="text-muted-foreground mt-6 text-lg font-medium text-pretty sm:text-xl/8">
            There's nothing here yet.
          </p>
        </main>
      </SidebarMenu>
    </>
  );
}
