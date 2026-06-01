"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { revealTransition } from "@/animations/easings";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
} & Omit<HTMLMotionProps<"div">, "children">;

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ y: 44, opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once, margin: "-12% 0px" }}
      transition={{ ...revealTransition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
