import { Link, NavLink } from 'react-router'

import logo from '@/assets/advicehealth.png'
import { ROUTES } from '@/routes'

export function Sidebar() {
  return (
    <div className='flex flex-col gap-8'>
      <Link to={ROUTES.dashboard}>
        <img src={logo} alt='AdviceHealth' className='w-40' />
      </Link>

      <nav className='flex flex-col gap-2'>
        <NavLink to={ROUTES.dashboard}>Início</NavLink>
        <NavLink to={ROUTES.schedule}>Agendar</NavLink>
        <NavLink to={ROUTES.appointments}>Consultas</NavLink>
      </nav>
    </div>
  )
}
