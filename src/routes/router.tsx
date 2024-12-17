import { createBrowserRouter } from 'react-router'

import { AppLayout } from '@/layouts/app'
import {
  AppointmentsPage,
  DashboardPage,
  EditSchedulePage,
  NewSchedulePage,
  SchedulePage,
} from '@/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <DashboardPage /> },
      {
        path: '/agenda',
        children: [
          { path: '', element: <SchedulePage /> },
          { path: 'registrar', element: <NewSchedulePage /> },
          { path: 'editar/:id', element: <EditSchedulePage /> },
        ],
      },
      { path: '/agendamentos', element: <AppointmentsPage /> },
    ],
  },
])
