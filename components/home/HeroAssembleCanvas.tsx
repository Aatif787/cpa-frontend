"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface HeroAssembleCanvasProps {
  currentImageSrc: string;
  nextImageSrc: string | null;
  allImageSrcs: string[];
  isTransitioning: boolean;
  direction: "next" | "prev";
  onTransitionComplete: () => void;
  className?: string;
}

export const HeroAssembleCanvas: React.FC<HeroAssembleCanvasProps> = ({
  currentImageSrc,
  nextImageSrc,
  allImageSrcs,
  isTransitioning,
  direction,
  onTransitionComplete,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageCache = useRef<Record<string, HTMLImageElement>>({});
  const animFrameRef = useRef<number | null>(null);

  // Synchronously store images in cache and preload immediately on mount
  useEffect(() => {
    allImageSrcs.forEach((src) => {
      if (!src) return;
      if (!imageCache.current[src]) {
        const img = new window.Image();
        imageCache.current[src] = img;
        img.src = src;
      }
    });
  }, [allImageSrcs]);

  // Helper: Draw image with exact CSS object-fit: cover, object-position: center
  const drawImageCover = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    w: number,
    h: number
  ) => {
    if (!img || !img.naturalWidth || !img.naturalHeight) {
      ctx.drawImage(img, 0, 0, w, h);
      return;
    }
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = w / h;
    let renderW = w;
    let renderH = h;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderH = w / imgRatio;
      offsetY = (h - renderH) / 2;
    } else {
      renderW = h * imgRatio;
      offsetX = (w - renderW) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  };

  // Helper: Create an 8-Part Mechanical Gear Tooth Sector Path
  const createGearSectorPath = (
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    k: number,
    totalSectors: number,
    maxRadius: number
  ) => {
    const step = (2 * Math.PI) / totalSectors;
    const theta0 = k * step;
    const theta1 = (k + 1) * step;

    const rHub = 35; // Central axle radius
    const rInner = maxRadius * 0.93; // Dedendum (inner tooth root)
    const rOuter = maxRadius; // Addendum (outer tooth tip)

    // Cog tooth angles along outer perimeter
    const tCogStart = theta0 + step * 0.22;
    const tCogRise = theta0 + step * 0.28;
    const tCogFall = theta0 + step * 0.72;
    const tCogEnd = theta0 + step * 0.78;

    ctx.beginPath();

    // 1. Start at central hub on leading edge
    ctx.moveTo(cx + Math.cos(theta0) * rHub, cy + Math.sin(theta0) * rHub);

    // 2. Radial side: from hub outward, with interlocking gear cog notch at 50% radius
    const rNotch1 = maxRadius * 0.45;
    const rNotch2 = maxRadius * 0.55;
    const perpAngle0 = theta0 + Math.PI / 2;
    const notchDepth = 14;

    ctx.lineTo(cx + Math.cos(theta0) * rNotch1, cy + Math.sin(theta0) * rNotch1);
    ctx.lineTo(
      cx + Math.cos(theta0) * rNotch1 + Math.cos(perpAngle0) * notchDepth,
      cy + Math.sin(theta0) * rNotch1 + Math.sin(perpAngle0) * notchDepth
    );
    ctx.lineTo(
      cx + Math.cos(theta0) * rNotch2 + Math.cos(perpAngle0) * notchDepth,
      cy + Math.sin(theta0) * rNotch2 + Math.sin(perpAngle0) * notchDepth
    );
    ctx.lineTo(cx + Math.cos(theta0) * rNotch2, cy + Math.sin(theta0) * rNotch2);
    ctx.lineTo(cx + Math.cos(theta0) * rInner, cy + Math.sin(theta0) * rInner);

    // 3. Outer Gear Tooth Cog Profile
    ctx.arc(cx, cy, rInner, theta0, tCogStart);
    ctx.lineTo(cx + Math.cos(tCogRise) * rOuter, cy + Math.sin(tCogRise) * rOuter);
    ctx.arc(cx, cy, rOuter, tCogRise, tCogFall);
    ctx.lineTo(cx + Math.cos(tCogEnd) * rInner, cy + Math.sin(tCogEnd) * rInner);
    ctx.arc(cx, cy, rInner, tCogEnd, theta1);

    // 4. Return radial edge back to hub, with matching interlocking notch
    ctx.lineTo(cx + Math.cos(theta1) * rNotch2, cy + Math.sin(theta1) * rNotch2);
    const perpAngle1 = theta1 + Math.PI / 2;
    ctx.lineTo(
      cx + Math.cos(theta1) * rNotch2 + Math.cos(perpAngle1) * notchDepth,
      cy + Math.sin(theta1) * rNotch2 + Math.sin(perpAngle1) * notchDepth
    );
    ctx.lineTo(
      cx + Math.cos(theta1) * rNotch1 + Math.cos(perpAngle1) * notchDepth,
      cy + Math.sin(theta1) * rNotch1 + Math.sin(perpAngle1) * notchDepth
    );
    ctx.lineTo(cx + Math.cos(theta1) * rNotch1, cy + Math.sin(theta1) * rNotch1);
    ctx.lineTo(cx + Math.cos(theta1) * rHub, cy + Math.sin(theta1) * rHub);

    // Inner hub arc back to start
    ctx.arc(cx, cy, rHub, theta1, theta0, true);
    ctx.closePath();
  };

  // 8-Part Gear 3D Flip & Assemble Animation
  const startTransition = useCallback(
    (fromSrc: string, toSrc: string, dir: "next" | "prev") => {
      const canvas = canvasRef.current;
      if (!canvas) {
        onTransitionComplete();
        return;
      }

      const ctx = canvas.getContext("2d", { alpha: true });
      if (!ctx) {
        onTransitionComplete();
        return;
      }

      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = rect.width;
      const height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      let fromImg = imageCache.current[fromSrc];
      let toImg = imageCache.current[toSrc];

      if (!toImg) {
        toImg = new window.Image();
        toImg.src = toSrc;
        imageCache.current[toSrc] = toImg;
      }

      // Safe image readiness check with timeout
      if (!toImg.complete) {
        const safeTimer = setTimeout(() => {
          onTransitionComplete();
        }, 300);
        toImg.onload = () => {
          clearTimeout(safeTimer);
          startTransition(fromSrc, toSrc, dir);
        };
        return;
      }

      if (!fromImg) {
        fromImg = new window.Image();
        fromImg.src = fromSrc;
        imageCache.current[fromSrc] = fromImg;
      }

      const NUM_PARTS = 8;
      const cx = width / 2;
      const cy = height / 2;
      const maxRadius = Math.hypot(width, height) / 2 * 1.18;

      const sectorIndices: number[] = [];
      for (let i = 0; i < NUM_PARTS; i++) {
        sectorIndices.push(dir === "next" ? i : NUM_PARTS - 1 - i);
      }

      const partDuration = 550; // 550ms per individual 3D flip & come
      const staggerDelay = 95; // 95ms between gear teeth
      const totalDuration = (NUM_PARTS - 1) * staggerDelay + partDuration + 100; // ~1.3s total

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        ctx.clearRect(0, 0, width, height);

        // 1. Draw base of previous slide with exact cover alignment
        if (fromImg && fromImg.complete) {
          ctx.save();
          drawImageCover(ctx, fromImg, width, height);
          ctx.restore();
        }

        // 2. Render the 8 Gear Parts: one by one flipping in 3D and coming into position
        const step = (2 * Math.PI) / NUM_PARTS;

        sectorIndices.forEach((k, orderIndex) => {
          const partStart = orderIndex * staggerDelay;
          const localElapsed = elapsed - partStart;

          if (localElapsed <= 0) {
            return;
          }

          const localProgress = Math.min(1, localElapsed / partDuration);
          const ease = 1 - Math.pow(1 - localProgress, 3);

          const theta0 = k * step;
          const thetaMid = theta0 + step / 2;

          // 3D Flip angle: 180deg down to 0deg (around radial spine)
          const flipAngle = (1 - ease) * Math.PI;
          const scaleFlip = Math.max(0.02, Math.abs(Math.cos(flipAngle)));
          const scaleFly = 0.65 + 0.35 * ease;

          ctx.save();

          // 3D Transform around gear part's radial spine without distorting image
          ctx.translate(cx, cy);
          ctx.rotate(thetaMid);
          ctx.scale(scaleFly, scaleFlip * scaleFly);
          ctx.rotate(-thetaMid);
          ctx.translate(-cx, -cy);

          // Soft mechanical drop shadow while in flight
          if (localProgress < 0.92) {
            ctx.shadowColor = "rgba(0, 0, 0, 0.55)";
            ctx.shadowBlur = 12;
          }

          // Clip to the exact 8-part gear tooth sector
          createGearSectorPath(ctx, cx, cy, k, NUM_PARTS, maxRadius);
          ctx.save();
          ctx.clip();

          // Draw the new image inside this gear tooth with exact cover alignment
          drawImageCover(ctx, toImg, width, height);

          ctx.restore();

          // Highlight the gear tooth edge with glowing gold outline while flipping
          if (localProgress < 0.95) {
            createGearSectorPath(ctx, cx, cy, k, NUM_PARTS, maxRadius);
            ctx.strokeStyle = `rgba(223, 191, 98, ${(1 - localProgress) * 0.9})`;
            ctx.lineWidth = 2.5;
            ctx.stroke();
          }

          ctx.restore();
        });

        // 3. Center Industrial Axle Gear Hub (spins and drives the 8-part gear assembly)
        if (elapsed < totalDuration - 40) {
          const fadeProgress = Math.min(1, Math.max(0, (elapsed - (totalDuration - 260)) / 260));
          const hubFade = Math.max(0, 1 - fadeProgress);

          ctx.save();
          ctx.globalAlpha = hubFade;
          ctx.translate(cx, cy);

          // Rotate gear with direction and assembly progress
          const spinAngle = (elapsed / 600) * (dir === "next" ? 1 : -1);
          ctx.rotate(spinAngle);

          // Outer gear teeth cogs (12 teeth around the central hub)
          const TEETH = 12;
          const rRoot = 36;
          const rTip = 46;
          const tStep = (2 * Math.PI) / TEETH;

          ctx.beginPath();
          for (let t = 0; t < TEETH; t++) {
            const a0 = t * tStep;
            const a1 = a0 + tStep * 0.28;
            const a2 = a0 + tStep * 0.72;
            const a3 = (t + 1) * tStep;

            if (t === 0) {
              ctx.moveTo(Math.cos(a0) * rRoot, Math.sin(a0) * rRoot);
            } else {
              ctx.lineTo(Math.cos(a0) * rRoot, Math.sin(a0) * rRoot);
            }
            ctx.lineTo(Math.cos(a1) * rTip, Math.sin(a1) * rTip);
            ctx.lineTo(Math.cos(a2) * rTip, Math.sin(a2) * rTip);
            ctx.lineTo(Math.cos(a3) * rRoot, Math.sin(a3) * rRoot);
          }
          ctx.closePath();

          // Industrial navy metallic gear fill
          ctx.fillStyle = "rgba(4, 37, 82, 0.94)";
          ctx.fill();
          ctx.strokeStyle = "#DFBF62";
          ctx.lineWidth = 2.5;
          ctx.stroke();

          // Beveled Pitch Circle Ring
          ctx.beginPath();
          ctx.arc(0, 0, 32, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(2, 18, 38, 0.95)";
          ctx.fill();
          ctx.strokeStyle = "rgba(223, 191, 98, 0.65)";
          ctx.lineWidth = 2;
          ctx.stroke();

          // 8 Mechanical Rivet Bolts around pitch circle
          for (let b = 0; b < 8; b++) {
            const bAngle = b * ((2 * Math.PI) / 8);
            const bx = Math.cos(bAngle) * 24;
            const by = Math.sin(bAngle) * 24;
            ctx.beginPath();
            ctx.arc(bx, by, 3.5, 0, Math.PI * 2);
            ctx.fillStyle = "#DFBF62";
            ctx.fill();
            ctx.strokeStyle = "#021226";
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          // Center Axle Spindle Core
          ctx.beginPath();
          ctx.arc(0, 0, 12, 0, Math.PI * 2);
          ctx.fillStyle = "#042552";
          ctx.fill();
          ctx.strokeStyle = "#DFBF62";
          ctx.lineWidth = 2;
          ctx.stroke();

          // Center gold axle pin
          ctx.beginPath();
          ctx.arc(0, 0, 5, 0, Math.PI * 2);
          ctx.fillStyle = "#DFBF62";
          ctx.fill();

          ctx.restore();
        }

        if (elapsed < totalDuration) {
          animFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Render the 100% finished image fully on canvas to ensure zero gap/blink during handoff
          ctx.save();
          ctx.clearRect(0, 0, width, height);
          drawImageCover(ctx, toImg, width, height);
          ctx.restore();

          // Tell HeroSection to switch the active slide in DOM instantly underneath
          onTransitionComplete();
        }
      };

      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      animFrameRef.current = requestAnimationFrame(animate);
    },
    [onTransitionComplete]
  );

  // Trigger gear assemble transition
  useEffect(() => {
    if (isTransitioning && nextImageSrc) {
      startTransition(currentImageSrc, nextImageSrc, direction);
    } else if (!isTransitioning) {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      // Give React 1 frame to ensure DOM image is painted before clearing canvas
      const clearTimer = setTimeout(() => {
        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext("2d");
          if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }, 70);

      return () => clearTimeout(clearTimer);
    }

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isTransitioning, currentImageSrc, nextImageSrc, direction, startTransition]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-30 w-full h-full ${className}`}
      style={{
        opacity: isTransitioning ? 1 : 0,
      }}
    />
  );
};

export default HeroAssembleCanvas;
