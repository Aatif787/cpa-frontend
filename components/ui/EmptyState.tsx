import React from "react";
import Button from "./Button";

export interface EmptyStateAction {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  action?: EmptyStateAction;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  className = "",
}) => {
  return (
    <div
      className={`p-10 sm:p-14 text-center bg-cpa-white border border-dashed border-cpa-surface-border rounded-sm flex flex-col items-center justify-center max-w-lg mx-auto ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-cpa-surface-subtle border border-cpa-surface-border flex items-center justify-center text-cpa-gold mb-4">
        {icon || (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
        )}
      </div>

      <h4 className="text-base sm:text-lg font-bold text-cpa-navy font-sans tracking-tight mb-2">
        {title}
      </h4>

      <p className="text-xs sm:text-sm text-cpa-text-secondary leading-relaxed mb-6 max-w-sm">
        {description}
      </p>

      {action && (
        <Button
          href={action.href}
          onClick={action.onClick}
          variant="outline"
          size="sm"
        >
          {action.label}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
