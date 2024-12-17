import type React from 'react'

import { cn } from '@/lib/utils'

import { Skeleton } from '../ui/skeleton'

interface StatisticCardItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  label: string
  value?: string | number
  rate?: number
  rateGrowth?: boolean
  invertRateColor?: boolean
}

export function StatisticItem({
  label,
  value,
  rate,
  invertRateColor,
}: StatisticCardItemProps) {
  const showRate = rate || rate === 0

  const rateColorOptions = {
    green: 'text-green-600 bg-green-400/10 border-green-400/50',
    red: 'text-red-600 bg-red-400/10 border-red-400/50',
  }

  const rateColor = (number: number) => {
    if (number > 0)
      return invertRateColor ? rateColorOptions.red : rateColorOptions.green
    if (number < 0)
      return invertRateColor ? rateColorOptions.green : rateColorOptions.red
    return 'text-muted-foreground'
  }

  const rateNumber = (number: number) => {
    if (number > 0) return `+${number}%`
    if (number < 0) return `${number}%`
    return `${number}%`
  }

  return (
    <>
      <div className='py-1.5 text-sm text-muted-foreground'>{label}</div>

      {value ? (
        <div className='ml-auto self-center font-medium text-foreground'>
          {value}
        </div>
      ) : (
        <Skeleton className='h-5 self-center' />
      )}

      {showRate && (
        <div
          className={cn(
            'h-fit self-center rounded-md border border-muted-foreground/30 bg-muted/50 px-1 py-0.5 text-center text-xs text-foreground',
            rateColor(rate),
          )}
        >
          {rateNumber(rate)}
        </div>
      )}
    </>
  )
}
