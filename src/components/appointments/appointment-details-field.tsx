import type React from 'react'

import { cn } from '@/lib/utils'

interface AppointmentDetailsFieldProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  label: string
  content?: string | React.ReactNode
}

export function AppointmentDetailsField({
  label,
  content,
  className,
  ...props
}: Readonly<AppointmentDetailsFieldProps>) {
  if (!content) return

  return (
    <div
      className={cn(
        'flex justify-between gap-x-2 border-t py-2 max-xs:flex-col',
        className,
      )}
      {...props}
    >
      <span className='text-muted-foreground max-xs:text-sm'>{label}</span>
      {typeof content === 'string' ? (
        <span className='flex-wrap'>{content}</span>
      ) : (
        content
      )}
    </div>
  )
}
