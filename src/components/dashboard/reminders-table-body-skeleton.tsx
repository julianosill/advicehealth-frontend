import { Table } from '@/components/ui/table'

import { Skeleton } from '../ui/skeleton'

export function RemindersTableBodySkeleton() {
  const skeletons = Array.from({ length: 6 }, (_, index) => index + 1)

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
              <Skeleton className='size-8' />
            </Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  )
}
