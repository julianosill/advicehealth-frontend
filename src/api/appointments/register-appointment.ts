import { NON_NUMBER_REGEX } from '@/constants'
import type { ScheduleFormSchema } from '@/helpers'
import { api } from '@/lib/axios'
import type { DoctorWithIdAndName, NewAppointmentType } from '@/types'

interface RegisterAppointmentProps {
  data: ScheduleFormSchema
  doctor: DoctorWithIdAndName
  date: string
}

type RegisterAppointmentResponse = {
  success: boolean
  errorCode?: string
  errorMessage?: string
}

export async function registerAppointment({
  data,
  doctor,
  date,
}: RegisterAppointmentProps): Promise<RegisterAppointmentResponse> {
  const { name, dateOfBirth, cpf, phone, email, address, price, observations } =
    data

  const newAppointment: NewAppointmentType = {
    name,
    dateOfBirth,
    cpf,
    phone,
    email,
    address,
    priceInCents: Number(price.replace(NON_NUMBER_REGEX, '')),
    observations,
    datetime: date,
    status: 'pending',
    doctorId: doctor.id,
    doctorName: doctor.name,
  }

  const response = await api.post('/appointments', newAppointment)

  if (response.status !== 201) {
    return {
      success: false,
      errorCode: String(response.status),
      errorMessage:
        'Não foi possível agendar a consulta, tente novamente. Caso o erro persista, entre em contato com o suporte.',
    }
  }

  return { success: true }
}
