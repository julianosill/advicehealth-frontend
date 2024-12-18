import { Link, type LinkProps } from 'react-router'

import { cn } from '@/lib/utils'

export function NavLink({ className, ...props }: Readonly<LinkProps>) {
  return (
    <Link
      className={cn(
        'font-maven font-medium text-accent-foreground underline underline-offset-2 hover:text-primary',
        className,
      )}
      {...props}
    />
  )
}
