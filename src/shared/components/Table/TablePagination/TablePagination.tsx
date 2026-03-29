import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import type { TablePaginationProps } from "./TablePagination.types";

export function TablePagination({ page, pageSize, total, setPage }: TablePaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="text-muted-foreground text-sm">
        Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, total)} of {total}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="text-primary rounded px-3 py-1 hover:cursor-pointer disabled:cursor-default disabled:opacity-50"
        >
          <ChevronLeftIcon />
        </button>
        <div className="text-sm">
          {page} / {totalPages}
        </div>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="text-primary rounded px-3 py-1 hover:cursor-pointer disabled:cursor-default disabled:opacity-50"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
