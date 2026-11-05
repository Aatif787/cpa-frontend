import React from "react";
import Container from "../layout/Container";
import Breadcrumb, { BreadcrumbItem } from "../layout/Breadcrumb";
import Badge from "./Badge";

export interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  badge?: string;
  theme?: "navy" | "offwhite";
  actions?: React.ReactNode;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  eyebrow,
  description,
  breadcrumbs,
  badge,
  theme = "offwhite",
  actions,
  className = "",
}) => {
  const isDark = theme === "navy";

  return (
    <div
      className={`relative border-b overflow-hidden ${
        isDark
          ? "bg-[#031326] text-white border-white/10"
          : "bg-cpa-offwhite text-cpa-text-primary border-cpa-surface-border"
      } py-10 sm:py-14 lg:py-16 ${className}`}
    >
      {/* Dynamic Ambient Glow & Grid (when isDark) */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(229,169,60,0.12)_0%,rgba(3,19,38,0.4)_50%,transparent_75%)]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Top specular reflection line matching navbar */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
          {/* Bottom liquid edge line */}
          <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cpa-gold/30 to-transparent" />
        </div>
      )}

      <Container className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumb
              items={breadcrumbs}
              theme={isDark ? "dark" : "light"}
              className={isDark ? "!text-slate-300" : ""}
            />
          </div>
        )}

        {/* 1000% Liquid Glass Content Pod Chassis */}
        <div
          className={
            isDark
              ? "relative rounded-3xl bg-gradient-to-b from-white/[0.09] via-white/[0.04] to-white/[0.015] backdrop-blur-3xl border border-white/20 p-6 sm:p-8 lg:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.5),inset_0_1.5px_0_0_rgba(255,255,255,0.45),inset_0_-1px_0_0_rgba(255,255,255,0.08)] overflow-hidden"
              : ""
          }
        >
          {isDark && (
            <>
              {/* Top specular rim light line */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none" />
              {/* Ambient radial glow inside the glass pod */}
              <div className="absolute -top-12 left-1/4 w-96 h-28 bg-gradient-to-b from-white/20 via-cpa-gold/10 to-transparent rounded-full blur-2xl pointer-events-none" />
            </>
          )}

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 relative z-10">
            <div className="max-w-3xl">
              {(eyebrow || badge) && (
                <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
                  {badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/25 text-cpa-gold text-[11px] font-mono uppercase tracking-widest font-semibold shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-cpa-gold animate-pulse" />
                      {badge}
                    </span>
                  )}
                  {eyebrow && (
                    <span
                      className={`text-xs font-mono uppercase tracking-widest ${
                        isDark ? "text-slate-300" : "text-cpa-text-secondary"
                      }`}
                    >
                      {eyebrow}
                    </span>
                  )}
                </div>
              )}

              <h1
                className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans leading-tight ${
                  isDark
                    ? "text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-200 drop-shadow-[0_2px_12px_rgba(255,255,255,0.3)]"
                    : "text-cpa-navy"
                }`}
              >
                {title}
              </h1>

              {/* Liquid Divider Bar when isDark */}
              {isDark && (
                <div className="flex items-center gap-2.5 my-3.5">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-cpa-gold to-transparent" />
                  <div className="w-2 h-2 rotate-45 bg-cpa-gold shadow-[0_0_8px_#e5a93c]" />
                  <div className="w-6 h-0.5 bg-gradient-to-l from-cpa-gold to-transparent" />
                </div>
              )}

              {description && (
                <p
                  className={`mt-3 text-base sm:text-lg leading-relaxed max-w-2xl font-light ${
                    isDark ? "text-slate-200" : "text-cpa-text-secondary"
                  }`}
                >
                  {description}
                </p>
              )}
            </div>

            {actions && (
              <div className="flex flex-wrap items-center gap-3 shrink-0 pt-2 lg:pt-0">
                {actions}
              </div>
            )}
          </div>

          {isDark && (
            <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          )}
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;
