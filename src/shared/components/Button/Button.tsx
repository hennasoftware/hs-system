import { forwardRef } from "react";
import type { ButtonProps } from "./Button.types";
import { getButtonClasses } from "./Button.styles";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary" as const,
      isLoading = false,
      loadingText = "Loading",
      disabled = false,
      type = "button" as const,
      leftAddon,
      rightAddon,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={getButtonClasses(variant, isLoading, disabled)}
        {...rest}
      >
        {isLoading ? (
          <>
            <span
              className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
              aria-hidden="true"
            />
            <span>{loadingText}...</span>
          </>
        ) : (
          <>
            {leftAddon && <span aria-hidden="true">{leftAddon}</span>}
            {children}
            {rightAddon && <span aria-hidden="true">{rightAddon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
