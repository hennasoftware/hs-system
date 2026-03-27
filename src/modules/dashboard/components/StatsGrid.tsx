import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function StatsGrid({ children }: Props) {
  return <div className="grid min-w-0 grid-cols-1 gap-6 *:min-w-0 sm:grid-cols-2 xl:grid-cols-4">{children}</div>;
}
