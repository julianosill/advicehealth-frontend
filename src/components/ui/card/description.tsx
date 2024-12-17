import * as React from 'react'

import { cn } from '@/lib/utils'

interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType
}

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ as: Component = 'p', className, ...props }, ref) => (
  <Component
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'
