import * as React from 'react'

import { cn } from '@/lib/utils'

export const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('font-maven text-xl font-medium leading-none', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'
