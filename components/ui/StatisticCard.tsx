import React from "react";

export type StatisticCardVariant = "default" | "gold" | "navy";

export interface StatisticCardProps {
  value: string;
  label: string;
  caption?: string;
  icon?: React.ReactNode;
  trend?: string;
  variant?: StatisticCardVariant;
  className?: string;
}

const variantStyles: Record<StatisticCardVariant, {
  container: string;
  value: string;
  label: string;
  caption: string;
  border: string;
}> = {
  default: {
    container: "bg-cpa-white border border-cpa-surface-border text-cpa-text-primary",
    value: "text-cpa-navy font-sans",
    label: "text-cpa-navy font-semibold",
    caption: "text-cpa-text-secondary",
    border: "border-cpa-gold",
  },
  gold: {
    container: "bg-[#FAF7F0] border border-cpa-gold/40 text-cpa-text-primary",
    value: "text-cpa-navy font-sans",
    label: "text-cpa-navy font-semibold",
    caption: "text-cpa-text-secondary",
    border: "border-cpa-gold",
  },
  navy: {
    container: "bg-cpa-navy text-cpa-white border border-cpa-navy-border",
    value: "text-cpa-gold font-sans",
    label: "text-cpa-white font-semibold",
    caption: "text-cpa-text-inverse-muted",
    border: "border-cpa-gold",
  },
};

export const StatisticCard: React.FC<StatisticCardProps> = ({
  value,
  label,
  caption,
  icon,
  trend,
  variant = "default",
  className = "",
}) => {
  const styles = variantStyles[variant];

  return (
    <div
      className={`rounded-sm p-6 sm:p-7 relative overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card flex flex-col justify-between ${styles.container} ${className}`}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${styles.border}`} />

      <div>
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight tabular-nums ${styles.value}`}>
            {value}
          </div>
          {icon && (
            <div className="p-2 rounded bg-cpa-surface-subtle/50 text-cpa-gold shrink-0">
              {icon}
            </div>
          )}
        </div>

        <h4 className={`text-sm sm:text-base tracking-tight leading-snug font-sans ${styles.label}`}>
          {label}
        </h4>
      </div>

      {(caption || trend) && (
        <div className="mt-4 pt-3 border-t border-cpa-surface-border/60 flex items-center justify-between text-xs">
          {caption && <p className={styles.caption}>{caption}</p>}
          {trend && (
            <span className="font-mono text-[11px] text-[#9A3412] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded font-bold shrink-0">
              {trend}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default StatisticCard;
