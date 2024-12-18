import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router'
import { z } from 'zod'

import { fetchDoctors } from '@/api'
import { fetchAppointments } from '@/api/appointments/fetch-appointments'
import { QUERY_KEYS } from '@/constants'
import {
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
    values: { search: searchQuery },
  })

  const { setValue, handleSubmit } = form

  const { data: doctorList } = useQuery({
    queryKey: [QUERY_KEYS.doctorList],
    queryFn: () => fetchDoctors(),
  })

  const { data: appointmentList, isFetching } = useQuery({
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
      state.delete('page')
      return state
    })
  }

  function handleSelectDoctor(doctorId: string) {
    setSearchParams(state => {
      if (doctorId) state.set(APPOINTMENT_QUERIES.doctorId, doctorId)
      state.delete('page')
      return state
    })
  }

  function handleSelectStatus(status: string) {
    setSearchParams(state => {
      if (status) state.set(APPOINTMENT_QUERIES.status, status)
      state.delete('page')
      return state
    })
  }

  function handleClearFilters() {
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

  const showClearFilter = searchQuery || doctorQuery || statusQuery
  const appointments = appointmentList?.appointments
  const currentItems = appointmentList?.appointments.length ?? 0
  const totalItems = appointmentList?.metadata.totalCount ?? 0

  useEffect(() => {
    if (searchQuery) setValue('search', searchQuery)
    if (pageIndex && !appointments) handleClearFilters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    appointments,
    currentItems,
    doctorList,
    doctorQuery,
    form,
    handleClearFilters,
    handlePaginate,
    handleSearch,
    handleSelectDoctor,
    handleSelectStatus,
    handleSubmit,
    isFetching,
    pageIndex,
    showClearFilter,
    statusQuery,
    totalItems,
  }
}
