import { DoctorList, DoctorSlots } from '@/components'
import { Page } from '@/components/page'
import { Calendar } from '@/components/ui/calendar'
import { useSchedule } from '@/hooks'

export function SchedulePage() {
  const {
    doctors,
    slots,
    selectedDate,
    selectedDoctorId,
    handleSelectDate,
    handleSelectDoctor,
  } = useSchedule()

  return (
    <>
      <Page.Header>
        <Page.Title>Agendar consulta</Page.Title>
      </Page.Header>

      <div className='flex gap-12'>
        <div className='flex flex-col gap-8'>
          <section>
            <h2 className='pb-4 font-maven text-xl font-medium'>Médicos</h2>
            <DoctorList
              doctors={doctors}
              selectedDoctorId={selectedDoctorId}
              onSelect={handleSelectDoctor}
            />
          </section>
          <section>
            <Calendar
              mode='single'
              selected={new Date(selectedDate)}
              onSelect={handleSelectDate}
            />
          </section>
        </div>

        <DoctorSlots
          date={selectedDate}
          slots={slots}
          doctorId={selectedDoctorId}
        />
      </div>
    </>
  )
}
