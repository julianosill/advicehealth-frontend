import { fillEmptySlots, formatDate, generateEmptySlots, wait } from '@/helpers'
import { api } from '@/lib/axios'
import type { AppointmentType, SlotType } from '@/types'

interface FetchDoctorSlotsProps {
  doctorId: string
  date: string
}

export async function fetchDoctorSlots({
  doctorId,
  date,
}: Readonly<FetchDoctorSlotsProps>): Promise<SlotType[]> {
  await wait()

  const response = await api.get(
    `/appointments?doctorId=${doctorId}&status_ne=canceled`,
  )

  const schedule: AppointmentType[] = response.data

  const scheduleOnDate = schedule.filter(item => {
    const appointmentDate = formatDate(item.datetime)
    const selectedDate = formatDate(date)
    return appointmentDate === selectedDate
  })

  const emptySlots = generateEmptySlots(date)
  const slots = fillEmptySlots(emptySlots, scheduleOnDate)

  return slots
}
