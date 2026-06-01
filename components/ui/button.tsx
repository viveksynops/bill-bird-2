import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-[0.68rem] font-medium uppercase tracking-[0.22em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#111111] px-6 py-3 text-[#F8F6F2] hover:bg-[#8B7355]",
        outline:
          "border border-[#111111]/20 px-6 py-3 text-[#111111] hover:border-[#111111] hover:bg-[#111111] hover:text-[#F8F6F2]",
        ghost: "px-0 py-2 text-[#111111] hover:text-[#8B7355]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={cn(buttonVariants({ variant, className }))} {...props} />
  );
}
