import * as React from "react"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { px } from "../utils"

const buttonVariants = cva(
  "inline-flex relative font-bold cursor-pointer items-center justify-center gap-2 whitespace-nowrap ease-out transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-black hover:shadow-[0_0_30px_rgba(168,220,255,0.5)] hover:scale-[1.02] active:scale-[0.98] border-0",
        outline: "border-2 border-[var(--accent)] text-[var(--accent)] bg-transparent hover:bg-[var(--accent)]/10 hover:shadow-[0_0_20px_rgba(168,220,255,0.3)] active:scale-[0.98]",
        secondary: "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 active:scale-[0.98]",
        ghost: "border-0 text-[var(--muted)] hover:text-foreground hover:bg-white/5 active:scale-[0.98]",
      },
      size: {
        default: "h-12 px-6 text-base rounded-xl",
        sm: "h-10 px-5 text-sm rounded-lg",
        lg: "h-14 px-8 text-lg rounded-xl",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Button, buttonVariants }
