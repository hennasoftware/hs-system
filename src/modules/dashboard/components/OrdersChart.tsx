import { useEffect, useRef } from "react";
import * as echarts from "echarts";

type ChartData = {
  month: string;
  orders: number;
};

const data: ChartData[] = [
  { month: "Jan", orders: 12 },
  { month: "Fev", orders: 15 },
  { month: "Mar", orders: 18 },
  { month: "Abr", orders: 22 },
  { month: "Mai", orders: 28 },
  { month: "Jun", orders: 25 },
  { month: "Jul", orders: 30 },
  { month: "Ago", orders: 34 },
  { month: "Set", orders: 29 },
  { month: "Out", orders: 36 },
  { month: "Nov", orders: 41 },
  { month: "Dez", orders: 48 },
];

export default function OrdersChart() {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    chartInstance.current = echarts.init(chartRef.current);

    const option = {
      tooltip: { trigger: "axis" },

      grid: {
        left: 8,
        right: 8,
        bottom: 8,
        top: 10,
        containLabel: true,
      },

      xAxis: {
        type: "category",
        data: data.map((d) => d.month),
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#e5e7eb",
          },
        },
      },

      yAxis: {
        type: "value",
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#e5e7eb",
          },
        },
      },

      series: [
        {
          data: data.map((d) => d.orders),
          type: "line",
          smooth: true,

          lineStyle: {
            width: 3,
            color: "#3b82f6",
          },

          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(59,130,246,0.35)" },
              { offset: 1, color: "rgba(59,130,246,0)" },
            ]),
          },

          symbol: "circle",
          symbolSize: 6,

          itemStyle: {
            color: "#3b82f6",
          },
        },
      ],
    };

    chartInstance.current.setOption(option);

    const resizeObserver = new ResizeObserver(() => {
      chartInstance.current?.resize();
    });

    resizeObserver.observe(chartRef.current);

    return () => {
      resizeObserver.disconnect();
      chartInstance.current?.dispose();
    };
  }, []);

  return (
    <div className="bg-card border-border/60 w-full rounded-xl border p-3 shadow-sm sm:p-6">
      <div className="mb-3 flex items-center justify-between sm:mb-6">
        <h3 className="text-sm font-semibold">Pedidos por mês</h3>
        <span className="text-muted-foreground text-xs">últimos 6 meses</span>
      </div>

      <div ref={chartRef} className="h-85 w-full min-w-0 sm:h-90" />
    </div>
  );
}
