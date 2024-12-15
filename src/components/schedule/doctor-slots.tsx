import { ClipboardPen, ClipboardPlus, Search, Trash2 } from 'lucide-react'

import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { formatDate, formatTime } from '@/helpers'
import type { SlotType } from '@/types'

import { Avatar } from '../ui/avatar'

interface DoctorSlotsProps {
  doctorId?: string | null
  date: Date | string
  slots: SlotType[]
}

export function DoctorSlots({ doctorId, date, slots }: DoctorSlotsProps) {
  return (
    <section className='flex-1'>
      <h2 className='pb-4 font-maven text-xl font-medium'>
        {formatDate(date, { dateStyle: 'long' })}
      </h2>

      {slots.length > 0 && (
        <div className='space-y-2'>
          {slots.map(slot => {
            const { id, datetime, patient } = slot

            return (
              <Card key={id} className='flex items-center gap-6 leading-none'>
                <div className='text-xl text-muted-foreground'>
                  {formatTime(datetime)}
                </div>
                {patient ? (
                  <>
                    <div className='flex items-center gap-2'>
                      <Avatar />
                      <p className='leading-tight'>{patient.name}</p>
                    </div>
                    <div className='ml-auto space-x-2'>
                      <Button variant='outline' size='icon'>
                        <Search className='size-4' />
                      </Button>
                      <Button variant='outline' size='icon'>
                        <ClipboardPen className='size-4' />
                      </Button>
                      <Button variant='outline' size='icon'>
                        <Trash2 className='size-4 text-red-600' />
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className='ml-auto space-x-2'>
                    <Button variant='outline' size='icon'>
                      <ClipboardPlus className='size-4' />
                    </Button>
                  </div>
                )}
              </Card>
            )
          })}
        </div>
      )}

      {!doctorId && (
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
