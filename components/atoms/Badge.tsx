import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "default" | "light" | "white";
  className?: string;
}

const variantStyles = {
  default:
    "bg-white text-pink-500 shadow-[0_2px_12px_rgba(0,0,0,0.06)]",
  light: "bg-pink-50 text-pink-500",
  white: "bg-white/30 text-white",
};

export function Badge({
  children,
  icon,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${variantStyles[variant]} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
