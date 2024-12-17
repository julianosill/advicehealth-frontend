import { DoctorList, DoctorSlots } from '@/components'
import { Page } from '@/components/page'
import { Calendar } from '@/components/ui/calendar'
import { SectionTitle } from '@/components/ui/section-title'
import { useSchedule } from '@/hooks'

export function SchedulePage() {
  const { date, handleSelectDate } = useSchedule()

  return (
    <>
      <Page.Header>
        <Page.Title>Agendar consulta</Page.Title>
      </Page.Header>

      <div className='flex gap-12'>
        <div>
          <SectionTitle>Médicos</SectionTitle>
          <DoctorList />
          <Calendar
            mode='single'
            className='mt-8'
            selected={new Date(date)}
            onSelect={handleSelectDate}
          />
        </div>

        <DoctorSlots />
      </div>
    </>
  )
}
