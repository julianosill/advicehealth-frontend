import { ClipboardPen, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/table'
import { formatCurrency, formatDate, formatTime } from '@/helpers'
import type { AppointmentType } from '@/types'

interface AppointmentsTableBodyProps {
  appointments: AppointmentType[]
}

export function AppointmentsTableBody({
  appointments,
}: Readonly<AppointmentsTableBodyProps>) {
  return (
    <Table.Body>
      {appointments.map(appointment => {
        const date = new Date(appointment.date)
        return (
          <Table.Row key={appointment.id}>
            <Table.Cell>{appointment.name}</Table.Cell>
            <Table.Cell>{appointment.doctor}</Table.Cell>
            <Table.Cell>{formatDate(date)}</Table.Cell>
            <Table.Cell>{formatTime(date)}</Table.Cell>
            <Table.Cell>{formatCurrency(appointment.priceInCents)}</Table.Cell>
            <Table.Cell className='space-x-4 whitespace-nowrap'>
              <Button variant='outline' size='icon'>
                <ClipboardPen className='size-4' />
                <span className='sr-only'>Editar</span>
              </Button>
              <Button variant='outline' size='icon'>
                <Search className='size-4' />
                <span className='sr-only'>Editar</span>
              </Button>
            </Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  )
}
