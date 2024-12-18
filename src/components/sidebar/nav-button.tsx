import type { LucideIcon } from 'lucide-react'
import { Link, type LinkProps, useLocation } from 'react-router'

interface NavButtonProps {
  to: LinkProps['to']
  title: string
  icon: LucideIcon
}

export function NavButton({ to, title, icon: Icon }: Readonly<NavButtonProps>) {
  const { pathname } = useLocation()

  return (
    <Link
      to={to}
      data-active={pathname === to}
      className='group flex items-center gap-3 rounded-l-lg px-3 py-2 font-maven transition-colors data-[active=true]:bg-white hover:bg-primary hover:text-primary-foreground data-[active=true]:hover:bg-primary'
    >
      <Icon className='size-5' />
      <span className='group-data-[active=true]:font-medium'>{title}</span>
    </Link>
  )
}
