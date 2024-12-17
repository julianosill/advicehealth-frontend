import { useDashboard } from '@/hooks'
import { cn } from '@/lib/utils'

import { Calendar } from '../ui/calendar'
import { Card } from '../ui/card'
import { DailyAppointmentList } from './daily-appointment-list'

export function AppointmentsCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { date, handleSelectDate } = useDashboard()

  return (
    <Card.Root className={cn('w-[23rem]', className)} {...props}>
      <Card.Header>
        <Card.Title>Agenda</Card.Title>
      </Card.Header>

      <Card.Content className='space-y-4'>
        <Calendar
          mode='single'
          selected={new Date(date)}
          onSelect={handleSelectDate}
        />
        <DailyAppointmentList />
      </Card.Content>
    </Card.Root>
  )
}
