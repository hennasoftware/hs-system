import { forwardRef, useId } from "react";
import type { InputFieldProps } from "./InputField.types";
import { getInputFieldClasses } from "./InputField.styles";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { label, showLabel = true, helperText, errorMessage, leftAddon, rightAddon, id: idProp, disabled = false, ...rest },
    ref
  ) => {
    const generatedId = useId();
    const id = idProp ?? generatedId;
    const hasError = !!errorMessage;

    return (
      <div>
        <label className={`mb-1 block text-sm font-bold text-gray-700 ${showLabel ? "" : "sr-only"}`} htmlFor={id}>
          {label}
        </label>

        <div className="relative flex items-center">
          {leftAddon && <span className="pointer-events-none absolute left-3 text-gray-400">{leftAddon}</span>}

          <input
            ref={ref}
            id={id}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${id}-error` : helperText ? `${id}-helper` : undefined}
            className={getInputFieldClasses(hasError, disabled, !!leftAddon, !!rightAddon)}
            {...rest}
          />

          {rightAddon && <span className="pointer-events-none absolute right-3 text-gray-400">{rightAddon}</span>}
        </div>

        {hasError && (
          <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-red-500">
            {errorMessage}
          </p>
        )}

        {!hasError && helperText && (
          <p id={`${id}-helper`} className="mt-1 text-xs text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";
