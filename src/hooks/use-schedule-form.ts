import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'

import { fetchDoctorSlots, getAppointment, registerAppointment } from '@/api'
import { updateAppointment } from '@/api/appointments/update-appointment'
import {
  formatCurrency,
  scheduleFormDefaultValues,
  type ScheduleFormSchema,
  scheduleFormSchema,
  wait,
} from '@/helpers'
import { ROUTES } from '@/routes'
import { useAppSelector } from '@/store'
import { setDate, setDoctor } from '@/store/slice'
import type { DoctorWithIdAndName } from '@/types'

export function useScheduleForm(appointmentToUpdateId?: string) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const date = useAppSelector(state => state.storeReducer.date)
  const doctor = useAppSelector(state => state.storeReducer.doctor)

  const form = useForm<ScheduleFormSchema>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: scheduleFormDefaultValues,
    mode: 'onBlur',
  })

  const {
    handleSubmit,
    reset: updateFormData,
    formState: { isValid, isSubmitting },
  } = form

  async function getAppointmentToUpdate(appointmentId: string) {
    const result = await getAppointment(appointmentId)

    const appointment = result.appointment

    if (!appointment) return navigate(ROUTES.schedule)

    const appointmentDatetime = appointment.datetime
    const appointmentDoctor = {
      id: appointment.doctorId,
      name: appointment.doctorName,
    }

    const appointmentFormData = {
      name: appointment.name,
      dateOfBirth: appointment.dateOfBirth,
      cpf: appointment.cpf,
      phone: appointment.phone,
      email: appointment.email ?? '',
      address: appointment.address,
      price: formatCurrency(appointment.priceInCents),
      observations: appointment.observations ?? '',
    }

    dispatch(setDate(appointmentDatetime))
    dispatch(setDoctor(appointmentDoctor))
    updateFormData(appointmentFormData)
  }

  async function submitForm(data: ScheduleFormSchema) {
    if (!date || !doctor) return

    await wait(500)

    return appointmentToUpdateId
      ? await handleUpdateAppointment({ id: appointmentToUpdateId, data })
      : await handleRegisterAppointment({ data, date, doctor })
  }

  async function handleRegisterAppointment({
    data,
    date,
    doctor,
  }: {
    data: ScheduleFormSchema
    date: string
    doctor: DoctorWithIdAndName
  }) {
    const response = await registerAppointment({ data, date, doctor })
    if (!response.success) return toast.error(response.errorMessage)
    await fetchDoctorSlots({ date, doctorId: doctor.id })
    toast.success('Agendamento realizado com sucesso!')
    navigate(-1)
  }

  async function handleUpdateAppointment({
    id,
    data,
  }: {
    data: ScheduleFormSchema
    id: string
  }) {
    const response = await updateAppointment({ id, data })
    if (!response.success) return toast.error(response.errorMessage)
    toast.success('Agendamento atualizado com sucesso!')
    navigate(-1)
  }

  async function handleCancel() {
    navigate(-1)
  }

  useEffect(() => {
    if (appointmentToUpdateId) {
      getAppointmentToUpdate(appointmentToUpdateId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointmentToUpdateId])

  return {
    date,
    doctor,
    form,
    getAppointmentToUpdate,
    handleCancel,
    handleSubmit,
    submitForm,
    isValid,
    isSubmitting,
  }
}
