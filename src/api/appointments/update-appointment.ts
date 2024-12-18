import { NON_NUMBER_REGEX } from '@/constants'
import type { ScheduleFormSchema } from '@/helpers'
import { api } from '@/lib/axios'
import type { UpdateAppointmentType } from '@/types'

interface UpdateAppointmentProps {
  id: string
  data: ScheduleFormSchema
}

type UpdateAppointmentResponse = {
  success: boolean
  errorCode?: string
  errorMessage?: string
}

export async function updateAppointment({
  id,
  data,
}: Readonly<UpdateAppointmentProps>): Promise<UpdateAppointmentResponse> {
  const { name, dateOfBirth, cpf, phone, email, address, price, observations } =
    data

  const updatedAppointment: UpdateAppointmentType = {
    name,
    dateOfBirth,
    cpf,
    phone,
    email,
    address,
    priceInCents: Number(price.replace(NON_NUMBER_REGEX, '')),
    observations,
    status: 'pending',
  }

  const response = await api.patch(`/appointments/${id}`, updatedAppointment)

  if (response.status !== 200) {
    return {
      success: false,
      errorCode: String(response.status),
      errorMessage:
        'Não foi possível atualizar a consulta, tente novamente. Caso o erro persista, entre em contato com o suporte.',
    }
  }

  return { success: true }
}
