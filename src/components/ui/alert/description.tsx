import React from 'react'

import { cn } from '@/lib/utils'

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'text-sm text-muted-foreground [&_p]:leading-relaxed',
      className,
    )}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'
