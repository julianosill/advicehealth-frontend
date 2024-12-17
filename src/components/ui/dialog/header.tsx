import * as React from 'react'

import { cn } from '@/lib/utils'

export const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <header
    className={cn(
      'flex flex-col space-y-1 text-center sm:text-left',
      className,
    )}
    {...props}
  />
)
DialogHeader.displayName = 'DialogHeader'
