import clsx from "clsx";

const defaultClasses = clsx(
  "w-full inline-flex items-center justify-center gap-2 rounded font-medium hover:cursor-pointer px-4 py-2",
  "transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"
);

const variantClasses = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
  danger: "bg-destructive text-destructive-foreground hover:bg-destructive-hover",
};

const disabledClasses = "cursor-not-allowed opacity-50";

export function getButtonClasses(
  variant: "primary" | "secondary" | "danger",
  isLoading: boolean,
  disabled: boolean
): string {
  return clsx(defaultClasses, variantClasses[variant], (disabled || isLoading) && disabledClasses);
}
