import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  eyebrowVariant?: "gold" | "navy" | "muted";
  theme?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  className?: string;
}

const eyebrowStyles = {
  gold: "text-cpa-gold border-cpa-gold/30 bg-cpa-gold/10",
  navy: "text-cpa-navy border-cpa-navy/30 bg-cpa-navy/5",
  muted: "text-cpa-text-secondary border-cpa-surface-border bg-cpa-surface-subtle",
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  eyebrowVariant = "gold",
  theme = "light",
  as: Component = "h2",
  className = "",
}) => {
  const isDark = theme === "dark";
  const alignmentClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl mb-8 sm:mb-12 ${alignmentClass} ${className}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest font-semibold mb-3 ${
            isDark
              ? "text-cpa-gold border border-white/25 bg-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)]"
              : eyebrowStyles[eyebrowVariant]
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cpa-gold animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}

      <Component
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-sans leading-tight ${
          isDark
            ? "text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-200 drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]"
            : "text-cpa-navy"
        }`}
      >
        {title}
      </Component>

      {description && (
        <p
          className={`mt-3 text-sm sm:text-base leading-relaxed font-normal ${
            isDark ? "text-slate-200" : "text-cpa-text-secondary"
          } ${align === "center" ? "max-w-2xl" : "max-w-3xl"}`}
        >
          {description}
        </p>
      )}

      {/* Subtle gold accent underline indicator for corporate poise */}
      {isDark ? (
        <div
          className={`flex items-center gap-2 mt-4 ${
            align === "center" ? "mx-auto justify-center" : ""
          }`}
        >
          <div className="w-10 h-0.5 bg-gradient-to-r from-cpa-gold to-transparent" />
          <div className="w-2 h-2 rotate-45 bg-cpa-gold shadow-[0_0_8px_#e5a93c]" />
          <div className="w-5 h-0.5 bg-gradient-to-l from-cpa-gold to-transparent" />
        </div>
      ) : (
        <div
          className={`h-0.5 w-12 bg-cpa-gold mt-4 rounded-full ${
            align === "center" ? "mx-auto" : ""
          }`}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default SectionHeading;
