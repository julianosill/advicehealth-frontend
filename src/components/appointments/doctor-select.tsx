import { useAppointmentPage } from '@/hooks'

import { Select } from '../ui/select'
import { Skeleton } from '../ui/skeleton'

export function DoctorSelect() {
  const { doctorList, doctorQuery, handleSelectDoctor } = useAppointmentPage()

  if (!doctorList) {
    return (
      <Skeleton className='h-10 max-w-60 border border-input bg-muted/50' />
    )
  }

  return (
    <Select.Root
      value={doctorQuery}
      onValueChange={handleSelectDoctor}
      defaultValue={doctorQuery}
    >
      <Select.Trigger className='max-w-60'>
        <Select.Value placeholder='Selecione um médico' />
      </Select.Trigger>
      <Select.Content>
        {doctorList &&
          doctorList.map(doctor => (
            <Select.Item key={doctor.id} value={doctor.id}>
              {doctor.name}
            </Select.Item>
          ))}
      </Select.Content>
    </Select.Root>
  )
}
