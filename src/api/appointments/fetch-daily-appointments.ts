import { formatDate, wait } from '@/helpers'
import { api } from '@/lib/axios'
import type { AppointmentType } from '@/types'

interface FetchDailyAppointmentsQuery {
  datetime: string
}

interface FetchDailyAppointmentsResponse {
  appointments: AppointmentType[]
}

export async function fetchDailyAppointments({
  datetime,
}: FetchDailyAppointmentsQuery): Promise<FetchDailyAppointmentsResponse> {
  await wait(300)

  const selectedDate = formatDate(datetime)
  const response = await api.get('/appointments?status_ne=canceled')

  const appointments: AppointmentType[] = response.data

  const filteredAppointments = appointments.filter(appointment => {
    const appointmanteDate = formatDate(appointment.datetime)
    return appointmanteDate === selectedDate
  })

  const orderedAppointmentss = filteredAppointments.sort((a, b) => {
    return new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
  })

  return { appointments: orderedAppointmentss }
}
