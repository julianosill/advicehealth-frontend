import { Outlet } from 'react-router'

import { Sidebar } from '@/components/sidebar'

export function AppLayout() {
  return (
    <div className='flex min-h-svh p-6'>
      <Sidebar />
      <div className='flex-1 rounded-2xl bg-card p-6'>
        <Outlet />
      </div>
    </div>
  )
}
