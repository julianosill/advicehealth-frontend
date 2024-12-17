import React from 'react'

import { cn } from '@/lib/utils'

interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType
}

export const PageDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ as: Component = 'p', className, ...props }, ref) => (
  <Component
    ref={ref}
    className={cn('text-muted-foreground', className)}
    {...props}
  />
))
PageDescription.displayName = 'PageDescription'
