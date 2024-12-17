import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'

import {
  fetchDailyAppointments,
  getDailyStatistics,
  getWeeklyStatistics,
} from '@/api'
import { QUERY_KEYS } from '@/constants'
import { formatDate } from '@/helpers'
import { useAppSelector } from '@/store'
import { setDate } from '@/store/slice'

export function useDashboard() {
  const dispatch = useDispatch()
  const date = useAppSelector(state => state.storeReducer.date)
  const dateToday = formatDate(new Date(), { dateStyle: 'full' })

  const { data: result } = useQuery({
    queryKey: [QUERY_KEYS.appointmentList, date],
    queryFn: () => fetchDailyAppointments({ datetime: date }),
  })

  const { data: dailyStatisticsResult } = useQuery({
    queryKey: [QUERY_KEYS.dailyStatistics],
    queryFn: () => getDailyStatistics(),
  })

  const { data: weeklyStatisticsResult } = useQuery({
    queryKey: [QUERY_KEYS.weeklyStatistics],
    queryFn: () => getWeeklyStatistics(),
  })

  const dailyStatistics = dailyStatisticsResult?.statistics
  const weeklyStatistics = weeklyStatisticsResult?.statistics
  const dailyAppointments = result?.appointments

  async function handleSelectDate(selectedDate?: Date) {
    if (!selectedDate) return
    const dateIsoString = selectedDate.toISOString()
    dispatch(setDate(dateIsoString))
  }

  return {
    dateToday,
    date,
    dailyStatistics,
    weeklyStatistics,
    handleSelectDate,
    dailyAppointments,
  }
}
