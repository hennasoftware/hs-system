export default function StatsSkeleton() {
  return (
    <div className="bg-card border-border/60 animate-pulse rounded-xl border p-5">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <div className="bg-muted h-3 w-24 rounded" />
          <div className="bg-muted h-7 w-20 rounded" />
          <div className="bg-muted h-3 w-16 rounded" />
        </div>

        <div className="bg-muted h-9 w-9 rounded-lg" />
      </div>
    </div>
  );
}
