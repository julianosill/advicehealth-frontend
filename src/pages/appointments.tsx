import {
  AppointmentsTableBody,
  AppointmentsTableBodySkeleton,
  SearchAppointmentsForm,
} from '@/components'
import { Page } from '@/components/page'
import { Pagination } from '@/components/pagination'
import { Table } from '@/components/ui/table'
import { useAppointmentPage } from '@/hooks'

export function AppointmentsPage() {
  const { appointments, pageIndex, currentItems, totalItems, handlePaginate } =
    useAppointmentPage()

  return (
    <>
      <Page.Header>
        <Page.Title>Agendamentos</Page.Title>
      </Page.Header>

      <SearchAppointmentsForm />

      <Table.Root className='min-w-[40rem]'>
        <Table.Header>
          <Table.Row>
            <Table.Head className='min-w-44'>Paciente</Table.Head>
            <Table.Head className='w-56'>Médico(a)</Table.Head>
            <Table.Head className='w-32 whitespace-nowrap'>
              Dia e Horário
            </Table.Head>
            <Table.Head className='w-28'>Status</Table.Head>
            <Table.Head className='w-32'>Valor</Table.Head>
            <Table.Head className='w-32 text-right'>Ações</Table.Head>
          </Table.Row>
        </Table.Header>

        {appointments ? (
          <AppointmentsTableBody appointments={appointments} />
        ) : (
          <AppointmentsTableBodySkeleton />
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
