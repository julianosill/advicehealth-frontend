import { cn } from '@/lib/utils'

import { Card } from '../ui/card'
import { Table } from '../ui/table'
import { RemindersTableBody } from './reminders-table-body'

export function RemindersCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card.Root className={cn(className)} {...props}>
      <Card.Header>
        <Card.Title>Lembretes</Card.Title>
      </Card.Header>

      <Card.Content>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.Head className='text-sm'>Atividade</Table.Head>
              <Table.Head className='w-24 text-sm'>Prioridade</Table.Head>
              <Table.Head className='w-16 text-right text-sm'>Ações</Table.Head>
            </Table.Row>
          </Table.Header>

          <RemindersTableBody />
        </Table.Root>
      </Card.Content>
    </Card.Root>
  )
}
