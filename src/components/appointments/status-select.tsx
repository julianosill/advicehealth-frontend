import { useAppointmentPage } from '@/hooks'

import { Select } from '../ui/select'

export function StatusSelect() {
  const { statusQuery, handleSelectStatus } = useAppointmentPage()

  const statusOptions = [
    { value: 'pending', text: 'Pendente' },
    { value: 'confirmed', text: 'Confirmado' },
    { value: 'completed', text: 'Concluído' },
    { value: 'canceled', text: 'Cancelado' },
  ] as const

  const statusColor = {
    pending: 'text-muted-foreground',
    confirmed: 'text-sky-600',
    completed: 'text-green-600',
    canceled: 'text-red-600',
  } as const

  return (
    <Select.Root value={statusQuery} onValueChange={handleSelectStatus}>
      <Select.Trigger className='max-w-48'>
        <Select.Value placeholder='Selecione um status' />
      </Select.Trigger>
      <Select.Content>
        {statusOptions.map(status => (
          <Select.Item
            key={status.value}
            value={status.value}
            className={statusColor[status.value]}
          >
            {status.text}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  )
}
