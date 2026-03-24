import clsx from "clsx";
import { ToastMessage } from "../ToastMessage";
import { positionClasses } from "./ToastContainer.styles";
import type { ToastMessageProps as ToastType } from "../ToastMessage";
import type { ToastContainerProps } from "./ToastContainer.types";

interface Props extends ToastContainerProps {
  toasts: ToastType[];
  onClose: (id: string) => void;
}

export function ToastContainer({ position = "bottom-right", toasts = [], onClose }: Props) {
  if (toasts.length === 0) return null;

  return (
    <div aria-label="Notificações" className={clsx("fixed z-50 flex flex-col gap-2", positionClasses[position])}>
      {toasts.map((toast) => (
        <ToastMessage key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  );
}
