/* eslint-disable react/prop-types */
import * as React from 'react'

import { cn } from '@/lib/utils'

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        'flex w-full resize-y rounded-md border border-input bg-muted/50 px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'
