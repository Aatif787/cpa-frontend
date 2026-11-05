import React from "react";

export type SkeletonVariant = "text" | "card" | "project" | "statistic" | "circle";

export interface LoadingSkeletonProps {
  variant?: SkeletonVariant;
  count?: number;
  className?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  variant = "card",
  count = 1,
  className = "",
}) => {
  const shimmerBase = "animate-pulse bg-cpa-surface-subtle/80 rounded-sm";

  const renderSingle = (index: number) => {
    switch (variant) {
      case "text":
        return (
          <div key={index} className={`space-y-2.5 w-full ${className}`}>
            <div className={`h-4 w-3/4 ${shimmerBase}`} />
            <div className={`h-4 w-full ${shimmerBase}`} />
            <div className={`h-4 w-5/6 ${shimmerBase}`} />
          </div>
        );

      case "statistic":
        return (
          <div
            key={index}
            className={`p-6 sm:p-7 bg-cpa-white border border-cpa-surface-border rounded-sm space-y-4 ${className}`}
          >
            <div className={`h-10 w-24 ${shimmerBase}`} />
            <div className={`h-4 w-36 ${shimmerBase}`} />
            <div className={`h-3 w-48 ${shimmerBase}`} />
          </div>
        );

      case "circle":
        return (
          <div
            key={index}
            className={`w-12 h-12 rounded-full ${shimmerBase} ${className}`}
          />
        );

      case "project":
        return (
          <div
            key={index}
            className={`bg-cpa-white border border-cpa-surface-border rounded-sm overflow-hidden ${className}`}
          >
            <div className={`aspect-[16/10] w-full ${shimmerBase}`} />
            <div className="p-5 sm:p-6 space-y-3">
              <div className={`h-3 w-20 ${shimmerBase}`} />
              <div className={`h-5 w-4/5 ${shimmerBase}`} />
              <div className={`h-4 w-2/3 ${shimmerBase}`} />
              <div className="pt-4 border-t border-cpa-surface-border grid grid-cols-2 gap-3">
                <div className={`h-4 w-full ${shimmerBase}`} />
                <div className={`h-4 w-full ${shimmerBase}`} />
              </div>
            </div>
          </div>
        );

      case "card":
      default:
        return (
          <div
            key={index}
            className={`p-6 bg-cpa-white border border-cpa-surface-border rounded-sm space-y-3 ${className}`}
          >
            <div className={`h-3 w-16 ${shimmerBase}`} />
            <div className={`h-5 w-2/3 ${shimmerBase}`} />
            <div className={`h-3.5 w-full ${shimmerBase}`} />
            <div className={`h-3.5 w-4/5 ${shimmerBase}`} />
          </div>
        );
    }
  };

  return (
    <div
      role="status"
      aria-busy="true"
      aria-label="Loading content"
      className={count > 1 ? "space-y-4" : "w-full"}
    >
      {Array.from({ length: count }).map((_, i) => renderSingle(i))}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSkeleton;
