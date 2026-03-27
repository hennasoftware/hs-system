import type { ReactNode } from "react";

type Props = {
  title: string;
  value: string | number;
  growth?: string;
  icon?: ReactNode;
};

export default function StatsCard({ title, value, growth, icon }: Props) {
  return (
    <div className="group bg-card border-border relative rounded-xl border p-5 transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm font-medium">{title}</p>

          <h2 className="text-3xl font-semibold tracking-tight">{value}</h2>

          {growth && (
            <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-500">
              {growth}
            </span>
          )}
        </div>

        {icon && (
          <div className="bg-muted text-muted-foreground group-hover:text-foreground flex size-10 items-center justify-center rounded-lg transition-colors">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
