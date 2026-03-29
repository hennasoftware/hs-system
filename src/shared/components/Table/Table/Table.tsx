import { TableEmpty } from "../TableEmpty";
import { TableHead } from "../TableHead";
import { TableLoading } from "../TableLoading";
import { TablePagination } from "../TablePagination";
import { useEffect, useMemo, useState } from "react";
import type { TableColumn, SortState, TableProps, TableRow } from "./Table.types";
import * as S from "./Table.styles";

export function Table<T extends TableRow>(props: TableProps<T>) {
  const {
    columns,
    data,
    context,
    defaultPageSize = 10,
    pageSizeOptions = [5, 10, 25, 50],
    searchable = false,
    onRowClick,
    actions,
    emptyState,
    loading = false,
    getRowId = (r: T) => r.id ?? r.uid ?? JSON.stringify(r),
  } = props;

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortState>(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);

  useEffect(() => setPage(1), [data, pageSize, query, sort]);

  const filtered = useMemo(() => {
    if (!query) return data;

    const q = query.toLowerCase();

    return data.filter((row) =>
      columns.some((col) => {
        const v = col.accessor ? col.accessor(row) : (row as T)[col.key];

        return String(v ?? "")
          .toLowerCase()
          .includes(q);
      })
    );
  }, [data, query, columns]);

  const sorted = useMemo(() => {
    if (!sort) return filtered;

    const { key, dir } = sort;
    const col = columns.find((c) => c.key === key);

    if (!col) return filtered;

    const accessor = (row: T) => (col.accessor ? col.accessor(row) : (row as T)[col.key]);
    const copy = [...filtered];

    copy.sort((a, b) => {
      const A = accessor(a);
      const B = accessor(b);

      if (A == null && B == null) return 0;
      if (A == null) return dir === "asc" ? -1 : 1;
      if (B == null) return dir === "asc" ? 1 : -1;

      const sa = String(A);
      const sb = String(B);

      return dir === "asc"
        ? sa.localeCompare(sb, undefined, { numeric: true })
        : sb.localeCompare(sa, undefined, { numeric: true });
    });

    return copy;
  }, [filtered, sort, columns]);

  const total = sorted.length;

  const pageData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, page, pageSize]);

  const toggleSort = (key: string) => {
    if (!sort || sort.key !== key) {
      setSort({ key, dir: "asc" });
    } else if (sort.dir === "asc") {
      setSort({ key, dir: "desc" });
    } else {
      setSort(null);
    }
    setPage(1);
  };

  const renderCell = (col: TableColumn<T>, row: T) => {
    if (col.render) return col.render(row);
    if (col.accessor) return col.accessor(row);
    const value = row[col.key as keyof T];
    return typeof value === "string" || typeof value === "number" ? value : String(value ?? "");
  };

  return (
    <div className="w-full">
      <TableHead
        searchable={searchable}
        query={query}
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        setPageSize={setPageSize}
        setQuery={setQuery}
      />

      {loading ? (
        <TableLoading context={context} />
      ) : total === 0 ? (
        <TableEmpty context={context} emptyState={emptyState} />
      ) : (
        <>
          <div className="border-border bg-card overflow-x-auto rounded-md border-2">
            <table className="divide-border min-w-full table-auto divide-y">
              <thead>
                <tr>
                  {columns.map((col) => {
                    return (
                      <th
                        key={col.key}
                        scope="col"
                        className={S.getTableClasses(
                          S.thBaseClass,
                          S.thColClass,
                          S.thBgClass,
                          S.thTextClass,
                          S.rowPaddingClass,
                          S.cellAlignClass(col.align)
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <span>{col.header}</span>

                          {col.sortable && (
                            <button
                              aria-label={`Sort by ${String(col.header)}`}
                              onClick={() => toggleSort(col.key)}
                              className={S.sortButtonClass}
                              type="button"
                            >
                              {sort?.key === col.key ? (sort.dir === "asc" ? "▲" : "▼") : "↕"}
                            </button>
                          )}
                        </div>
                      </th>
                    );
                  })}
                  {actions && (
                    <th
                      scope="col"
                      className={S.getTableClasses(
                        S.thBaseClass,
                        S.thActionColClass,
                        S.thBgClass,
                        S.thTextClass,
                        S.rowPaddingClass
                      )}
                    >
                      Actions
                    </th>
                  )}
                </tr>
              </thead>

              <tbody className="divide-border bg-card divide-y">
                {pageData.map((row) => (
                  <tr
                    key={getRowId(row)}
                    className={`group ${onRowClick ? "cursor-pointer" : ""}`}
                    onClick={() => onRowClick?.(row)}
                  >
                    {columns.map((col) => {
                      return (
                        <td
                          key={col.key}
                          className={S.getTableClasses(
                            S.tdBaseClass,
                            S.tdBgClass,
                            S.tdTextClass,
                            S.rowPaddingClass,
                            S.cellAlignClass(col.align)
                          )}
                          title={String(renderCell(col, row) ?? "-")}
                        >
                          {renderCell(col, row)}
                        </td>
                      );
                    })}
                    {actions && (
                      <td
                        className={S.getTableClasses(S.tdTextClass, S.tdActionColClass, S.rowPaddingClass)}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {actions(row)}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <TablePagination page={page} pageSize={pageSize} total={total} setPage={setPage} />
        </>
      )}
    </div>
  );
}
