import type React from 'react'

import { cn } from '@/lib/utils'

interface PageTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export function PageTitle({ children, className }: Readonly<PageTitleProps>) {
  return (
    <h1
      className={cn(
        'font-maven text-3xl font-medium text-accent-foreground',
        className,
      )}
    >
      {children}
    </h1>
  )
}
