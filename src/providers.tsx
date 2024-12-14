import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router'

import { queryClient } from './lib/react-query'
import { router } from './routes'

export function Providers() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
