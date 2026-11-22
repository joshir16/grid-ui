import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const inputVariants = cva(
  "w-full rounded-md border bg-grid-surface text-grid-fg transition-colors placeholder:text-grid-muted-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grid-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-grid-danger aria-invalid:focus-visible:ring-grid-danger",
  {
    variants: {
      variant: {
        default: "border-grid-border",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-3.5 text-sm",
        lg: "h-11 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export type InputProps = Omit<ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants>;

export function Input({
  className,
  variant,
  size,
  type = "text",
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      className={cn(inputVariants({ variant, size }), className)}
      {...props}
    />
  );
}
