import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { cancelAppointment } from '@/api'
import { QUERY_KEYS } from '@/constants'

export function useAppointment() {
  const queryClient = useQueryClient()

  async function handleCancelAppointment(id: string) {
    const response = await cancelAppointment(id)
    if (!response.success) return toast.error(response.errorMessage)
    toast.success('Agendamento cancelado com sucesso!')
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEYS.appointmentList],
      exact: false,
    })
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEYS.doctorSlots],
      exact: false,
    })
  }

  return {
    handleCancelAppointment,
  }
}
