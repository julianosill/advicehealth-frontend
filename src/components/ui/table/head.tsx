/* eslint-disable react/prop-types */
import React from 'react'

import { cn } from '@/lib/utils'

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-10 px-4 text-left align-middle font-maven text-base font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      className,
    )}
    {...props}
  />
))

TableHead.displayName = 'TableHead'
