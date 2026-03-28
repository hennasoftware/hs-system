import clsx from "clsx";
import type { CardProps } from "./Card.types";

import {
  sizeStyles,
  valueSize,
  backgroundStyles,
  variantStyles,
  iconStyles,
  growthPositive,
  growthNegative,
} from "./Card.styles";

export function Card({
  variant = "default",
  title,
  value,
  growth,
  icon,
  size = "md",
  bg = "card",
  className,
}: CardProps) {
  const isNegative = growth?.trim().startsWith("-");

  return (
    <div
      className={clsx(
        "group relative rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-md",
        sizeStyles[size],
        backgroundStyles[bg],
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm font-medium">{title}</p>

          <h2 className={clsx("font-semibold tracking-tight", valueSize[size])}>{value}</h2>

          {growth && (
            <span
              className={clsx(
                "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
                isNegative ? growthNegative : growthPositive
              )}
            >
              {growth}
            </span>
          )}
        </div>

        {icon && (
          <div
            className={clsx(
              "group-hover:text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors",
              iconStyles[variant]
            )}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
