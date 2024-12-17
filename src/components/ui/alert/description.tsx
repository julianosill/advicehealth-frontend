import React from 'react'

import { cn } from '@/lib/utils'

interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType
}

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ as: Component = 'p', className, ...props }, ref) => (
  <Component
    ref={ref}
    className={cn(
      'text-sm text-muted-foreground [&_p]:leading-relaxed',
      className,
    )}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'
