/* eslint-disable react/prop-types */
import React from 'react'

import { cn } from '@/lib/utils'

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'px-4 py-3 align-middle [&:has([role=checkbox])]:pr-0',
      className,
    )}
    {...props}
  />
))

TableCell.displayName = 'TableCell'
