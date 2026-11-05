import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "outline-light" | "ghost" | "gold";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isExternal?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-cpa-navy text-cpa-white hover:bg-cpa-navy-secondary active:bg-cpa-navy-darkest border border-cpa-navy shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpa-gold focus-visible:ring-offset-2",
  secondary:
    "bg-cpa-navy-secondary text-cpa-white hover:bg-cpa-navy active:bg-cpa-navy-darkest border border-cpa-navy-border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpa-gold focus-visible:ring-offset-2",
  outline:
    "bg-transparent text-cpa-navy hover:bg-cpa-navy hover:text-cpa-white active:bg-cpa-navy-secondary border border-cpa-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpa-gold focus-visible:ring-offset-2",
  "outline-light":
    "bg-transparent text-cpa-white hover:bg-cpa-white/10 active:bg-cpa-white/20 border border-cpa-white/40 hover:border-cpa-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpa-gold focus-visible:ring-offset-2",
  ghost:
    "bg-transparent text-cpa-navy hover:bg-cpa-surface-subtle active:bg-cpa-surface-border border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpa-gold",
  gold:
    "bg-cpa-gold text-cpa-navy hover:bg-cpa-gold-hover active:bg-cpa-gold-dark border border-cpa-gold font-semibold shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpa-navy focus-visible:ring-offset-2",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-xs tracking-wider gap-1.5 min-h-[32px]",
  md: "px-5 py-2.5 text-xs sm:text-sm tracking-wide gap-2 min-h-[42px]",
  lg: "px-7 py-3.5 text-sm sm:text-base tracking-wide font-medium gap-2.5 min-h-[50px]",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium font-sans uppercase transition-all duration-200 rounded-sm disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none text-center";
  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {rightIcon}
        </span>
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
          aria-disabled={disabled || isLoading}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={combinedClasses}
        aria-disabled={disabled || isLoading}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
