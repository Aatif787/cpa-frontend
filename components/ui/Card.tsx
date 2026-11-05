import React from "react";

export type CardVariant = "default" | "elevated" | "navy" | "bordered" | "gold-outline";
export type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  hoverLift?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const cardStyles: Record<CardVariant, string> = {
  default: "bg-cpa-white border border-cpa-surface-border text-cpa-text-primary",
  elevated:
    "bg-cpa-white border border-cpa-surface-border shadow-card text-cpa-text-primary",
  navy: "bg-cpa-navy text-cpa-white border border-cpa-navy-border",
  bordered: "bg-transparent border border-cpa-surface-border text-cpa-text-primary",
  "gold-outline":
    "bg-cpa-white border-2 border-cpa-gold/40 hover:border-cpa-gold text-cpa-text-primary shadow-sm",
};

const paddingStyles: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-4 sm:p-5",
  md: "p-6 sm:p-7",
  lg: "p-8 sm:p-10",
};

export const Card: React.FC<CardProps> = ({
  variant = "default",
  padding = "md",
  hoverLift = true,
  header,
  footer,
  children,
  className = "",
  as: Component = "div",
  ...props
}) => {
  const liftClass = hoverLift
    ? "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-dropdown"
    : "transition-colors duration-150";

  return (
    <Component
      className={`rounded-sm flex flex-col justify-between ${cardStyles[variant]} ${liftClass} ${className}`}
      {...props}
    >
      <div>
        {header && (
          <div className="border-b border-cpa-surface-border/80 pb-4 mb-4">
            {header}
          </div>
        )}
        <div className={paddingStyles[padding]}>{children}</div>
      </div>
      {footer && (
        <div className="border-t border-cpa-surface-border/80 pt-4 mt-4 px-6 pb-6 text-xs font-mono text-cpa-text-muted">
          {footer}
        </div>
      )}
    </Component>
  );
};

export default Card;
