import { type VariantProps } from 'class-variance-authority'
import React from 'react'

import { cn } from '@/lib/utils'

import { alertVariants } from './alert-variants'

export const AlertRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role='alert'
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
AlertRoot.displayName = 'Alert'
