"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import type { CertificateItem } from "@/data/registrations";

export interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!certificate) return;

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [certificate, handleKeyDown]);

  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-cpa-navy/85 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-cpa-white border border-cpa-gold/40 rounded-sm shadow-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close certificate preview"
          className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-cpa-navy/80 hover:bg-cpa-navy text-cpa-white hover:text-cpa-gold focus:outline-none focus:ring-2 focus:ring-cpa-gold transition-colors text-lg"
        >
          &times;
        </button>

        {/* Certificate Document Display */}
        <div className="relative flex-1 bg-cpa-navy/95 min-h-[300px] sm:min-h-[440px] md:min-h-[600px] p-4 sm:p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-cpa-surface-border">
          <div className="relative w-full h-full max-h-[75vh] flex items-center justify-center">
            <Image
              src={certificate.imageUrl}
              alt={`${certificate.title} - ${certificate.issuingAuthority}`}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>

        {/* Certificate Metadata Sidebar */}
        <div className="w-full md:w-80 lg:w-96 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-cpa-offwhite max-h-[40vh] md:max-h-[92vh]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="gold">{certificate.statusBadge}</Badge>
              <span className="text-[10px] font-mono uppercase tracking-wider text-cpa-text-muted">
                {certificate.jurisdiction}
              </span>
            </div>

            <h2
              id="cert-modal-title"
              className="text-xl sm:text-2xl font-bold text-cpa-navy font-sans tracking-tight leading-tight mb-2"
            >
              {certificate.title}
            </h2>

            <p className="text-xs font-mono uppercase tracking-widest text-cpa-gold font-semibold mb-6">
              {certificate.issuingAuthority}
            </p>

            <div className="space-y-3 text-xs border-y border-cpa-surface-border py-4 mb-5">
              <div>
                <span className="block font-mono text-[10px] uppercase text-cpa-text-muted">
                  Official Entity Name
                </span>
                <span className="font-semibold text-cpa-navy">
                  {certificate.officialEntity}
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10px] uppercase text-cpa-text-muted">
                  Registration Class
                </span>
                <span className="font-semibold text-cpa-navy">
                  {certificate.classification}
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10px] uppercase text-cpa-text-muted">
                  Reference / Order Number
                </span>
                <span className="font-mono text-cpa-text-primary text-[11px] break-all">
                  {certificate.referenceNo}
                </span>
              </div>

              {certificate.tenderingLimit && (
                <div>
                  <span className="block font-mono text-[10px] uppercase text-cpa-text-muted">
                    Bidding Limit
                  </span>
                  <span className="font-mono font-semibold text-cpa-gold">
                    {certificate.tenderingLimit}
                  </span>
                </div>
              )}

              <div>
                <span className="block font-mono text-[10px] uppercase text-cpa-text-muted">
                  Validity Date
                </span>
                <span className="font-mono text-cpa-text-secondary">
                  {certificate.validity}
                </span>
              </div>
            </div>

            <p className="text-xs text-cpa-text-secondary leading-relaxed">
              {certificate.notes}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-cpa-surface-border text-center">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-cpa-navy text-cpa-white text-xs font-mono uppercase tracking-wider font-semibold rounded-sm hover:bg-cpa-navy/90 hover:text-cpa-gold transition-colors focus:outline-none focus:ring-2 focus:ring-cpa-gold"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
