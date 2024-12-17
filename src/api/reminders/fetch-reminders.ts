import { wait } from '@/helpers'
import { api } from '@/lib/axios'
import type { ReminderType } from '@/types'

interface FetchRemindersResponse {
  reminders: ReminderType[]
}

export async function fetchReminders(): Promise<FetchRemindersResponse> {
  await wait()

  const response = await api.get('/reminders')

  const reminders: ReminderType[] = response.data

  const orderRemindersByPriority = reminders.sort(
    (a, b) => b.priority - a.priority,
  )

  return { reminders: orderRemindersByPriority }
}
