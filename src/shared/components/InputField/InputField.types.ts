import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  showLabel?: boolean;
  helperText?: string;
  errorMessage?: string;
  bgTransparent?: boolean;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}
