import { Search } from 'lucide-react'

import { formatName } from '@/helpers/format-name'
import { useAppointmentPage } from '@/hooks'
import { cn } from '@/lib/utils'

import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { Input } from '../ui/input'

export function SearchForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLFormElement>) {
  const { form, handleSubmit, handleSearch } = useAppointmentPage()

  return (
    <Form.Root {...form}>
      <Form.Wrapper
        onSubmit={handleSubmit(handleSearch)}
        className={cn('flex w-full max-w-72 flex-row gap-2', className)}
        {...props}
      >
        <Form.Field
          name='search'
          control={form.control}
          render={({ field }) => (
            <Form.Item className='relative flex-1'>
              <Form.Control>
                <Input
                  placeholder='Insira o nome do paciente'
                  className='text-sm'
                  {...field}
                  onChange={e => {
                    const formattedValue = formatName(e.target.value)
                    field.onChange(formattedValue)
                  }}
                />
              </Form.Control>
              <Form.Message className='absolute top-10' />
            </Form.Item>
          )}
        />

        <Button type='submit' className='w-12'>
          <Search className='size-6' />
          <span className='sr-only'>Pesquisar</span>
        </Button>
      </Form.Wrapper>
    </Form.Root>
  )
}
