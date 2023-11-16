import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/src/lib/utils"
{/*hover:bg-secondary/80*/}
const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground text-center leading-5 font-medium",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-primary hover:text-primary-foreground text-center font-medium",
        outlineblue:
           "border border-neutral-100 bg-[#3f81fe]/10 text-tertiary border-tertiary/50 hover:bg-white px-2 py-1",
        outlineDestructive:
           "border border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground hover:border-destructive px-2 py-1",
        secondary:
          "bg-secondary text-secondary-foreground ",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary text-[#325393] underline-offset-4 hover:underline p-[3px] w-[6px] h-[6px]",
      },
      size: {
        default: "h-9 leading-5 text-center pt-2 px-3 pb-2 font-medium",
        // m:
        sm: "h-6 py-1 px-2 text-center text-xs",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
      shape: {
        regular: "rounded-md",
        circle: "w-12 h-12 rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "regular",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, shape, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
