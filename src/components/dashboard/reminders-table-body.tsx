import { NotebookPen } from 'lucide-react'

import { Table } from '@/components/ui/table'
import { REMINDER_PRIORITY_TYPE, type ReminderType } from '@/types'

import { Button } from '../ui/button'

interface RemindersTableBodyProps {
  reminders: ReminderType[]
}

export function RemindersTableBody({
  reminders,
}: Readonly<RemindersTableBodyProps>) {
  const priorityColor = {
    low: 'text-muted-foreground',
    normal: 'text-sky-600',
    high: 'text-red-600',
  } as const

  return (
    <Table.Body>
      {reminders.map(reminder => {
        const { id, text, priority } = reminder

        return (
          <Table.Row key={id}>
            <Table.Cell>{text}</Table.Cell>
            <Table.Cell className={priorityColor[priority]}>
              {REMINDER_PRIORITY_TYPE[priority]}
            </Table.Cell>
            <Table.Cell className='space-x-2 whitespace-nowrap text-right'>
              <Button variant='outline' size='icon'>
                <NotebookPen className='size-4' />
                <span className='sr-only'>Editar</span>
              </Button>
            </Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  )
}
