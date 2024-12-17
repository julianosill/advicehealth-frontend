export const REMINDER_PRIORITY_TYPE = {
  low: 'Baixa',
  normal: 'Normal',
  high: 'Alta',
} as const

type ReminderPriorityType = keyof typeof REMINDER_PRIORITY_TYPE

export type ReminderType = {
  id: string
  text: string
  priority: ReminderPriorityType
}
