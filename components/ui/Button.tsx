import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  asChild?: boolean;
  href?: string;
}

const variantStyles = {
  primary:
    "text-white font-medium hover:opacity-90 active:scale-[0.97] shadow-lg shadow-[#8B5CF6]/20",
  secondary:
    "bg-white/[0.06] text-white border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.15] active:scale-[0.97]",
  ghost:
    "bg-transparent text-zinc-400 hover:text-white hover:bg-white/[0.05] active:scale-[0.97]",
  outline:
    "bg-transparent text-zinc-300 border border-white/[0.12] hover:border-[#8B5CF6]/50 hover:text-white active:scale-[0.97]",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm gap-1.5 rounded-lg",
  md: "px-5 py-2.5 text-sm gap-2 rounded-lg",
  lg: "px-6 py-3 text-base gap-2.5 rounded-xl",
};

/**
 * Multi-variant button primitive. Supports an optional Lucide icon and loading state.
 */
export default function Button({
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium",
        "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      style={
        variant === "primary"
          ? { backgroundColor: "var(--color-accent)" }
          : undefined
      }
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
          aria-hidden="true"
        />
      ) : (
        Icon && iconPosition === "left" && <Icon size={16} strokeWidth={2} />
      )}
      {children}
      {!isLoading && Icon && iconPosition === "right" && (
        <Icon size={16} strokeWidth={2} />
      )}
    </button>
  );
}
