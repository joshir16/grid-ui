import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const checkboxVariants = cva(
  "peer shrink-0 cursor-pointer appearance-none border-[1.5px] border-grid-border bg-grid-surface shadow-xs transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grid-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-grid-border/30 aria-invalid:border-grid-danger aria-invalid:focus-visible:ring-grid-danger",
  {
    variants: {
      variant: {
        default:
          "hover:border-grid-primary/70 checked:border-grid-primary checked:bg-grid-primary checked:hover:border-grid-primary-hover checked:hover:bg-grid-primary-hover",
        soft: "hover:border-grid-primary/70 checked:border-grid-primary checked:bg-grid-primary/15 checked:hover:bg-grid-primary/20",
      },
      size: {
        sm: "size-4 rounded-[4px]",
        md: "size-5 rounded-[5px]",
        lg: "size-6 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

const checkmarkVariants = cva(
  "pointer-events-none absolute scale-50 opacity-0 transition-all duration-150 ease-out peer-checked:scale-100 peer-checked:opacity-100",
  {
    variants: {
      variant: {
        default: "text-grid-primary-fg",
        soft: "text-grid-primary",
      },
      size: {
        sm: "size-3",
        md: "size-3.5",
        lg: "size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export type CheckboxProps = Omit<ComponentProps<"input">, "size" | "type"> &
  VariantProps<typeof checkboxVariants>;

export function Checkbox({
  className,
  variant,
  size,
  ...props
}: CheckboxProps) {
  return (
    <span className="relative inline-flex shrink-0 items-center justify-center has-disabled:cursor-not-allowed has-disabled:opacity-50">
      <input
        type="checkbox"
        className={cn(checkboxVariants({ variant, size }), className)}
        {...props}
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        className={checkmarkVariants({ variant, size })}
      >
        <path
          d="M3.5 8.5L6.5 11.5L12.5 4.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
