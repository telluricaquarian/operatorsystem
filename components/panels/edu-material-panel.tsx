'use client'

export function EduMaterialPanel() {
  return (
    <div className="flex h-full flex-col p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Edu. Material</h1>
        <p className="text-muted-foreground">Educational resources and materials</p>
      </div>

      <div className="max-w-3xl">
        <div className="px-5 py-3" style={{ backgroundColor: '#F5F501' }}>
          <p className="text-sm font-semibold text-black md:text-base" style={{ color: '#000000' }}>
            &ldquo;Simplicity is the ultimate sophistication.&rdquo;
          </p>
        </div>
        <p className="mt-2.5 text-xs text-muted-foreground">
          — Leonardo di ser Piero da Vinci
        </p>
      </div>
    </div>
  )
}
