import { formatTime } from '@/helpers'
import type { AppointmentType } from '@/types'

import { Alert } from '../ui/alert'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'

interface DailyAppointmentListProps {
  appointments: AppointmentType[]
}

export function DailyAppointmentList({
  appointments,
}: Readonly<DailyAppointmentListProps>) {
  return (
    <div className='flex max-h-80 flex-col gap-2 overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-500/50'>
      {appointments.length > 0 &&
        appointments.map(appointment => (
          <Button
            key={appointment.id}
            variant='outline'
            className='h-fit justify-start px-3 py-4 font-sans'
          >
            <div className='text-lg font-light text-muted-foreground'>
              {formatTime(appointment.datetime)}
            </div>
            <Avatar />
            <div className='flex flex-col items-start leading-tight'>
              <span className='text-sm'>{appointment.name}</span>
              <span className='text-sm font-normal text-muted-foreground'>
                {appointment.doctorName}
              </span>
            </div>
          </Button>
        ))}

      {appointments.length <= 0 && (
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
