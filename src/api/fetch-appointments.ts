import { PER_PAGE } from '@/constants'
import { wait } from '@/helpers'
import { api } from '@/lib/axios'
import type { AppointmentType } from '@/types'

interface FetchAppointmentsQuery {
  pageIndex: number
}

interface FetchAppointmentsResponse {
  appointments: AppointmentType[]
  metadata: {
    pageIndex: number
    totalCount: number
  }
}

export async function fetchAppointments({
  pageIndex,
}: FetchAppointmentsQuery): Promise<FetchAppointmentsResponse> {
  await wait(500)

  const response = await api.get('/appointments')

  const appointments: AppointmentType[] = response.data

  const perPage = PER_PAGE
  const startPage = pageIndex * perPage
  const endPage = perPage + perPage * pageIndex

  const totalCount = appointments.length ?? 0

  const filteredAppointments = appointments.slice(startPage, endPage)

  return {
    appointments: filteredAppointments,
    metadata: {
      pageIndex,
      totalCount,
    },
  }
}
