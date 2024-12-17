import type React from 'react'

import { cn } from '@/lib/utils'

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export function SectionTitle({
  children,
  className,
}: Readonly<SectionTitleProps>) {
  return (
    <h2
      className={cn(
        'pb-4 font-maven text-2xl font-medium text-accent-foreground',
        className,
      )}
    >
      {children}
    </h2>
  )
}
