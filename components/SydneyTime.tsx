'use client'

import { useEffect, useState } from 'react'

export function SydneyTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-AU', {
        timeZone: 'Australia/Sydney',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
      setTime(formatter.format(new Date()))
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hidden sm:flex flex-col items-center leading-none">
      <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/50">
        Sydney, Australia
      </span>
      <span className="text-xs font-medium text-muted-foreground tabular-nums">
        {time}
      </span>
    </div>
  )
}
