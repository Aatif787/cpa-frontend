import React from "react";

export type ProjectStatus = "Ongoing" | "Completed" | "Landmark" | "Under Bidding";

export interface ProjectStatusBadgeProps {
  status: ProjectStatus;
  size?: "sm" | "md";
  className?: string;
}

export const ProjectStatusBadge: React.FC<ProjectStatusBadgeProps> = ({
  status,
  size = "md",
  className = "",
}) => {
  const sizeClasses = size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs";

  switch (status) {
    case "Ongoing":
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider font-bold rounded-sm bg-orange-50 text-[#9A3412] border border-orange-300/80 ${sizeClasses} ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C2410C] animate-pulse" />
          <span>Ongoing</span>
        </span>
      );

    case "Completed":
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider font-semibold rounded-sm bg-cpa-surface-subtle text-cpa-navy border border-cpa-surface-border ${sizeClasses} ${className}`}
        >
          <svg
            className="w-3 h-3 text-cpa-gold"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Executed</span>
        </span>
      );

    case "Landmark":
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider font-semibold rounded-sm bg-[#FAF4E6] text-[#785E23] border border-cpa-gold/50 ${sizeClasses} ${className}`}
        >
          <span className="text-cpa-gold text-xs leading-none">&#9733;</span>
          <span>Landmark</span>
        </span>
      );

    case "Under Bidding":
    default:
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-mono uppercase tracking-wider font-semibold rounded-sm bg-gray-100 text-gray-700 border border-gray-200 ${sizeClasses} ${className}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          <span>Tender Desk</span>
        </span>
      );
  }
};

export default ProjectStatusBadge;
