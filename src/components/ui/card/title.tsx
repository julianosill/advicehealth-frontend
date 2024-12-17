import * as React from 'react'

import { cn } from '@/lib/utils'

export const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('font-maven text-xl font-medium leading-none', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'
