import * as React from 'react'

import { cn } from '@/lib/utils'

export const CardSubTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn('font-maven text-base font-medium leading-none', className)}
    {...props}
  />
))
CardSubTitle.displayName = 'CardSubTitle'
