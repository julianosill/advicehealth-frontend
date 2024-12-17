import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'

import { fetchDailyAppointments } from '@/api'
import { QUERY_KEYS } from '@/constants'
import { useAppSelector } from '@/store'
import { setDate } from '@/store/slice'

export function useDashboard() {
  const dispatch = useDispatch()
  const date = useAppSelector(state => state.storeReducer.date)

  async function handleSelectDate(selectedDate?: Date) {
    if (!selectedDate) return
    const dateIsoString = selectedDate.toISOString()
    dispatch(setDate(dateIsoString))
  }

  const { data: result } = useQuery({
    queryKey: [QUERY_KEYS.appointmentList, date],
    queryFn: () => fetchDailyAppointments({ datetime: date }),
  })

  const dailyAppointments = result?.appointments

  return { date, handleSelectDate, dailyAppointments }
}
