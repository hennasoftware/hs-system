import type { ChartProps } from "./Chart.types";
import { useEffect, useRef } from "react";
import * as echarts from "echarts";

export function Chart({ title, description, data }: ChartProps) {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);
  const theme = localStorage.getItem("theme");
  const chartLineColor =
    theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "#334155" : "#cbd5e1";

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
        data: data.map((d) => d.xAxis),
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: chartLineColor,
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
            color: chartLineColor,
          },
        },
      },

      series: [
        {
          data: data.map((d) => d.yAxis),
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
  }, [chartLineColor, data]);

  return (
    <div className="bg-card border-border w-full rounded-xl border p-3 shadow-sm sm:p-6">
      <div className="mb-3 flex items-center justify-between sm:mb-6">
        <h3 className="text-sm font-semibold">{title}</h3>
        <span className="text-muted-foreground text-xs">{description}</span>
      </div>

      <div ref={chartRef} className="h-85 w-full min-w-0 sm:h-90" />
    </div>
  );
}
