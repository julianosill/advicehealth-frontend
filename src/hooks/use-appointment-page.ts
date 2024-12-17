import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router'
import { z } from 'zod'

import { fetchAppointments } from '@/api/appointments/fetch-appointments'
import { QUERY_KEYS } from '@/constants'
import {
  searchAppointmentFormDefaultValues,
  type SearchAppointmentFormSchema,
  searchAppointmentFormSchema,
} from '@/helpers'
import { APPOINTMENT_QUERIES } from '@/types'

export function useAppointmentPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageIndex = z.coerce
    .number()
    .transform(page => page - 1)
    .parse(searchParams.get(APPOINTMENT_QUERIES.page) ?? '1')

  const searchQuery = searchParams.get(APPOINTMENT_QUERIES.search) ?? ''
  const doctorQuery = searchParams.get(APPOINTMENT_QUERIES.doctorId) ?? ''
  const statusQuery = searchParams.get(APPOINTMENT_QUERIES.status) ?? ''

  const form = useForm<SearchAppointmentFormSchema>({
    resolver: zodResolver(searchAppointmentFormSchema),
    defaultValues: searchAppointmentFormDefaultValues,
  })

  const { setValue, reset, handleSubmit } = form

  const { data: appointmentList } = useQuery({
    queryKey: [
      QUERY_KEYS.appointmentList,
      pageIndex,
      searchQuery,
      doctorQuery,
      statusQuery,
    ],
    queryFn: () =>
      fetchAppointments({
        pageIndex,
        search: searchQuery,
        doctorId: doctorQuery,
        status: statusQuery,
      }),
  })

  function handleSearch({ search }: SearchAppointmentFormSchema) {
    setSearchParams(state => {
      if (search) state.set(APPOINTMENT_QUERIES.search, search)
      return state
    })
  }

  function handleClearFilters() {
    reset(searchAppointmentFormDefaultValues)
    setSearchParams('')
  }

  function handlePaginate(pageIndex: number) {
    setSearchParams(state => {
      if (pageIndex === 0) {
        state.delete('page')
        return state
      }

      state.set('page', (pageIndex + 1).toString())
      return state
    })
  }

  const showClearButton = searchQuery || doctorQuery || statusQuery
  const appointments = appointmentList?.appointments
  const currentItems = appointmentList?.appointments.length ?? 0
  const totalItems = appointmentList?.metadata.totalCount ?? 0

  useEffect(() => {
    if (searchQuery) setValue('search', searchQuery)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    appointments,
    pageIndex,
    currentItems,
    totalItems,
    showClearButton,
    handleSubmit,
    handleSearch,
    handleClearFilters,
    handlePaginate,
    form,
  }
}
