'use client'

import { useRef, useState, useCallback } from 'react'
import { cn } from '@/lib/utils'

// ─── Constants ────────────────────────────────────────────────────────────────

const BASE_SIZE   = 44           // icon box size (px)
const MAX_SCALE   = 1.55         // peak magnification when cursor is directly over icon
const RANGE_PX    = 100          // cursor range that triggers magnification (px)
const SPRING      = 'cubic-bezier(0.34,1.56,0.64,1)'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface DockItemDef {
  src: string
  alt: string
  label?: string
  onClick?: () => void
}

export interface DockGroupDef {
  items: DockItemDef[]
}

// ─── Hook: mouse-distance magnification ───────────────────────────────────────

function useDockMagnify(totalItems: number) {
  const dockRef   = useRef<HTMLDivElement>(null)
  const [scales, setScales] = useState<number[]>(() => Array(totalItems).fill(1))

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const dock = dockRef.current
    if (!dock) return

    const icons = dock.querySelectorAll<HTMLElement>('[data-dock-icon]')
    const mx    = e.clientX

    setScales(Array.from(icons).map((el) => {
      const r    = el.getBoundingClientRect()
      const dist = Math.abs(mx - (r.left + r.width / 2))
      if (dist > RANGE_PX) return 1
      const t    = 1 - dist / RANGE_PX      // 0 → 1 as cursor approaches center
      return 1 + (MAX_SCALE - 1) * t * t    // quadratic falloff
    }))
  }, [])

  const onMouseLeave = useCallback(() => {
    setScales(Array(totalItems).fill(1))
  }, [totalItems])

  return { dockRef, scales, onMouseMove, onMouseLeave }
}

// ─── Dock component ───────────────────────────────────────────────────────────

export function OperatorDock({ groups }: { groups: DockGroupDef[] }) {
  // Flat item count for the hook
  const total       = groups.reduce((s, g) => s + g.items.length, 0)
  const { dockRef, scales, onMouseMove, onMouseLeave } = useDockMagnify(total)

  // Pre-compute global indices for each group/item so render is pure
  let cursor = 0
  const indexed = groups.map((group) =>
    group.items.map((item) => ({ item, idx: cursor++ }))
  )

  // Extra top padding so scaled icons don't get clipped by the container
  const overflow = Math.ceil(BASE_SIZE * (MAX_SCALE - 1))

  return (
    <div
      ref={dockRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      // Desktop-only, fixed bottom-right
      className={cn(
        'fixed bottom-8 right-8 z-50',
        'hidden lg:flex items-end gap-1.5',
        // Glass panel
        'px-3 pb-3 rounded-2xl',
        'border border-white/[0.08]',
        'bg-black/80 backdrop-blur-2xl',
        'shadow-[0_8px_40px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.04),0_0_20px_rgba(255,140,0,0.06)]',
      )}
      style={{ paddingTop: `${overflow + 12}px` }}
    >
      {indexed.map((group, gi) => (
        <div key={gi} className="flex items-end gap-1.5">
          {/* Divider between groups */}
          {gi > 0 && (
            <div className="self-center h-7 w-px mx-0.5 rounded-full bg-white/10" />
          )}

          {group.map(({ item, idx }) => {
            const scale = scales[idx] ?? 1
            return (
              <button
                key={item.src}
                data-dock-icon
                onClick={item.onClick}
                title={item.label ?? item.alt}
                aria-label={item.label ?? item.alt}
                className={cn(
                  'relative block rounded-xl overflow-hidden',
                  'bg-white/[0.06] border border-white/[0.08]',
                  'hover:border-orange-500/30',
                  'focus:outline-none focus-visible:ring-1 focus-visible:ring-orange-500/50',
                  'transition-colors',
                  'select-none',
                )}
                style={{
                  width:           `${BASE_SIZE}px`,
                  height:          `${BASE_SIZE}px`,
                  flexShrink:      0,
                  transform:       `scale(${scale})`,
                  transformOrigin: 'bottom center',
                  transition:      `transform 0.14s ${SPRING}`,
                  willChange:      'transform',
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  draggable={false}
                  className="w-full h-full object-contain p-[9px]"
                />
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}
