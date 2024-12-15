import React from 'react'

import { cn } from '@/lib/utils'

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card p-4 text-card-foreground',
      className,
    )}
    {...props}
  />
))

Card.displayName = 'Card'
