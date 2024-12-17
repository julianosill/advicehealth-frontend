import { Skeleton } from '../ui/skeleton'

export function DoctorListSkeleton() {
  const skeletons = Array.from({ length: 5 }, (_, index) => index + 1)

  return (
    <>
      {skeletons.map(index => (
        <Skeleton key={index} className='h-16 shrink-0 rounded-lg' />
      ))}
    </>
  )
}
