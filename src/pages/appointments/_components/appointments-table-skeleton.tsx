import { Skeleton } from '@/components/ui/skeleton'
import { Table } from '@/components/ui/table'
import { PER_PAGE } from '@/constants'

export function AppointmentsTableSkeleton() {
  const skeletons = Array.from({ length: PER_PAGE }, (_, index) => index + 1)

  return (
    <Table.Body>
      {skeletons.map(index => {
        return (
          <Table.Row key={index}>
            <Table.Cell>
              <Skeleton className='h-4' />
            </Table.Cell>
            <Table.Cell>
              <Skeleton className='h-4' />
            </Table.Cell>
            <Table.Cell>
              <Skeleton className='h-4' />
            </Table.Cell>
            <Table.Cell>
              <Skeleton className='h-4' />
            </Table.Cell>
            <Table.Cell>
              <Skeleton className='h-4' />
            </Table.Cell>
            <Table.Cell className='flex gap-2 whitespace-nowrap'>
              <Skeleton className='size-8' />
              <Skeleton className='size-8' />
            </Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  )
}
