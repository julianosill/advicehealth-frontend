import { CircleCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useSchedule } from '@/hooks'
import { cn } from '@/lib/utils'

import { Avatar } from '../ui/avatar'
import { DoctorListSkeleton } from './doctor-list-skeleton'

export function DoctorList() {
  const {
    doctorList,
    doctor: selectedDoctor,
    handleSelectDoctor,
  } = useSchedule()

  return (
    <div className='flex max-h-80 flex-col gap-2 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-500/50'>
      {doctorList &&
        doctorList.map(doctor => {
          const isSelected = selectedDoctor?.id === doctor.id

          return (
            <Button
              key={doctor.id}
              variant='outline'
              className={cn(
                'h-fit min-h-16 w-full justify-start gap-3 rounded-lg px-4 py-2',
                isSelected && 'border-primary bg-primary/10',
              )}
              onClick={() => handleSelectDoctor(doctor)}
            >
              <Avatar />
              <div className='flex flex-col items-start font-medium'>
                <p className='text-base'>{doctor.name}</p>
                <span className='font-sans text-xs text-muted-foreground'>
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

      {!doctorList && <DoctorListSkeleton />}
    </div>
  )
}
