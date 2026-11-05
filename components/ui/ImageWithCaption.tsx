import React from "react";
import Image from "next/image";

export type AspectRatio = "16/9" | "4/3" | "3/2" | "1/1" | "21/9";

export interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  aspectRatio?: AspectRatio;
  priority?: boolean;
  className?: string;
}

const aspectRatioStyles: Record<AspectRatio, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-[1/1]",
  "21/9": "aspect-[21/9]",
};

export const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({
  src,
  alt,
  caption,
  credit,
  aspectRatio = "16/9",
  priority = false,
  className = "",
}) => {
  return (
    <figure
      className={`group bg-cpa-white border border-cpa-surface-border rounded-sm overflow-hidden ${className}`}
    >
      <div className={`relative w-full overflow-hidden bg-cpa-navy ${aspectRatioStyles[aspectRatio]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-102"
        />
      </div>

      {(caption || credit) && (
        <figcaption className="p-3 sm:p-4 bg-cpa-white border-t border-cpa-surface-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xs">
          {caption && (
            <span className="text-cpa-text-primary font-medium leading-snug">
              {caption}
            </span>
          )}
          {credit && (
            <span className="text-[11px] font-mono text-cpa-text-muted shrink-0 uppercase tracking-wider">
              {credit}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageWithCaption;
