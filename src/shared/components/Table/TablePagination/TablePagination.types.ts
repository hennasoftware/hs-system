export interface TablePaginationProps {
  page: number;
  pageSize: number;
  total: number;
  setPage: (page: number | ((prev: number) => number)) => void;
}
