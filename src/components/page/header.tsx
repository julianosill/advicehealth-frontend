import type React from 'react'

import { cn } from '@/lib/utils'

interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function PageHeader({ children, className }: Readonly<PageHeaderProps>) {
  return <header className={cn('pb-12', className)}>{children}</header>
}
