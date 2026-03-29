export interface TableHeadProps {
  searchable: boolean;
  query: string;
  pageSize: number;
  pageSizeOptions: number[];
  setQuery: (q: string) => void;
  setPageSize: (size: number) => void;
}
