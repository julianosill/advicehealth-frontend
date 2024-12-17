import { X } from 'lucide-react'

import { useAppointmentPage } from '@/hooks'
import { cn } from '@/lib/utils'

import { Button } from '../ui/button'
import { DoctorSelect } from './doctor-select'
import { SearchForm } from './search-form'
import { StatusSelect } from './status-select'

export function AppointmentsFilter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { showClearFilter, handleClearFilters } = useAppointmentPage()

  return (
    <div className={cn('flex flex-row gap-2 pb-6', className)} {...props}>
      <SearchForm className='mr-4' />
      <DoctorSelect />
      <StatusSelect />

      {showClearFilter && (
        <Button
          type='button'
          variant='ghost'
          className='font-sans text-sm'
          onClick={handleClearFilters}
        >
          <X className='size-4' />
          Limpar filtros
        </Button>
      )}
    </div>
  )
}
