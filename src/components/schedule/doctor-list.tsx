import { CircleCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { DoctorType } from '@/types'

import { Avatar } from '../ui/avatar'

interface DoctorsListProps {
  doctors?: DoctorType[]
  selectedDoctorId: string | null
  onSelect: (doctorId: string) => Promise<void>
}

export function DoctorList({
  doctors,
  selectedDoctorId,
  onSelect,
}: DoctorsListProps) {
  return (
    <div className='flex max-h-72 flex-col gap-2 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-500/50'>
      {doctors &&
        doctors.map(doctor => {
          const isSelected = selectedDoctorId === doctor.id

          return (
            <Button
              key={doctor.id}
              variant='outline'
              className={cn(
                'h-fit w-full justify-start gap-3 rounded-lg px-4 py-2',
                isSelected && 'border-primary bg-primary/10',
              )}
              onClick={() => onSelect(doctor.id)}
            >
              <Avatar />
              <div className='flex flex-col items-start font-normal'>
                <p className='text-base'>{doctor.name}</p>
                <span className='text-xs text-muted-foreground'>
                  {doctor.specialty}
                </span>
              </div>
              {isSelected && (
                <CircleCheck
                  strokeWidth={1}
                  className='ml-auto size-6 text-primary'
                />
              )}
            </Button>
          )
        })}
    </div>
  )
}
