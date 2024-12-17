import { ClipboardCheck, Loader2 } from 'lucide-react'
import type React from 'react'

import {
  formatCpf,
  formatCurrency,
  formatDateOfBirth,
  formatPhone,
  formatPrice,
} from '@/helpers'
import { formatName } from '@/helpers/format-name'
import { useScheduleForm } from '@/hooks'
import { cn } from '@/lib/utils'

import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

interface ScheduleFormProps extends React.HTMLAttributes<HTMLFormElement> {
  appointmentId?: string
}

export function ScheduleForm({
  appointmentId,
  className,
  ...props
}: ScheduleFormProps) {
  const { form, handleCancel, handleSubmit, submitForm, isSubmitting } =
    useScheduleForm(appointmentId)

  return (
    <Form.Root {...form}>
      <Form.Wrapper
        onSubmit={handleSubmit(submitForm)}
        className={cn(className)}
        {...props}
      >
        <Form.Field
          name='name'
          control={form.control}
          render={({ field }) => (
            <Form.Item className='flex-1'>
              <Form.Label>Nome completo</Form.Label>
              <Form.Control>
                <Input
                  placeholder='Insira o nome do paciente'
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

        <fieldset className='grid gap-4 md:grid-cols-2'>
          <Form.Field
            name='dateOfBirth'
            control={form.control}
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control>
                  <Input
                    placeholder='00/00/0000'
                    maxLength={10}
                    {...field}
                    onChange={e => {
                      const formattedValue = formatDateOfBirth(e.target.value)
                      field.onChange(formattedValue)
                    }}
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            name='cpf'
            control={form.control}
            render={({ field }) => (
              <Form.Item>
                <Form.Label>CPF</Form.Label>
                <Form.Control>
                  <Input
                    placeholder='000.000.000-00'
                    maxLength={14}
                    {...field}
                    onChange={e => {
                      const formattedValue = formatCpf(e.target.value)
                      field.onChange(formattedValue)
                    }}
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            name='phone'
            control={form.control}
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Telefone</Form.Label>
                <Form.Control>
                  <Input
                    placeholder='(00) 00000-0000'
                    maxLength={15}
                    {...field}
                    onChange={e => {
                      const formattedValue = formatPhone(e.target.value)
                      field.onChange(formattedValue)
                    }}
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            name='email'
            control={form.control}
            render={({ field }) => (
              <Form.Item className='flex-1'>
                <Form.Label>E-mail</Form.Label>
                <Form.Control>
                  <Input placeholder='email@exemplo.com.br' {...field} />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            name='address'
            control={form.control}
            render={({ field }) => (
              <Form.Item className='flex-1'>
                <Form.Label>Endereço</Form.Label>
                <Form.Control>
                  <Input
                    placeholder='Insira o endereço do paciente'
                    {...field}
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
          <Form.Field
            name='price'
            control={form.control}
            render={({ field }) => (
              <Form.Item className='flex-1'>
                <Form.Label>Valor da consulta</Form.Label>
                <Form.Control>
                  <Input
                    placeholder='R$ 000,00'
                    {...field}
                    onChange={e => {
                      const sanitedValue = formatPrice(e.target.value)
                      const formattedPrice = formatCurrency(sanitedValue)
                      field.onChange(formattedPrice)
                    }}
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
        </fieldset>

        <Form.Field
          name='observations'
          control={form.control}
          render={({ field }) => (
            <Form.Item className='flex-1'>
              <Form.Label>Observações</Form.Label>
              <Form.Control>
                <Textarea
                  placeholder='Insira o endereço do paciente'
                  className='min-h-24'
                  {...field}
                />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <footer className='flex justify-end gap-4 pt-4 max-sm:flex-col'>
          <Button
            type='button'
            size='lg'
            variant='outline'
            onClick={handleCancel}
          >
            Cancelar
          </Button>

          <Button type='submit' size='lg' disabled={isSubmitting}>
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
          </Button>
        </footer>
      </Form.Wrapper>
    </Form.Root>
  )
}
