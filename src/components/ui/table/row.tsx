import React from 'react'

import { cn } from '@/lib/utils'

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50',
      className,
    )}
    {...props}
  />
))

TableRow.displayName = 'TableRow'
