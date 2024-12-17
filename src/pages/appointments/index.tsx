import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'
import { z } from 'zod'

import { fetchAppointments } from '@/api/fetch-appointments'
import { Page } from '@/components/page'
import { Pagination } from '@/components/pagination'
import { Table } from '@/components/ui/table'
import { QUERY_KEYS } from '@/constants'

import { AppointmentsTableBody } from './_components/appointments-table-body'
import { AppointmentsTableSkeleton } from './_components/appointments-table-skeleton'

export function Appointments() {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageIndex = z.coerce
    .number()
    .transform(page => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data } = useQuery({
    queryKey: [QUERY_KEYS.appointmentList, pageIndex],
    queryFn: () => fetchAppointments({ pageIndex }),
  })

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

  const appointments = data?.appointments
  const currentItems = data?.appointments.length ?? 0
  const totalItems = data?.metadata.totalCount ?? 0

  return (
    <>
      <Page.Header>
        <Page.Title>Agendamentos</Page.Title>
      </Page.Header>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.Head>Paciente</Table.Head>
            <Table.Head className='w-80'>Médico(a)</Table.Head>
            <Table.Head className='w-32'>Dia</Table.Head>
            <Table.Head className='w-24'>Horário</Table.Head>
            <Table.Head className='w-28'>Status</Table.Head>
            <Table.Head className='w-32'>Valor</Table.Head>
            <Table.Head className='w-28'>Ações</Table.Head>
          </Table.Row>
        </Table.Header>

        {appointments ? (
          <AppointmentsTableBody appointments={appointments} />
        ) : (
          <AppointmentsTableSkeleton />
        )}
      </Table.Root>

      <Pagination
        pageIndex={pageIndex}
        currentItems={currentItems}
        totalItems={totalItems}
        onPageChange={handlePaginate}
      />
    </>
  )
}
