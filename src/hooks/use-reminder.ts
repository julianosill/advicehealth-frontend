import { useQuery } from '@tanstack/react-query'

import { fetchReminders } from '@/api'
import { QUERY_KEYS } from '@/constants'
import { formatDate } from '@/helpers'

export function useReminder() {
  const today = formatDate(new Date(), { dateStyle: 'full' })

  const { data: result } = useQuery({
    queryKey: [QUERY_KEYS.reminderList, today],
    queryFn: () => fetchReminders(),
  })

  const reminders = result?.reminders

  return { today, reminders }
}
