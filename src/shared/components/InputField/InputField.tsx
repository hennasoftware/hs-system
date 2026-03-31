import { forwardRef, useId } from "react";
import type { InputFieldProps } from "./InputField.types";
import { getInputFieldClasses } from "./InputField.styles";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      showLabel = true,
      helperText,
      errorMessage,
      leftAddon,
      rightAddon,
      id: idProp,
      disabled = false,
      bgTransparent = false,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const id = idProp ?? generatedId;
    const hasError = !!errorMessage;

    return (
      <div>
        <label
          className={`text-foreground mb-1 block w-full text-left text-sm font-bold ${showLabel ? "" : "sr-only"}`}
          htmlFor={id}
        >
          {label}
        </label>

        <div className="relative flex items-center">
          {leftAddon && <span className="text-placeholder pointer-events-none absolute left-3">{leftAddon}</span>}

          <input
            ref={ref}
            id={id}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${id}-error` : helperText ? `${id}-helper` : undefined}
            className={getInputFieldClasses(hasError, disabled, bgTransparent, !!leftAddon, !!rightAddon)}
            {...rest}
          />

          {rightAddon && <span className="text-placeholder pointer-events-none absolute right-3">{rightAddon}</span>}
        </div>

        {hasError && (
          <p id={`${id}-error`} role="alert" className="mt-1 w-full pl-1 text-left text-xs text-red-500">
            {errorMessage}
          </p>
        )}

        {!hasError && helperText && (
          <p id={`${id}-helper`} className="text-muted-foreground mt-1 w-full pl-1 text-left text-xs">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";
