import React from "react";
import Image from "next/image";
import Badge from "./Badge";

export interface CertificateCardProps {
  title: string;
  issuingAuthority: string;
  classification: string;
  imageUrl: string;
  validity?: string;
  referenceNo?: string;
  onPreview?: () => void;
  className?: string;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  issuingAuthority,
  classification,
  imageUrl,
  validity,
  referenceNo,
  onPreview,
  className = "",
}) => {
  return (
    <div
      className={`group bg-cpa-white border border-cpa-surface-border rounded-sm overflow-hidden hover:border-cpa-gold/60 transition-all duration-300 hover:shadow-card flex flex-col justify-between ${className}`}
    >
      {/* Certificate Thumbnail — 100% clean, zero text overlaid */}
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-cpa-surface-subtle p-3 flex items-center justify-center border-b border-cpa-surface-border">
        <div className="relative w-full h-full shadow-inner bg-white border border-gray-200 overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${title} - ${issuingAuthority}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Details */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-cpa-gold font-semibold">
              {issuingAuthority}
            </span>
            <Badge variant="gold">Official Certificate</Badge>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-cpa-navy font-sans tracking-tight mb-3">
            {title}
          </h3>

          <div className="space-y-1.5 text-xs text-cpa-text-secondary">
            <div className="flex items-center justify-between py-1 border-b border-cpa-surface-border/60">
              <span className="font-mono uppercase text-cpa-text-muted text-[10px]">Classification</span>
              <span className="font-semibold text-cpa-navy">{classification}</span>
            </div>
            {referenceNo && (
              <div className="flex items-center justify-between py-1 border-b border-cpa-surface-border/60">
                <span className="font-mono uppercase text-cpa-text-muted text-[10px]">Registration No.</span>
                <span className="font-mono text-cpa-text-secondary">{referenceNo}</span>
              </div>
            )}
            {validity && (
              <div className="flex items-center justify-between py-1">
                <span className="font-mono uppercase text-cpa-text-muted text-[10px]">Validity</span>
                <span className="font-mono text-cpa-text-secondary">{validity}</span>
              </div>
            )}
          </div>
        </div>

        {onPreview && (
          <div className="mt-5 pt-3 border-t border-cpa-surface-border">
            <button
              type="button"
              onClick={onPreview}
              className="w-full text-center text-xs font-mono uppercase tracking-wider text-cpa-gold hover:text-cpa-navy font-semibold transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpa-gold py-1"
            >
              <span>View Full Certificate</span>
              <span>&rarr;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;
