import { Search, X } from 'lucide-react'

import { formatName } from '@/helpers/format-name'
import { useAppointmentPage } from '@/hooks'
import { cn } from '@/lib/utils'

import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { Input } from '../ui/input'

export function SearchAppointmentsForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLFormElement>) {
  const {
    form,
    showClearButton,
    handleSubmit,
    handleSearch,
    handleClearFilters,
  } = useAppointmentPage()

  return (
    <Form.Root {...form}>
      <Form.Wrapper
        onSubmit={handleSubmit(handleSearch)}
        className={cn('flex flex-row justify-start gap-2 pb-4', className)}
        {...props}
      >
        <Form.Field
          name='search'
          control={form.control}
          render={({ field }) => (
            <Form.Item className='w-full max-w-80'>
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
              <Form.Message />
            </Form.Item>
          )}
        />

        <Button type='submit'>
          <Search className='size-6' />
          <span className='sr-only'>Pesquisar</span>
        </Button>

        {showClearButton && (
          <Button type='button' variant='ghost' onClick={handleClearFilters}>
            <X className='size-6' />
            Limpar filtros
          </Button>
        )}

        {/* <Button type='submit' size='lg' disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className='size-6 animate-spin' />
              Salvando...
            </>
          ) : (
            <>
              <ClipboardCheck className='size-6' />
              Salvar
            </>
          )}
        </Button> */}
      </Form.Wrapper>
    </Form.Root>
  )
}
