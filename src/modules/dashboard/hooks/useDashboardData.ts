import { useEffect, useState } from "react";

type DashboardStats = {
  totalOrders: number;
  inProgress: number;
  completed: number;
  revenue: number;
};

export function useDashboardData() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        totalOrders: 8,
        inProgress: 3,
        completed: 2,
        revenue: 1800,
      });

      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { stats, loading };
}
