import { useQuery } from '@tanstack/react-query'

import { getAppointment } from '@/api'
import { QUERY_KEYS } from '@/constants'
import { formatCurrency, formatDate, formatTime } from '@/helpers'
import { APPOINTMENT_STATUS_TYPE } from '@/types'

import { Dialog } from '../ui/dialog'
import { Separator } from '../ui/separator'
import { AppointmentDetailsField } from './appointment-details-field'

interface AppointmentDetailsContentProps {
  id: string
  open?: boolean
}

export function AppointmentDetailsContent({
  id,
  open = false,
}: Readonly<AppointmentDetailsContentProps>) {
  const { data: result } = useQuery({
    queryKey: [QUERY_KEYS.appointment, id],
    queryFn: () => getAppointment(id),
    enabled: open,
  })

  const appointment = result?.appointment

  if (!appointment) return

  return (
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Agendamento</Dialog.Title>
        <Dialog.Description>
          Confira os detalhes do agendamento abaixo.
        </Dialog.Description>
      </Dialog.Header>
      <div className='space-y-3'>
        <section>
          <AppointmentDetailsField
            label='Paciente:'
            content={appointment.name}
            className='border-none pt-0'
          />
          <AppointmentDetailsField
            label='Médico(a):'
            content={appointment.doctorName}
          />
          <AppointmentDetailsField
            label='Dia:'
            content={formatDate(appointment.datetime, { dateStyle: 'long' })}
          />
          <AppointmentDetailsField
            label='Horário:'
            content={formatTime(appointment.datetime)}
          />
          <AppointmentDetailsField
            label='Valor da consulta:'
            content={formatCurrency(appointment.priceInCents)}
          />
          <AppointmentDetailsField
            label='Status:'
            content={APPOINTMENT_STATUS_TYPE[appointment.status]}
          />
        </section>
        <Separator className='bg-muted-foreground/50' />
        <section>
          <AppointmentDetailsField
            label='Telefone:'
            content={appointment.phone}
            className='border-none'
          />
          <AppointmentDetailsField
            label='E-mail:'
            content={appointment.email}
          />
          <AppointmentDetailsField label='CPF:' content={appointment.cpf} />
          <AppointmentDetailsField
            label='Data de nascimento:'
            content={appointment.dateOfBirth}
          />
          <AppointmentDetailsField
            label='Endereço:'
            content={appointment.address}
            className='pb-4'
          />
          <AppointmentDetailsField
            label='Observações:'
            content={appointment.observations}
            className='flex-col gap-y-2 pt-4'
          />
        </section>
      </div>
    </Dialog.Content>
  )
}
