import { Skeleton } from '../ui/skeleton'

export function DoctorSlotsSkeleton() {
  const skeletons = Array.from({ length: 17 }, (_, index) => index + 1)

  return (
    <div className='space-y-2'>
      {skeletons.map(index => (
        <Skeleton key={index} className='h-16 shrink-0 rounded-lg' />
      ))}
    </div>
  )
}
