import { cn } from '@/lib/utils'

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('w-full animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  )
}
