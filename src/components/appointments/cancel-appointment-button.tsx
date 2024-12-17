import { ClipboardX } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { formatDate, formatTime } from '@/helpers'
import { useAppointment } from '@/hooks'

import { AlertDialog } from '../ui/alert-dialog'

interface CancelAppointmentButtonProps {
  id: string
  patientName: string
  datetime: string
}

export function CancelAppointmentButton({
  id,
  patientName,
  datetime,
}: Readonly<CancelAppointmentButtonProps>) {
  const { handleCancelAppointment } = useAppointment()

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button variant='outline' size='icon'>
          <ClipboardX className='size-4 text-destructive' />
          <span className='sr-only'>Cancelar agendamento</span>
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>
            Tem certeza que deseja cancelar?
          </AlertDialog.Title>
          <AlertDialog.Description>
            Ao confirmar, o agendamento de{' '}
            <span className='font-medium text-foreground'>{patientName}</span>{' '}
            no dia{' '}
            <span className='font-medium text-foreground'>
              {formatDate(datetime, { dateStyle: 'long' })}
            </span>
            , às{' '}
            <span className='font-medium text-foreground'>
              {formatTime(datetime)}
            </span>
            , será cancelado.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancelar</AlertDialog.Cancel>
          <AlertDialog.Action onClick={() => handleCancelAppointment(id)}>
            <ClipboardX className='size-5' />
            Confirmar
          </AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}
