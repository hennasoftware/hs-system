export interface ToastMessageProps {
  id: string;
  message: string;
  variant: "success" | "error" | "warning" | "info";
  duration?: number;
}

export interface ToastMessageCloseProps extends ToastMessageProps {
  onClose: (id: string) => void;
}
