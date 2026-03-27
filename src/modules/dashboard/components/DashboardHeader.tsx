type DashboardHeaderProps = {
  title?: string;
  description?: string;
};

export default function DashboardHeader({
  title = "Dashboard",
  description = "Overview of the operation",
}: DashboardHeaderProps) {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>

        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </header>
  );
}
