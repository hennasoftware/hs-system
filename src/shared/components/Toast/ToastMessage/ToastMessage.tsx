import { CircleCheck, CircleX, Info, TriangleAlert } from "lucide-react";
import { type ReactNode, useEffect } from "react";
import clsx from "clsx";
import type { ToastMessageProps, ToastMessageCloseProps } from "./ToastMessage.types";
import { closeButtonClasses, getToastClasses } from "./ToastMessage.styles";

const icons: Record<ToastMessageProps["variant"], ReactNode> = {
  success: <CircleCheck size={18} />,
  error: <CircleX size={18} />,
  warning: <TriangleAlert size={18} />,
  info: <Info size={18} />,
};

export function ToastMessage({ id, message, variant, duration, onClose }: ToastMessageCloseProps) {
  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div role="alert" aria-live="assertive" className={getToastClasses(variant)}>
      <span className="mt-1" aria-hidden="true">
        {icons[variant]}
      </span>

      <p className="flex-1 text-sm sm:text-base">{message}</p>

      <button
        onClick={() => onClose(id)}
        aria-label="Fechar notificação"
        className={clsx(
          "rounded-full px-2 py-0.5 transition-[filter] duration-200 ease-in-out",
          "hover:cursor-pointer hover:brightness-95",
          closeButtonClasses[variant]
        )}
      >
        ✕
      </button>
    </div>
  );
}
