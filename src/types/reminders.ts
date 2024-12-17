export const REMINDER_PRIORITY_TYPE = {
  0: 'Baixa',
  1: 'Normal',
  2: 'Alta',
} as const

type ReminderPriorityType = keyof typeof REMINDER_PRIORITY_TYPE

export type ReminderType = {
  id: string
  text: string
  priority: ReminderPriorityType
}
