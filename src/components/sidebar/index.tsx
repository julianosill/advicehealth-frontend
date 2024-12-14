import { CalendarCheck, CalendarDays, House } from 'lucide-react'
import { Link } from 'react-router'

import logo from '@/assets/advicehealth.png'
import { ROUTES } from '@/routes'

import { NavButton } from './nav-button'

export function Sidebar() {
  return (
    <div className='flex w-36 flex-col gap-8 py-8'>
      <Link to={ROUTES.dashboard}>
        <img src={logo} alt='AdviceHealth' className='w-32' />
      </Link>

      <nav className='flex flex-col gap-2'>
        <NavButton to={ROUTES.dashboard} title='Início' icon={House} />
        <NavButton to={ROUTES.schedule} title='Agendar' icon={CalendarCheck} />
        <NavButton
          to={ROUTES.appointments}
          title='Consultas'
          icon={CalendarDays}
        />
      </nav>
    </div>
  )
}
