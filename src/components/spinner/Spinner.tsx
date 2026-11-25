import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const spinnerVariants = cva(
  "spinner-ring inline-block shrink-0 rounded-full animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite]",
  {
    variants: {
      variant: {
        primary: "text-grid-primary",
        current: "text-current",
        muted: "text-grid-muted-fg",
      },
      size: {
        sm: "size-8 [--spinner-thickness:4px]",
        lg: "size-16 [--spinner-thickness:8px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

export type SpinnerProps = ComponentProps<"span"> &
  VariantProps<typeof spinnerVariants>;

export function Spinner({
  className,
  variant,
  size,
  "aria-label": ariaLabel = "Loading",
  ...props
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={ariaLabel}
      className={cn(spinnerVariants({ variant, size }), className)}
      {...props}
    />
  );
}
