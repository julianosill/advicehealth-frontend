import { useState } from 'react'

import { formatTime } from '@/helpers'
import type { AppointmentType } from '@/types'

import { AppointmentDetailsContent } from '../appointments/appointment-details-content'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import { Dialog } from '../ui/dialog'

interface DailyAppointmentItemProps {
  appointment: AppointmentType
}

export function DailyAppointmentItem({
  appointment,
}: Readonly<DailyAppointmentItemProps>) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Dialog.Root
      key={appointment.id}
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
    >
      <Dialog.Trigger asChild>
        <Button
          variant='outline'
          className='h-fit justify-start px-3 py-4 font-sans focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0'
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
      </Dialog.Trigger>
      <AppointmentDetailsContent id={appointment.id} open={isDialogOpen} />
    </Dialog.Root>
  )
}
