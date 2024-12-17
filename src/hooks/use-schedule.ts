import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

import { fetchDoctors, fetchDoctorSlots } from '@/api'
import { QUERY_KEYS } from '@/constants'
import { ROUTES } from '@/routes'
import { useAppDispatch, useAppSelector } from '@/store'
import { setDate, setDoctor } from '@/store/slice'
import type { DoctorType } from '@/types'

export function useSchedule() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const date = useAppSelector(state => state.storeReducer.date)
  const doctor = useAppSelector(state => state.storeReducer.doctor)
  const doctorId = doctor?.id ?? ''

  const { data: doctorList } = useQuery({
    queryKey: [QUERY_KEYS.doctorList],
    queryFn: () => fetchDoctors(),
  })

  const { data: slots } = useQuery({
    queryKey: [QUERY_KEYS.doctorSlots, doctorId, date],
    queryFn: () => fetchDoctorSlots({ date, doctorId: doctorId }),
    enabled: !!doctor && !!date,
  })

  async function handleSelectDate(selectedDate?: Date) {
    if (!selectedDate) return
    const dateIsoString = selectedDate.toISOString()
    dispatch(setDate(dateIsoString))
  }

  async function handleSelectDoctor(selectedDoctor: DoctorType) {
    dispatch(setDoctor(selectedDoctor))
  }

  function handleSelectSlot(selectedDate: string) {
    dispatch(setDate(selectedDate))
    navigate(ROUTES.newSchedule)
  }

  return {
    date,
    doctor,
    doctorList,
    slots,
    handleSelectDate,
    handleSelectDoctor,
    handleSelectSlot,
  }
}
