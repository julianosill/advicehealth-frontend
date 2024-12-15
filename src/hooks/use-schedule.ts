import { useQuery } from '@tanstack/react-query'

import { fetchDoctors, fetchDoctorSlots } from '@/api'
import { useAppDispatch, useAppSelector } from '@/store'
import { selectDoctor, selectDoctorSlots, setDate } from '@/store/slice'

export function useSchedule() {
  const dispatch = useAppDispatch()

  const { data: doctors } = useQuery({
    queryKey: ['doctors'],
    queryFn: () => fetchDoctors(),
  })

  const selectedDate = useAppSelector(state => state.storeReducer.date)
  const selectedDoctorId = useAppSelector(state => state.storeReducer.doctorId)
  const slots = useAppSelector(state => state.storeReducer.doctorSlots)

  async function handleSelectDate(date?: Date) {
    if (!date) return
    const dateIsoString = date.toISOString()
    dispatch(setDate(dateIsoString))
    if (selectedDoctorId) selectSlots(selectedDoctorId, dateIsoString)
  }

  async function handleSelectDoctor(doctorId: string) {
    dispatch(selectDoctor(doctorId))
    await selectSlots(doctorId, selectedDate)
  }

  async function selectSlots(doctorId: string, date: string) {
    dispatch(selectDoctorSlots([]))
    const slots = await fetchDoctorSlots({ doctorId, date })
    dispatch(selectDoctorSlots(slots))
  }

  return {
    doctors,
    slots,
    selectedDate,
    selectedDoctorId,
    handleSelectDate,
    handleSelectDoctor,
  }
}
