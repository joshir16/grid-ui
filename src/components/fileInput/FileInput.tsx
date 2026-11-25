import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const fileInputVariants = cva(
  "w-full cursor-pointer rounded-md text-grid-muted-fg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grid-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:text-grid-danger file:mr-3 file:cursor-pointer file:rounded-md file:font-medium file:transition-colors",
  {
    variants: {
      variant: {
        primary:
          "file:border-0 file:bg-grid-primary file:text-grid-primary-fg hover:file:bg-grid-primary-hover",
        outline:
          "file:border file:border-grid-border file:bg-grid-surface file:text-grid-fg hover:file:bg-grid-border/30",
      },
      size: {
        sm: "text-xs file:px-2.5 file:py-1",
        md: "text-sm file:px-3.5 file:py-2",
        lg: "text-base file:px-4 file:py-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type FileInputProps = Omit<ComponentProps<"input">, "size" | "type"> &
  VariantProps<typeof fileInputVariants>;

export function FileInput({
  className,
  variant,
  size,
  ...props
}: FileInputProps) {
  return (
    <input
      type="file"
      className={cn(fileInputVariants({ variant, size }), className)}
      {...props}
    />
  );
}
