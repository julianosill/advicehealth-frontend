import React from 'react'

import { cn } from '@/lib/utils'

export const TableRoot = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className='relative w-full overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-500/50'>
    <table
      ref={ref}
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
    />
  </div>
))

TableRoot.displayName = 'Table'
