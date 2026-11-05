import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20 lg:py-28 bg-cpa-offwhite">
      <Container className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cpa-gold/15 border border-cpa-gold/40 text-cpa-navy text-xs font-mono uppercase tracking-widest rounded-sm mb-6">
          <span>Error 404</span>
          <span>&bull;</span>
          <span>Document Not Located</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cpa-navy tracking-tight mb-4 font-sans">
          Route Not Found
        </h1>

        <p className="max-w-xl mx-auto text-cpa-text-secondary text-base sm:text-lg mb-8 leading-relaxed">
          The requested infrastructure record, project file, or administrative
          route is either being realigned in our modernized system or does not exist.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md">
            Return to Homepage
          </Button>
          <Button href="/projects" variant="outline" size="md">
            Explore Projects Hub
          </Button>
          <Button href="/contact-us" variant="ghost" size="md">
            Contact Support Desk
          </Button>
        </div>

        <div className="mt-14 pt-8 border-t border-cpa-surface-border max-w-md mx-auto text-xs font-mono text-cpa-text-muted">
          <p>C P ARORA &bull; INFRASTRUCTURE ENGINEERING NETWORK</p>
        </div>
      </Container>
    </div>
  );
}
