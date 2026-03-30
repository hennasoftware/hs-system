export type ChartData = {
  xAxis: string;
  yAxis: number;
};

export interface ChartProps {
  title?: string;
  description?: string;
  data: ChartData[];
}
