import { cn } from '@/lib/utils'
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  quantity?: number
}

export function Skeleton({
  className,
  quantity = 1,
  ...props
}: Readonly<SkeletonProps>) {
  const skeletonNumber = Array.from(
    { length: quantity },
    (_, index) => index + 1,
  )

  return (
    <>
      {skeletonNumber.map(index => (
        <div
          key={index}
          className={cn(
            'w-full animate-pulse rounded-md bg-muted/75',
            className,
          )}
          {...props}
        />
      ))}
    </>
  )
}
