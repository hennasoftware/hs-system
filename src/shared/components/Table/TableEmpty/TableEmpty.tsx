import type { TableEmptyProps } from "./TableEmpty.types";

export function TableEmpty({ context, emptyState }: TableEmptyProps) {
  return (
    <div className="mt-60 flex flex-col items-center gap-4 text-center">
      <p className="text-muted-foreground text-center font-medium">
        {emptyState ?? (context ? `No ${context} found` : "No registers found")}
      </p>
    </div>
  );
}
