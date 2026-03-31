import clsx from "clsx";
import type { TableHeadProps } from "./TableHead.types";
import { SearchIcon } from "lucide-react";

export function TableHead({ searchable, query, pageSize, pageSizeOptions, setQuery, setPageSize }: TableHeadProps) {
  return (
    <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <div className="w-full">
        {searchable && (
          <div className="relative w-full">
            {!query && (
              <span className="text-placeholder pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
                <SearchIcon className="size-6" />
              </span>
            )}

            <input
              type="text"
              placeholder="Search"
              className={clsx(
                "shadow-border bg-card border-input text-foreground block w-full appearance-none rounded border py-2 pr-3",
                "leading-tight shadow-xs transition-all disabled:cursor-not-allowed disabled:opacity-50",
                "focus:border-primary focus:ring-ring placeholder:text-placeholder focus:ring focus:outline-none",
                query ? "pl-3" : "pl-10"
              )}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="flex items-center justify-end gap-2 md:ml-4 md:w-fit">
        <label className="text-muted-foreground">Show</label>

        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="border-border text-foreground border-b"
          aria-label="Page size"
        >
          {pageSizeOptions.map((s) => (
            <option key={s} value={s} className="text-black">
              {s}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
