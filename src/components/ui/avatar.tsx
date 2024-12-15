import { User2 } from 'lucide-react'
import type React from 'react'

import { cn } from '@/lib/utils'

export function Avatar({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex size-9 shrink-0 items-center justify-center rounded-full border bg-muted-foreground/10 text-muted-foreground',
        className,
      )}
      {...props}
    >
      <User2 className='size-5' />
    </div>
  )
}
