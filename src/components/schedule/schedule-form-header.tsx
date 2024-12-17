import { formatDate, formatTime } from '@/helpers'
import { useScheduleForm } from '@/hooks'

export function ScheduleFormHeader() {
  const { date, doctor } = useScheduleForm()

  return (
    <section className='grid gap-4 border-b pb-4 lg:grid-cols-3'>
      <div>
        <p className='text-sm text-muted-foreground'>Médico(a):</p>
        <p className='font-medium'>{doctor?.name}</p>
      </div>
      <div>
        <p className='text-sm text-muted-foreground'>Dia selecionado:</p>
        <p className='font-medium'>{formatDate(date, { dateStyle: 'long' })}</p>
      </div>
      <div>
        <p className='text-sm text-muted-foreground'>Horário selecionado:</p>
        <p className='font-medium'>{formatTime(date)}</p>
      </div>
    </section>
  )
}
