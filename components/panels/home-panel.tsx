'use client'

import Image from 'next/image'
import { Wrench } from 'lucide-react'

export function HomePanel() {
  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 pt-14 pb-16 md:px-14 md:pt-18">

      {/* Badge */}
      <div className="mb-7 inline-flex items-center gap-2.5 self-start rounded-full border border-primary/30 bg-background px-4 py-2 glow-sm">
        <Wrench className="size-3.5 text-white shrink-0" />
        <span className="text-sm font-medium italic text-white tracking-wide">
          Tech Savvy Builders Guild - Upper Echelon
        </span>
      </div>

      {/* Heading */}
      <h1
        className="hero-gradient-text font-[family-name:var(--font-redaction)] lg:whitespace-nowrap"
        style={{
          fontSize: 'clamp(2rem, 4.5vw, 55px)',
          lineHeight: '120.3%',
          letterSpacing: '-0.07em',
          fontStyle: 'italic',
          maxWidth: '1305px',
        }}
      >
        Polymathic Excellence, Absolute Competence
      </h1>

      {/* Supporting sentence */}
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
        Stay ahead of the curve , always strive, continuously improve, persistently study & observe and keep building.
      </p>

      {/* Featured image */}
      <div className="mt-10">
        <Image
          src="/aarec.png"
          alt="aarec"
          width={680}
          height={460}
          className="rounded-2xl border border-primary/20 glow-md"
          style={{ width: '100%', maxWidth: '680px', height: 'auto' }}
          priority
        />
      </div>

    </div>
  )
}
