import { Outlet } from 'react-router'

import { Sidebar } from '@/components/sidebar'

export function AppLayout() {
  return (
    <div className='flex min-h-svh gap-16 p-6'>
      <Sidebar />
      <Outlet />
    </div>
  )
}
