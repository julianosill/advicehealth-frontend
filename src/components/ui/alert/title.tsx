import React from 'react'

import { cn } from '@/lib/utils'

export const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('pb-2 font-maven font-medium leading-none', className)}
    {...props}
  />
))
AlertTitle.displayName = 'AlertTitle'
