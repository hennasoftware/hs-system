import { InputField } from "@/shared/components/InputField";
import type { TableHeadProps } from "./TableHead.types";
import { SearchIcon } from "lucide-react";

export function TableHead({ searchable, query, pageSize, pageSizeOptions, setQuery, setPageSize }: TableHeadProps) {
  return (
    <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <div className="w-full">
        {searchable && (
          <InputField
            placeholder={"Search"}
            label={"Search"}
            showLabel={false}
            type={"text"}
            leftAddon={<SearchIcon />}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        )}
      </div>

      <div className="flex w-full items-center justify-end gap-2 md:ml-4 md:w-fit">
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
