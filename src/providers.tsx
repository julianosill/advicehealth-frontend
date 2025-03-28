import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

import { queryClient } from '@/lib/react-query'
import { StoreProvider } from '@/store/store-provider'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: Readonly<ProvidersProps>) {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Toaster position='top-right' richColors closeButton />
        {children}
      </StoreProvider>
    </QueryClientProvider>
  )
}
