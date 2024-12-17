import { api } from '@/lib/axios'

type CancelAppointmentResponse = {
  success: boolean
  errorCode?: string
  errorMessage?: string
}

export async function cancelAppointment(
  id: Readonly<string>,
): Promise<CancelAppointmentResponse> {
  const response = await api.patch(`/appointments/${id}`, {
    status: 'canceled',
  })

  if (response.status !== 200) {
    return {
      success: false,
      errorCode: String(response.status),
      errorMessage:
        'Não foi possível cancelar o agendamento, tente novamente. Caso o erro persista, entre em contato com o suporte.',
    }
  }

  return { success: true }
}
