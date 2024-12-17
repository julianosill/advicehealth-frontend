import { NotebookPen } from 'lucide-react'

import { Table } from '@/components/ui/table'
import { useDashboard } from '@/hooks'
import { REMINDER_PRIORITY_TYPE } from '@/types'

import { Button } from '../ui/button'
import { RemindersTableBodySkeleton } from './reminders-table-body-skeleton'

export function RemindersTableBody() {
  const { reminders } = useDashboard()

  const priorityColor = {
    0: 'text-muted-foreground',
    1: 'text-sky-600',
    2: 'text-red-600',
  } as const

  if (!reminders) {
    return <RemindersTableBodySkeleton />
  }

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
