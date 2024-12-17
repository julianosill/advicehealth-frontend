import { PER_PAGE } from '@/constants'
import { normalizeText, wait } from '@/helpers'
import { api } from '@/lib/axios'
import type { AppointmentType } from '@/types'

interface FetchAppointmentsQuery {
  pageIndex: number
  doctorId?: string
  status?: string
  search?: string
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
  doctorId,
  status,
  search,
}: FetchAppointmentsQuery): Promise<FetchAppointmentsResponse> {
  await wait(500)

  const doctorQuery = `doctorId=${doctorId}`
  const statusQuery = `status=${status}`

  const response = await api.get(`/appointments?${doctorQuery}&${statusQuery}`)

  let appointments: AppointmentType[] = response.data

  if (search) {
    appointments = appointments.filter(item => {
      const normalizedName = normalizeText(item.name) as string
      return normalizedName.includes(search)
    })
  }

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
