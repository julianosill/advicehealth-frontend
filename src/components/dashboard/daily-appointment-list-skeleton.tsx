import { Skeleton } from '../ui/skeleton'

export function DailyAppointmentListSkeleton() {
  const skeletons = Array.from({ length: 5 }, (_, index) => index + 1)

  return (
    <div className='flex max-h-80 flex-col gap-2 overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-500/50'>
      {skeletons.map(index => (
        <Skeleton key={index} className='h-16 shrink-0' />
      ))}
    </div>
  )
}
