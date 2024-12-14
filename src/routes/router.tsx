import { createBrowserRouter } from 'react-router'

import { AppLayout } from '@/layouts/app'
import { Appointments, Dashboard, Schedule } from '@/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/agendar', element: <Schedule /> },
      { path: '/agendamentos', element: <Appointments /> },
    ],
  },
])
