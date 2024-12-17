import { ClipboardPlus } from 'lucide-react'

import {
  CancelAppointmentButton,
  EditAppointmentButton,
  ShowAppointmentButton,
} from '@/components'
import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { formatDate, formatTime } from '@/helpers'
import { useSchedule } from '@/hooks'

import { Avatar } from '../ui/avatar'
import { SectionTitle } from '../ui/section-title'
import { DoctorSlotsSkeleton } from './doctor-slots-skeleton'

export function DoctorSlots() {
  const { slots, date, doctor, handleSelectSlot } = useSchedule()

  const showSlots = slots && slots.length >= 0
  const showSkeleton = !!doctor && !slots

  return (
    <section className='flex-1'>
      <SectionTitle>{formatDate(date, { dateStyle: 'long' })}</SectionTitle>

      <div className='space-y-2'>
        {showSlots &&
          slots.map(slot => {
            const { id, datetime, patient } = slot

            return (
              <Card.Root
                key={id}
                className='flex min-h-16 items-center gap-3 px-4 py-2 leading-none lg:gap-6'
              >
                <div className='text-xl text-muted-foreground'>
                  {formatTime(datetime)}
                </div>
                {patient ? (
                  <>
                    <div className='flex items-center gap-2'>
                      <Avatar className='max-lg:hidden' />
                      <p className='leading-tight'>{patient.name}</p>
                    </div>
                    <div className='ml-auto space-x-2 whitespace-nowrap'>
                      <ShowAppointmentButton id={id} />
                      <EditAppointmentButton id={id} />
                      <CancelAppointmentButton
                        id={id}
                        datetime={datetime}
                        patientName={patient.name}
                      />
                    </div>
                  </>
                ) : (
                  <div className='ml-auto space-x-2'>
                    <Button
                      variant='outline'
                      size='icon'
                      onClick={() => handleSelectSlot(slot.datetime)}
                    >
                      <ClipboardPlus className='size-4' />
                    </Button>
                  </div>
                )}
              </Card.Root>
            )
          })}
      </div>

      {showSkeleton && <DoctorSlotsSkeleton />}

      {!doctor && (
        <Alert.Root>
          <Alert.Title>Médico(a) não selecionado(a)</Alert.Title>
          <Alert.Description>
            Por favor, selecione um profissional ao lado para exibir sua agenda.
          </Alert.Description>
        </Alert.Root>
      )}
    </section>
  )
}
