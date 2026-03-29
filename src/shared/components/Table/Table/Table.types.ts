import type { ReactNode } from "react";

export type Align = "left" | "center" | "right";

export type TableColumn<T> = {
  key: string;
  header: ReactNode;
  accessor?: (row: T) => ReactNode;
  render?: (row: T) => ReactNode;
  sortable?: boolean;
  align?: Align;
};

export type TableRow = {
  id?: string | number;
  uid?: string | number;
  [key: string]: unknown;
};

export type SortState = { key: string; dir: "asc" | "desc" } | null;

export interface TableProps<T extends TableRow> {
  columns: TableColumn<T>[];
  data: T[];
  context: string;
  defaultPageSize?: number;
  pageSizeOptions?: number[];
  searchable?: boolean;
  onRowClick?: (row: T) => void;
  actions?: (row: T) => ReactNode;
  emptyState?: string;
  loading?: boolean;
  getRowId?: (row: T) => string;
}
