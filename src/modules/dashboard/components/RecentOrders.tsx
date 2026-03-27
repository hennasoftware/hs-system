type OrderStatus = "Delivered" | "Production" | "Payment" | "Review";

type Order = {
  id: string;
  title: string;
  client: string;
  status: OrderStatus;
};

type RecentOrdersProps = {
  loading?: boolean;
};

const orders: Order[] = [
  { id: "1", title: "TCC - Administração", client: "Ana Silva", status: "Delivered" },
  { id: "2", title: "Artigo Científico", client: "Carlos Souza", status: "Production" },
  { id: "3", title: "Monografia - Direito", client: "Marina Costa", status: "Payment" },
  { id: "4", title: "Revisão de Texto", client: "João Pereira", status: "Review" },
];

const statusStyles: Record<OrderStatus, string> = {
  Delivered: "bg-emerald-500/15 text-emerald-600",
  Production: "bg-blue-500/15 text-blue-600",
  Payment: "bg-amber-500/15 text-amber-600",
  Review: "bg-purple-500/15 text-purple-600",
};

export default function RecentOrders({ loading = false }: RecentOrdersProps) {
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
            <span className="text-muted-foreground text-xs">latest orders</span>
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

                <span className={`rounded-md px-2.5 py-1 text-xs font-medium ${statusStyles[order.status]}`}>
                  {order.status}
                </span>
              </div>
            ))}
      </div>
    </div>
  );
}
