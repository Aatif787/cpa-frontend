import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "navy" | "gold" | "surface" | "outline";
  className?: string;
}

const badgeVariants = {
  navy: "bg-cpa-navy text-cpa-white border border-cpa-navy-border",
  gold: "bg-cpa-gold/15 text-cpa-navy border border-cpa-gold/40 font-semibold",
  surface: "bg-cpa-surface-subtle text-cpa-text-secondary border border-cpa-surface-border",
  outline: "bg-transparent text-cpa-navy border border-cpa-navy/30",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "gold",
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded-sm ${badgeVariants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
