import clsx from "clsx";

const defaultClasses = clsx(
  "w-full appearance-none rounded border py-2 leading-tight shadow",
  "transition-all focus:outline-none"
);

const stateClasses = {
  default: clsx(
    "border-input text-foreground placeholder:text-foreground/30",
    "focus:border-primary focus:ring focus:ring-ring"
  ),
  error: clsx(
    "border-red-400 text-red-900 placeholder:text-red-300",
    "focus:border-red-500 focus:ring focus:ring-red-200"
  ),
};

const disabledClasses = "cursor-not-allowed opacity-50";

export function getInputFieldClasses(
  hasError: boolean,
  disabled: boolean,
  hasLeftAddon: boolean,
  hasRightAddon: boolean
): string {
  return clsx(
    defaultClasses,
    !hasError && stateClasses["default"],
    hasError && stateClasses["error"],
    hasLeftAddon ? "pl-10" : "pl-3",
    hasRightAddon ? "pr-10" : "pr-3",
    disabled && disabledClasses
  );
}
