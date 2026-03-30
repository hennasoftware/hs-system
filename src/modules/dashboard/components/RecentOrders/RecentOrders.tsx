import type { RecentOrdersProps } from "./RecentOrder.types";

const statusStyles = {
  delivered: "bg-emerald-500/15 text-emerald-600",
  production: "bg-blue-500/15 text-blue-600",
  payment: "bg-amber-500/15 text-amber-600",
  review: "bg-purple-500/15 text-purple-600",
};

export function RecentOrders({ loading = false, orders }: RecentOrdersProps) {
  return (
    <div className="bg-card border-border/60 flex flex-col rounded-xl border p-4 shadow-sm md:p-6">
      <div className="mb-4 flex items-center justify-between md:mb-5">
        {loading ? (
          <>
            <div className="bg-muted h-4 w-36 animate-pulse rounded" />
            <div className="bg-muted h-3 w-24 animate-pulse rounded" />
          </>
        ) : (
          <>
            <h3 className="text-sm font-semibold md:text-base">Recent Orders</h3>
            <span className="text-muted-foreground text-xs">Latest orders</span>
          </>
        )}
      </div>

      <div className="space-y-3 md:space-y-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg p-3">
                <div className="space-y-2">
                  <div className="bg-muted h-4 w-40 animate-pulse rounded" />
                  <div className="bg-muted h-3 w-28 animate-pulse rounded" />
                </div>

                <div className="bg-muted h-6 w-20 animate-pulse rounded-md" />
              </div>
            ))
          : orders.map((order) => (
              <div
                key={order.id}
                className="hover:bg-muted/40 flex items-center justify-between rounded-lg p-3 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{order.title}</span>
                    <span className="text-muted-foreground text-xs">{order.client}</span>
                  </div>
                </div>

                <span className={`rounded-md px-2.5 py-1 text-xs font-medium capitalize ${statusStyles[order.status]}`}>
                  {order.status}
                </span>
              </div>
            ))}
      </div>
    </div>
  );
}
