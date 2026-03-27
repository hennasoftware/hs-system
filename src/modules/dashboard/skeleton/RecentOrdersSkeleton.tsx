export default function RecentOrdersSkeleton() {
  return (
    <div className="bg-card border-border/60 flex flex-col rounded-xl border p-4 shadow-sm md:p-6">
      <div className="mb-4 flex items-center justify-between md:mb-5">
        <div className="bg-muted h-4 w-36 animate-pulse rounded" />
        <div className="bg-muted h-3 w-24 animate-pulse rounded" />
      </div>

      <div className="space-y-3 md:space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg p-3">
            <div className="space-y-2">
              <div className="bg-muted h-4 w-40 animate-pulse rounded" />
              <div className="bg-muted h-3 w-28 animate-pulse rounded" />
            </div>

            <div className="bg-muted h-6 w-20 animate-pulse rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
