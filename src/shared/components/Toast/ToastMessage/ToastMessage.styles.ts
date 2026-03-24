import clsx from "clsx";
import type { ToastMessageProps } from "./ToastMessage.types";

export const variantClasses: Record<ToastMessageProps["variant"], string> = {
  success: "bg-success text-success-text",
  error: "bg-error text-error-text",
  warning: "bg-warning text-warning-text",
  info: "bg-info text-info-text",
};

export const closeButtonClasses: Record<ToastMessageProps["variant"], string> = {
  success: "bg-success text-success-text",
  error: "bg-error text-error-text",
  warning: "bg-warning text-warning-text",
  info: "bg-info text-info-text",
};

export function getToastClasses(variant: ToastMessageProps["variant"]): string {
  return clsx("flex items-start gap-3 w-full rounded-lg px-4 py-3 shadow-lg", variantClasses[variant]);
}
