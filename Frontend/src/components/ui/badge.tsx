import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/src/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border px-1 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/80 text-primary-foreground ",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive rounded-sm text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        warning: "bg-warning border-[#F2E3AA] text-warning-foreground  m-auto ",
        success: "bg-success border-[#B7D1B0] text-success-foreground  m-auto",
        danger: "bg-danger rounded-sm text-success-foreground"
      },
      size: {
        default: "rounded-[2px] text-center px-1.5 py-[3px] font-medium text-[10px] uppercase leading-none border-[1px]",
        sm: "h-6 rounded-sm py-1 px-2 text-center text-xs ",
        lg: "h-[13px] rounded-sm px-2 py-[2px] font-semibold text-[10px] uppercase",
        icon: "h-10 w-10",
      },

    },
    defaultVariants: {
      variant: "default",
      size: "default"
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
