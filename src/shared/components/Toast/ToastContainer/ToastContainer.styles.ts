import type { ToastContainerProps } from "./ToastContainer.types";

export const positionClasses: Record<NonNullable<ToastContainerProps["position"]>, string> = {
  "top-left": "top-4 left-4 w-[calc(100vw-2rem)] sm:w-auto sm:max-w-lg sm:right-auto",
  "top-right": "top-4 left-4 w-[calc(100vw-2rem)] sm:w-auto sm:max-w-lg sm:left-auto sm:right-4",
  "top-center": "top-4 left-4 w-[calc(100vw-2rem)] sm:w-auto sm:max-w-lg sm:left-1/2 sm:-translate-x-1/2",
  "bottom-left": "bottom-4 left-4 w-[calc(100vw-2rem)] sm:w-auto sm:max-w-lg sm:right-auto",
  "bottom-right": "bottom-4 left-4 w-[calc(100vw-2rem)] sm:w-auto sm:max-w-lg sm:left-auto sm:right-4",
  "bottom-center": "bottom-4 left-4 w-[calc(100vw-2rem)] sm:w-auto sm:max-w-lg sm:left-1/2 sm:-translate-x-1/2",
};
