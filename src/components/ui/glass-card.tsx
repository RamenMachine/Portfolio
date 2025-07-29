import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "subtle"
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-glass border border-glass-border backdrop-blur-md shadow-glass",
      elevated: "bg-glass border border-glass-border backdrop-blur-lg shadow-glass hover:shadow-glow transition-all duration-300",
      subtle: "bg-glass/50 border border-glass-border/50 backdrop-blur-sm"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg p-6",
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }