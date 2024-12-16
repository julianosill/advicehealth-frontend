import React from 'react'

import { cn } from '@/lib/utils'

export const FormWrapper = React.forwardRef<
  HTMLFormElement,
  React.HTMLAttributes<HTMLFormElement>
>(({ className, ...props }, ref) => {
  return (
    <form
      ref={ref}
      className={cn('flex w-full flex-col gap-4', className)}
      {...props}
    />
  )
})
FormWrapper.displayName = 'FormWrapper'
