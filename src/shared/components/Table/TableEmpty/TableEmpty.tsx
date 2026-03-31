import { MessageSquareX } from "lucide-react";
import type { TableEmptyProps } from "./TableEmpty.types";

export function TableEmpty({ context, emptyState }: TableEmptyProps) {
  return (
    <div className="text-placeholder mt-40 flex flex-col items-center gap-4 text-center">
      <MessageSquareX />

      <p className="text-center font-medium">
        {emptyState ?? (context ? `No ${context} found` : "No registers found")}
      </p>
    </div>
  );
}
