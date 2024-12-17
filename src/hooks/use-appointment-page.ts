import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'
import { z } from 'zod'

import { fetchAppointments } from '@/api/appointments/fetch-appointments'
import { QUERY_KEYS } from '@/constants'

export function useAppointmentPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageIndex = z.coerce
    .number()
    .transform(page => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data } = useQuery({
    queryKey: [QUERY_KEYS.appointmentList, pageIndex],
    queryFn: () => fetchAppointments({ pageIndex }),
  })

  function handlePaginate(pageIndex: number) {
    setSearchParams(state => {
      if (pageIndex === 0) {
        state.delete('page')
        return state
      }

      state.set('page', (pageIndex + 1).toString())
      return state
    })
  }

  const appointments = data?.appointments
  const currentItems = data?.appointments.length ?? 0
  const totalItems = data?.metadata.totalCount ?? 0

  return { appointments, pageIndex, currentItems, totalItems, handlePaginate }
}
