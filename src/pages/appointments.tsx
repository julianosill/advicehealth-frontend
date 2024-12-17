import { AppointmentsFilter, AppointmentsTableBody } from '@/components'
import { Page } from '@/components/page'
import { Pagination } from '@/components/pagination'
import { Alert } from '@/components/ui/alert'
import { Table } from '@/components/ui/table'
import { useAppointmentPage } from '@/hooks'

export function AppointmentsPage() {
  const {
    appointments,
    pageIndex,
    currentItems,
    totalItems,
    isFetching,
    handlePaginate,
    showClearFilter,
  } = useAppointmentPage()

  const showEmptyMessage =
    !isFetching && appointments && appointments.length <= 0

  return (
    <>
      <Page.Header>
        <Page.Title>Agendamentos</Page.Title>
      </Page.Header>

      <AppointmentsFilter />

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
        <AppointmentsTableBody />
      </Table.Root>

      <Pagination
        pageIndex={pageIndex}
        currentItems={currentItems}
        totalItems={totalItems}
        onPageChange={handlePaginate}
      />

      {showEmptyMessage && (
        <Alert.Root className='mt-8 p-6'>
          <Alert.Title className='text-lg'>
            Nenhum agendamento encontrado!
          </Alert.Title>
          <Alert.Description
            as='div'
            className='flex flex-col gap-4 rounded-xl'
          >
            {showClearFilter ? (
              <p>
                Não há nenhum agendamento registrado com os filtros
                selecionados. Por favor, limpe os filtros e tente novamente.
              </p>
            ) : (
              <p>Não há nenhum agendamento registrado no sistema.</p>
            )}
          </Alert.Description>
        </Alert.Root>
      )}
    </>
  )
}
