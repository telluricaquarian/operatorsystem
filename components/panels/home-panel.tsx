'use client'

export function HomePanel() {
  return (
    <div className="flex h-full flex-col px-8 pt-16 md:px-14 md:pt-20">
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
        Polymathic Excellence , Absolute Competence & Surgical Accuracy
      </h1>
    </div>
  )
}
