import type { ReactNode } from "react";
import type { ToastContainerProps } from "../ToastContainer";
import type { ToastMessageProps } from "../ToastMessage";

export interface ToastProviderProps {
  children: ReactNode;
  position?: ToastContainerProps["position"];
}

export interface ToastContextValue {
  toasts: ToastMessageProps[];
  addToast: (toast: Omit<ToastMessageProps, "id">) => void;
  removeToast: (id: string) => void;
}
