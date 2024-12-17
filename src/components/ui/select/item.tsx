import * as SelectPrimitive from '@radix-ui/react-select'
import { Check } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
  // eslint-disable-next-line react/prop-types
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground',
      className,
    )}
    {...props}
  >
    <span className='absolute left-2 flex size-4 items-center justify-center'>
      <SelectPrimitive.ItemIndicator>
        <Check className='size-4 text-primary' />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName
