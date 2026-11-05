import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectStatusBadge, { ProjectStatus } from "./ProjectStatusBadge";

export interface ProjectCardStat {
  label: string;
  value: string;
}

export interface ProjectCardProps {
  title: string;
  category: string;
  location?: string;
  client?: string;
  status: ProjectStatus;
  imageUrl: string;
  imageAlt?: string;
  href?: string;
  stats?: ProjectCardStat[];
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  location,
  client,
  status,
  imageUrl,
  imageAlt,
  href,
  stats,
  className = "",
}) => {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (href) {
      return (
        <Link
          href={href}
          className={`group block bg-cpa-white border border-cpa-surface-border rounded-sm overflow-hidden hover:border-cpa-gold/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpa-gold ${className}`}
        >
          {children}
        </Link>
      );
    }
    return (
      <article
        className={`group bg-cpa-white border border-cpa-surface-border rounded-sm overflow-hidden hover:border-cpa-gold/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
      >
        {children}
      </article>
    );
  };

  return (
    <CardWrapper>
      {/* Visual media banner — 100% clean photo, zero text on image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-cpa-navy">
        <Image
          src={imageUrl}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          {/* Category & Status Badges */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="inline-block px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase bg-cpa-surface-subtle text-cpa-gold-dark border border-cpa-gold/30 rounded-sm font-semibold">
              {category}
            </span>
            <ProjectStatusBadge status={status} size="sm" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-cpa-navy font-sans tracking-tight group-hover:text-cpa-gold-dark transition-colors line-clamp-2">
            {title}
          </h3>

          <div className="mt-3 space-y-1 text-xs text-cpa-text-secondary">
            {client && (
              <div className="flex items-center gap-1.5">
                <span className="font-mono uppercase tracking-wider text-cpa-text-muted shrink-0">
                  Client:
                </span>
                <span className="font-medium text-cpa-navy truncate">{client}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center gap-1.5">
                <span className="font-mono uppercase tracking-wider text-cpa-text-muted shrink-0">
                  Location:
                </span>
                <span className="font-medium text-cpa-text-secondary truncate">{location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Stats Grid if provided */}
        {stats && stats.length > 0 && (
          <div className="mt-5 pt-4 border-t border-cpa-surface-border grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <div key={i}>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-cpa-text-muted">
                  {stat.label}
                </span>
                <span className="block text-xs sm:text-sm font-bold text-cpa-navy font-mono">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* View Details CTA */}
        {href && (
          <div className="mt-4 pt-3 flex items-center justify-between text-xs font-mono text-cpa-gold font-semibold uppercase tracking-wider group-hover:text-cpa-navy transition-colors">
            <span>Project Details</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;
