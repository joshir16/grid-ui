import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const textareaVariants = cva(
  "w-full resize-y rounded-md border bg-grid-surface text-grid-fg transition-colors placeholder:text-grid-muted-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grid-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-grid-danger aria-invalid:focus-visible:ring-grid-danger",
  {
    variants: {
      variant: {
        default: "border-grid-border",
      },
      size: {
        sm: "min-h-16 px-3 py-1.5 text-xs",
        md: "min-h-20 px-3.5 py-2 text-sm",
        lg: "min-h-24 px-4 py-2.5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export type TextareaProps = ComponentProps<"textarea"> &
  VariantProps<typeof textareaVariants>;

export function Textarea({
  className,
  variant,
  size,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(textareaVariants({ variant, size }), className)}
      {...props}
    />
  );
}
