import { useCallback, useState } from "react";
import { ToastContext } from "./ToastContext";
import type { ToastProviderProps } from "./ToastProvider.types";
import type { ToastMessageProps } from "../ToastMessage";
import { ToastContainer } from "../ToastContainer";

export function ToastProvider({ children, position = "bottom-right" }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastMessageProps[]>([]);

  const addToast = useCallback((toast: Omit<ToastMessageProps, "id">) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer position={position} toasts={toasts} onClose={removeToast} />
    </ToastContext>
  );
}
