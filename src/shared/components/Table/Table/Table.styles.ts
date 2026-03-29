import clsx from "clsx";

export const rowPaddingClass = "px-4 py-3";

export const thBaseClass = "sticky top-0 whitespace-nowrap";
export const thBgClass = "bg-muted";
export const thTextClass = "text-muted-foreground text-sm font-medium tracking-wider uppercase";
export const thColClass = "z-10";
export const thActionColClass = "z-20 right-0 text-left";

export const tdBaseClass = "overflow-hidden text-ellipsis whitespace-nowrap min-w-26";
export const tdBgClass = "bg-card group-hover:bg-card-hover";
export const tdTextClass = "text-muted-foreground text-sm";
export const tdActionColClass = "sticky right-0 w-28 bg-card-hover";

export const sortButtonClass = "text-muted-foreground hover:text-foreground hover:cursor-pointer";

export function cellAlignClass(align?: "left" | "center" | "right") {
  if (align === "center") return "text-center";
  if (align === "right") return "text-right";
  return "text-left";
}

export function getTableClasses(...parts: Array<string | false | null | undefined>) {
  return clsx(...parts);
}
