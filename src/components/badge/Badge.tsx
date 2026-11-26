import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const badgeVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-1 rounded-full border font-medium whitespace-nowrap transition-colors",
  {
    variants: {
      variant: {
        neutral: "border-grid-border bg-grid-surface text-grid-muted-fg",
        primary: "border-grid-primary/25 bg-grid-primary/10 text-grid-primary",
        success: "border-grid-success/25 bg-grid-success/10 text-grid-success",
        warning: "border-grid-warning/25 bg-grid-warning/10 text-grid-warning",
        danger: "border-grid-danger/25 bg-grid-danger/10 text-grid-danger",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  },
);

export type BadgeProps = ComponentProps<"span"> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}
