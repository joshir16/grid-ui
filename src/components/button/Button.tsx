import type { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-grid font-medium transition cursor-pointer active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grid-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-grid-primary text-grid-primary-fg hover:bg-grid-primary-hover",
        secondary: "bg-grid-muted text-grid-fg hover:bg-grid-muted-hover",
        outline:
          "border-[2px] border-grid-border bg-grid-surface text-grid-surface-fg hover:bg-grid-muted",
        ghost: "bg-transparent text-grid-fg hover:bg-grid-muted",
        danger: "bg-grid-danger text-grid-danger-fg hover:bg-grid-danger-hover",
        link: "bg-transparent text-grid-primary hover:text-grid-primary-hover underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        md: "h-10 px-4 text-sm [&_svg:not([class*='size-'])]:size-4",
        lg: "h-11 px-6 text-base [&_svg:not([class*='size-'])]:size-5",

        "icon-sm": "size-8 p-0 [&_svg:not([class*='size-'])]:size-4",
        icon: "size-10 p-0 [&_svg:not([class*='size-'])]:size-5",
        "icon-lg": "size-11 p-0 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ref,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
