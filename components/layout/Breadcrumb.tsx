import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  theme?: "light" | "dark";
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-2 text-[11px] font-mono tracking-wider uppercase ${className}`}
    >
      <ol
        className="flex items-center flex-wrap gap-2"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex items-center"
        >
          <Link
            href="/"
            itemProp="item"
            className={`transition-colors duration-150 ${
              isDark
                ? "text-cpa-text-inverse-muted hover:text-cpa-gold"
                : "text-cpa-text-secondary hover:text-cpa-gold"
            }`}
          >
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const position = index + 2;

          return (
            <li
              key={`${item.label}-${index}`}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-2"
            >
              <span
                className={`select-none ${isDark ? "text-cpa-navy-border" : "text-cpa-surface-border"}`}
                aria-hidden="true"
              >
                /
              </span>

              {isLast || !item.href ? (
                <span
                  itemProp="name"
                  className={`font-semibold ${
                    isDark ? "text-cpa-white" : "text-cpa-navy"
                  }`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  itemProp="item"
                  className={`transition-colors duration-150 ${
                    isDark
                      ? "text-cpa-text-inverse-muted hover:text-cpa-gold"
                      : "text-cpa-text-secondary hover:text-cpa-gold"
                  }`}
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={position.toString()} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
