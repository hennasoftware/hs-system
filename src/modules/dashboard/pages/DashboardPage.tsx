import { Helmet } from "react-helmet-async";
import { FileText, Clock, CheckCircle, DollarSign } from "lucide-react";

import { SidebarMenu } from "@/shared/components/Sidebar/SidebarMenu/SidebarMenu";
import { getPageTitle } from "@/shared/utils";

import DashboardHeader from "../components/DashboardHeader";
import StatsCard from "../components/StatsCard";
import StatsGrid from "../components/StatsGrid";
import StatsSkeleton from "../skeleton/StatsSkeleton";
import OrdersChart from "../components/OrdersChart";
import RecentOrders from "../components/RecentOrders";

import { useDashboardData } from "../hooks/useDashboardData";

export function DashboardPage() {
  const { stats, loading } = useDashboardData();

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
          icon: <CheckCircle size={18} />,
        },
        {
          title: "Revenue",
          value: `R$ ${stats.revenue}`,
          growth: "+15%",
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
        <main className="mt-14 min-h-screen md:mt-0 md:p-6">
          <div className="mx-auto w-full space-y-10 md:space-y-16">
            <DashboardHeader />

            <StatsGrid>
              {loading
                ? Array.from({ length: 4 }).map((_, index) => <StatsSkeleton key={index} />)
                : statsCards.map((card) => (
                    <StatsCard
                      key={card.title}
                      title={card.title}
                      value={card.value}
                      growth={card.growth}
                      icon={card.icon}
                    />
                  ))}
            </StatsGrid>

            <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="min-w-0 xl:col-span-2">
                {loading ? (
                  <div className="bg-card border-border/60 h-85 animate-pulse rounded-xl border" />
                ) : (
                  <OrdersChart />
                )}
              </div>

              <RecentOrders loading={loading} />
            </section>
          </div>
        </main>
      </SidebarMenu>
    </>
  );
}
