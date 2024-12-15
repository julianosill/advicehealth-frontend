import { Outlet } from 'react-router'

import { Sidebar } from '@/components/sidebar'

export function AppLayout() {
  return (
    <div className='flex min-h-svh p-6'>
      <Sidebar />

      <main className='flex-1 rounded-2xl bg-white p-8'>
        <Outlet />
      </main>
    </div>
  )
}
