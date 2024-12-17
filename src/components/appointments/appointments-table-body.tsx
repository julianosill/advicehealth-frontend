import {
  CancelAppointmentButton,
  EditAppointmentButton,
  ShowAppointmentButton,
} from '@/components'
import { Table } from '@/components/ui/table'
import { formatCurrency, formatDate, formatTime } from '@/helpers'
import { APPOINTMENT_STATUS_TYPE, type AppointmentType } from '@/types'

interface AppointmentsTableBodyProps {
  appointments: AppointmentType[]
}

export function AppointmentsTableBody({
  appointments,
}: Readonly<AppointmentsTableBodyProps>) {
  const statusColor = {
    pending: 'text-muted-foreground',
    confirmed: 'text-sky-600',
    completed: 'text-green-600',
    canceled: 'text-red-600',
  } as const

  return (
    <Table.Body>
      {appointments.map(appointment => {
        const { id, name, doctorName, datetime, priceInCents, status } =
          appointment

        const formattedDate = formatDate(datetime, {
          day: '2-digit',
          month: '2-digit',
        })
        const formattedTime = formatTime(datetime)
        const formattedDatetime = `${formattedDate}, ${formattedTime}`

        return (
          <Table.Row key={id}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{doctorName}</Table.Cell>
            <Table.Cell>{formattedDatetime}</Table.Cell>
            <Table.Cell className={statusColor[status]}>
              {APPOINTMENT_STATUS_TYPE[status]}
            </Table.Cell>
            <Table.Cell>{formatCurrency(priceInCents)}</Table.Cell>
            <Table.Cell className='space-x-2 whitespace-nowrap text-right'>
              <ShowAppointmentButton id={id} />
              <EditAppointmentButton id={id} />

              {status !== 'canceled' && (
                <CancelAppointmentButton
                  id={id}
                  datetime={datetime}
                  patientName={name}
                />
              )}
            </Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  )
}