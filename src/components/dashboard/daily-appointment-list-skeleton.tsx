import { Skeleton } from '../ui/skeleton'

export function DailyAppointmentListSkeleton() {
  return (
    <div className='flex max-h-[28rem] flex-col gap-2 overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-500/50'>
      <Skeleton quantity={7} className='h-16 shrink-0' />
    </div>
  )
}
