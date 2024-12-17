import { Search } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'

import { AppointmentDetailsContent } from './appointment-details-content'

export function ShowAppointmentButton({ id }: Readonly<{ id: string }>) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <Dialog.Trigger asChild>
        <Button variant='outline' size='icon'>
          <Search className='size-4' />
          <span className='sr-only'>Ver agendamento</span>
        </Button>
      </Dialog.Trigger>
      <AppointmentDetailsContent id={id} open={isDialogOpen} />
    </Dialog.Root>
  )
}
