import type { TableLoadingProps } from "./TableLoading.types";

export function TableLoading({ context = "" }: TableLoadingProps) {
  return (
    <div className="mt-60 flex flex-col items-center gap-4 text-center">
      <span
        className="border-primary size-8 animate-spin rounded-full border-4 border-t-transparent"
        aria-hidden="true"
      />

      <p className="text-primary animate-pulse text-sm font-medium">
        {context ? `Loading ${context}...` : "Loading..."}
      </p>
    </div>
  );
}
