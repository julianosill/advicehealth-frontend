export const APPOINTMENT_QUERIES = {
  page: 'page',
  search: 'search',
  doctorId: 'doctor',
  status: 'status',
} as const

export const APPOINTMENT_STATUS_TYPE = {
  pending: 'Pendente',
  confirmed: 'Confirmado',
  completed: 'Concluído',
  canceled: 'Cancelado',
} as const

type AppointmentStatusType = keyof typeof APPOINTMENT_STATUS_TYPE

export type AppointmentType = {
  id: string
  name: string
  dateOfBirth: string
  cpf: string
  phone: string
  email?: string | null
  address: string
  priceInCents: number
  observations?: string | null
  datetime: string
  status: AppointmentStatusType
  doctorId: string
  doctorName: string
}

export type NewAppointmentType = Omit<AppointmentType, 'id'>

export type UpdateAppointmentType = Pick<
  AppointmentType,
  | 'name'
  | 'dateOfBirth'
  | 'cpf'
  | 'phone'
  | 'email'
  | 'address'
  | 'priceInCents'
  | 'observations'
  | 'status'
>
