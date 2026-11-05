import React from "react";
import Container from "./Container";

export type SectionTheme = "offwhite" | "white" | "navy" | "navy-secondary" | "gold-subtle";
export type SectionPadding = "none" | "sm" | "md" | "lg";
export type ContainerWidth = "default" | "narrow" | "full";

export interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  theme?: SectionTheme;
  padding?: SectionPadding;
  containerWidth?: ContainerWidth;
  as?: React.ElementType;
}

const themeStyles: Record<SectionTheme, string> = {
  offwhite: "bg-cpa-offwhite text-cpa-text-primary",
  white: "bg-cpa-white text-cpa-text-primary",
  navy: "bg-cpa-navy text-cpa-white",
  "navy-secondary": "bg-cpa-navy-secondary text-cpa-white",
  "gold-subtle": "bg-[#FAF7F0] text-cpa-text-primary border-y border-cpa-gold/20",
};

const paddingStyles: Record<SectionPadding, string> = {
  none: "py-0",
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16 lg:py-20",
  lg: "py-16 sm:py-20 lg:py-24",
};

const containerWidthStyles: Record<ContainerWidth, string> = {
  default: "max-w-container",
  narrow: "max-w-4xl",
  full: "max-w-full px-4 sm:px-6 lg:px-8",
};

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  className = "",
  containerClassName = "",
  theme = "offwhite",
  padding = "md",
  containerWidth = "default",
  as: Component = "section",
}) => {
  return (
    <Component
      id={id}
      className={`w-full relative transition-colors ${themeStyles[theme]} ${paddingStyles[padding]} ${className}`}
    >
      {containerWidth === "full" ? (
        <div className={`w-full mx-auto ${containerWidthStyles[containerWidth]} ${containerClassName}`}>
          {children}
        </div>
      ) : (
        <Container className={`${containerWidthStyles[containerWidth]} ${containerClassName}`}>
          {children}
        </Container>
      )}
    </Component>
  );
};

export default SectionContainer;
