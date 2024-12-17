import { useDashboard } from '@/hooks'

import { Alert } from '../ui/alert'
import { DailyAppointmentItem } from './daily-appointment-item'
import { DailyAppointmentListSkeleton } from './daily-appointment-list-skeleton'

export function DailyAppointmentList() {
  const { dailyAppointments } = useDashboard()

  if (!dailyAppointments) {
    return <DailyAppointmentListSkeleton />
  }

  return (
    <div className='flex max-h-80 flex-col gap-2 overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-500/50'>
      {dailyAppointments.length > 0 ? (
        dailyAppointments.map(appointment => (
          <DailyAppointmentItem
            key={appointment.id}
            appointment={appointment}
          />
        ))
      ) : (
        <Alert.Root className='bg-muted/50'>
          <Alert.Title>Agenda livre</Alert.Title>
          <Alert.Description>
            Não há agendamentos para a data selecionada.
          </Alert.Description>
        </Alert.Root>
      )}
    </div>
  )
}
