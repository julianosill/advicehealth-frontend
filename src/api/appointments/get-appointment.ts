import { api } from '@/lib/axios'
import type { AppointmentType } from '@/types'

type GetAppointmentResponse = {
  success: boolean
  appointment?: AppointmentType
  errorCode?: string
  errorMessage?: string
}

export async function getAppointment(
  id: Readonly<string>,
): Promise<GetAppointmentResponse> {
  const response = await api.get(`/appointments/${id}`)

  const appointment = response.data

  if (!appointment) {
    return {
      success: false,
      errorCode: String(response.status),
      errorMessage:
        'Não foi possível encontrar o agendamento, tente novamente. Caso o erro persista, entre em contato com o suporte.',
    }
  }

  return { success: true, appointment }
}
