import type { Order } from "../components/RecentOrders/RecentOrder.types";
import { Helmet } from "react-helmet-async";
import { FileText, Clock, CheckCircle, DollarSign } from "lucide-react";
import { SidebarMenu } from "@/shared/components/Sidebar";
import { getPageTitle } from "@/shared/utils";
import { Card } from "@/shared/components/Card";
import { StatsSkeleton } from "../components/Skeleton";
import { Chart } from "@/shared/components/Chart";
import { RecentOrders } from "../components/RecentOrders";
import { useDashboardData } from "../hooks/useDashboardData";

export function DashboardPage() {
  const { stats, loading } = useDashboardData();

  const recentOrders: Order[] = [
    { id: "1", title: "TCC - Administração", client: "Ana Silva", status: "delivered" },
    { id: "2", title: "Artigo Científico", client: "Carlos Souza", status: "production" },
    { id: "3", title: "Monografia - Direito", client: "Marina Costa", status: "payment" },
    { id: "4", title: "Revisão de Texto", client: "João Pereira", status: "review" },
  ];

  const chartData = [
    { xAxis: "Jan", yAxis: 12 },
    { xAxis: "Feb", yAxis: 15 },
    { xAxis: "Mar", yAxis: 18 },
    { xAxis: "Apr", yAxis: 22 },
    { xAxis: "May", yAxis: 28 },
    { xAxis: "Jun", yAxis: 25 },
    { xAxis: "Jul", yAxis: 30 },
    { xAxis: "Aug", yAxis: 34 },
    { xAxis: "Sep", yAxis: 29 },
    { xAxis: "Oct", yAxis: 36 },
    { xAxis: "Nov", yAxis: 41 },
    { xAxis: "Dec", yAxis: 48 },
  ];

  const statsCards = stats
    ? [
        {
          title: "Total Orders",
          value: stats.totalOrders,
          growth: "+12%",
          icon: <FileText size={18} />,
        },
        {
          title: "In progress",
          value: stats.inProgress,
          icon: <Clock size={18} />,
        },
        {
          title: "Completed",
          value: stats.completed,
          growth: "0%",
          icon: <CheckCircle size={18} />,
        },
        {
          title: "Revenue",
          value: `R$ ${stats.revenue}`,
          growth: "-15%",
          icon: <DollarSign size={18} />,
        },
      ]
    : [];

  return (
    <>
      <Helmet>
        <title>{getPageTitle("Dashboard")}</title>
      </Helmet>

      <SidebarMenu>
        <main className="min-h-screen">
          <div className="mx-auto w-full">
            <div className="mb-12">
              <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>

              <p className="text-muted-foreground text-sm">Overview of the operation</p>
            </div>

            <div className="mb-6 grid min-w-0 grid-cols-1 gap-6 *:min-w-0 sm:grid-cols-2 xl:grid-cols-4">
              {loading
                ? Array.from({ length: 4 }).map((_, index) => <StatsSkeleton key={index} />)
                : statsCards.map((card) => (
                    <Card
                      key={card.title}
                      title={card.title}
                      value={card.value}
                      growth={card.growth}
                      icon={card.icon}
                    />
                  ))}
            </div>

            <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="min-w-0 xl:col-span-2">
                {loading ? (
                  <div className="bg-card border-border h-85 animate-pulse rounded-xl border" />
                ) : (
                  <Chart title={"Orders per month"} description={"Last 12 months"} data={chartData} />
                )}
              </div>

              <RecentOrders loading={loading} orders={recentOrders} />
            </section>
          </div>
        </main>
      </SidebarMenu>
    </>
  );
}
