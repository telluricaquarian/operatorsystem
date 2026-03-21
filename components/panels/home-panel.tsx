'use client'

import Image from 'next/image'
import { Wrench } from 'lucide-react'

export function HomePanel() {
  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 pt-14 pb-16 md:px-14 md:pt-18">

      {/* Badge */}
      <div className="mb-7 inline-flex items-center gap-2.5 self-start rounded-full border border-primary/30 bg-background px-4 py-2 glow-sm">
        <Wrench className="size-3.5 text-white shrink-0" />
        <span className="text-sm font-medium not-italic text-muted-foreground tracking-wide" style={{ fontStyle: 'normal' }}>
          <span className="hidden sm:inline">Tech Savvy Builders Guild - Upper Echelon</span>
          <span className="sm:hidden">Tech-savvy Builders Guild</span>
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
        Polymathic Excellence , Absolute Competence & Atelier Quality
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

      {/* Image marquee — desktop only */}
      <div className="hidden lg:block mt-16 -mx-8 md:-mx-14">
        <div className="relative overflow-hidden py-2">
          {/* Left edge fade */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-36"
            style={{ background: 'linear-gradient(to right, var(--background) 0%, transparent 100%)' }}
          />
          {/* Right edge fade */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-36"
            style={{ background: 'linear-gradient(to left, var(--background) 0%, transparent 100%)' }}
          />
          {/* Scrolling track — 6 items (3 × 2) for seamless -50% loop */}
          <div className="animate-marquee flex w-max">
            {[
              { src: '/design.png',     alt: 'Design showcase',      dupe: false },
              { src: '/internalos.png', alt: 'Internal OS showcase', dupe: false },
              { src: '/aarec.png',      alt: 'Aarec showcase',       dupe: false },
              { src: '/design.png',     alt: '',                     dupe: true  },
              { src: '/internalos.png', alt: '',                     dupe: true  },
              { src: '/aarec.png',      alt: '',                     dupe: true  },
            ].map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                aria-hidden={img.dupe}
                className="rounded-xl object-cover shrink-0"
                style={{ width: '340px', height: '220px', objectFit: 'cover', marginRight: '20px' }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quote block */}
      <div className="mt-12 max-w-3xl">
        <div
          className="px-5 py-3"
          style={{ backgroundColor: '#F5F501' }}
        >
          <p
            className="text-sm font-semibold text-black md:text-base"
            style={{ color: '#000000' }}
          >
            &ldquo;You will get rich by giving society what it wants but does not yet know how to get. At scale.&rdquo;
          </p>
        </div>
        <p className="mt-2.5 text-xs text-muted-foreground">
          — Naval Ravikant
        </p>
      </div>

    </div>
  )
}
