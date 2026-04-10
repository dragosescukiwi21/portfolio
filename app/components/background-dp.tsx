"use client"
import { useCallback, useEffect, useMemo, useRef } from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}


export interface RetroGridProps {
  /** Additional CSS classes */
  className?: string
  /** Content to render on top of the grid */
  children?: React.ReactNode
  /** Rotation angle of the grid in degrees */
  angle?: number
  /** Grid cell size in pixels */
  cellSize?: number
  /** Grid opacity value between 0 and 1 */
  opacity?: number
  /** Grid line color */
  lineColor?: string
  /** Animation duration in seconds */
  duration?: number
}

export function RetroGrid({
  className,
  children,
  angle = 75,
  cellSize = 60,
  opacity = 0.5,
  lineColor = "var(--sh-string)", // You can also customize this via tailwind if preferred, for now using css custom property isn't bad but let's stick to what's there
  duration = 30,
}: RetroGridProps) {
  return (
    <div className={cn("fixed inset-0 overflow-hidden -z-10 pointer-events-none bg-neutral-50 dark:bg-neutral-950", className)}>
      {/* Keyframe animation */}
      <style>{`
        @keyframes retro-grid-scroll {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(${cellSize}px);
          }
        }
      `}</style>

      {/* Perspective container */}
      <div className="pointer-events-none absolute inset-0 [perspective:200px]" style={{ opacity }}>
        <div className="absolute inset-0" style={{ transform: `rotateX(${angle}deg)` }}>
          <div
            style={{
              backgroundImage: `linear-gradient(to right, ${lineColor} 1px, transparent 0), linear-gradient(to bottom, ${lineColor} 1px, transparent 0)`,
              backgroundSize: `${cellSize}px ${cellSize}px`,
              backgroundRepeat: "repeat",
              height: "300vh",
              width: "600vw",
              marginLeft: "-200%",
              transformOrigin: "100% 0 0",
              animation: `retro-grid-scroll ${(duration * cellSize) / 600}s linear infinite`,
            }}
          />
        </div>

        {/* Bottom edge fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 dark:from-neutral-950 to-transparent to-[15%]" />
      </div>

      {/* Top horizon fade (sky / background blend) */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-neutral-50/90 dark:from-neutral-950 dark:via-neutral-950/90 to-transparent to-[75%] pointer-events-none z-10" />

      {/* Content layer */}
      {children && <div className="relative z-10 h-full w-full">{children}</div>}
    </div>
  )
}

export default function RetroGridDemo() {
  return <RetroGrid />
}
