import type { ReactNode } from "react";

export type CardVariant = "default" | "ghost";
export type CardSize = "sm" | "md" | "lg";
export type CardBackground = "card" | "background";

export type CardProps = {
  variant?: CardVariant;
  title: string;
  value: string | number;
  growth?: string;
  icon?: ReactNode;
  size?: CardSize;
  bg?: CardBackground;
  className?: string;
};
