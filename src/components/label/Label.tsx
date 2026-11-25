import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const labelVariants = cva(
  "inline-block font-medium leading-none text-grid-fg whitespace-nowrap select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type LabelProps = ComponentProps<"label"> &
  VariantProps<typeof labelVariants>;

export function Label({ className, size, ...props }: LabelProps) {
  return (
    <label className={cn(labelVariants({ size }), className)} {...props} />
  );
}
