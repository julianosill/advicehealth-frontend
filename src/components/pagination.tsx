import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import type React from 'react'

import { PER_PAGE } from '@/constants'
import { cn } from '@/lib/utils'

import { Button } from './ui/button'

interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  pageIndex: number
  currentItems: number
  totalItems: number
  onPageChange: (pageIndex: number) => Promise<void> | void
}

export function Pagination({
  pageIndex,
  currentItems,
  totalItems,
  className,
  onPageChange,
  ...props
}: PaginationProps) {
  if (currentItems <= 0) return null

  const perPage = PER_PAGE
  const totalPages = Math.ceil(totalItems / perPage) || 1

  const lastPage = totalPages - 1
  const isFirstPage = pageIndex === 0
  const isLastPage = pageIndex === lastPage

  const shouldShowButtons = totalPages > 1

  return (
    <section
      role='pagination'
      className={cn(
        'flex flex-wrap items-center justify-between gap-6 border-t border-border/30 px-4 pt-8 text-sm',
        className,
      )}
      {...props}
    >
      <div className='text-muted-foreground'>
        Exibindo {currentItems} de {totalItems}{' '}
        {totalItems === 1 ? 'item' : 'itens'}
      </div>

      {shouldShowButtons && (
        <div className='flex gap-2'>
          <Button
            variant='outline'
            className='size-9 p-0'
            disabled={isFirstPage}
            onClick={() => onPageChange(0)}
          >
            <ChevronFirst className='size-4' />
            <span className='sr-only'>Primeira página</span>
          </Button>
          <Button
            variant='outline'
            className='size-9 p-0'
            disabled={isFirstPage}
            onClick={() => onPageChange(pageIndex - 1)}
          >
            <ChevronLeft className='size-4' />
            <span className='sr-only'>Página anterior</span>
          </Button>
          <Button
            variant='outline'
            className='size-9 p-0'
            disabled={isLastPage}
            onClick={() => onPageChange(pageIndex + 1)}
          >
            <ChevronRight className='size-4' />
            <span className='sr-only'>Próxima página</span>
          </Button>
          <Button
            variant='outline'
            className='size-9 p-0'
            disabled={isLastPage}
            onClick={() => onPageChange(totalPages - 1)}
          >
            <ChevronLast className='size-4' />
            <span className='sr-only'>Última página</span>
          </Button>
        </div>
      )}
    </section>
  )
}
