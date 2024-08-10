import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const indentVariants = cva("", {
  variants: {
    tab: {
      1: "ml-4",
      2: "ml-8",
      3: "ml-12",
      4: "ml-16",
      5: "ml-20",
      6: "ml-24",
      7: "ml-28",
      8: "ml-32",
    },
  },
  defaultVariants: {
    tab: 1,
  },
});

export interface IndentProps extends VariantProps<typeof indentVariants> {
  className?: string;
  multi?: boolean;
}

const Indent = ({ className, tab, multi, ...props }: IndentProps) => {
  const Comp = multi ? "div" : "p";

  return <Comp className={cn(indentVariants({ tab, className }))} {...props} />;
};

Indent.displayName = "Indent";

export { Indent, indentVariants };
