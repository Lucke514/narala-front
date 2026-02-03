import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp" | "white";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  icon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-pink-400 to-pink-500 text-white shadow-[0_4px_20px_rgba(236,72,153,0.4)] hover:from-pink-500 hover:to-rose-600",
  secondary:
    "bg-white text-pink-600 border-2 border-pink-300 hover:bg-pink-50",
  outline:
    "bg-transparent text-pink-600 border-2 border-pink-400 hover:bg-pink-50",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a]",
  white:
    "bg-white text-pink-600 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-gray-50",
};

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  icon,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm transition-colors px-7 py-3.5 [&>svg]:shrink-0";

  const classes = `${base} ${variantStyles[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
      {icon}
    </button>
  );
}
