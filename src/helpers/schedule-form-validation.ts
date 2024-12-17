import { z } from 'zod'

import {
  CPF_REGEX,
  DATE_REGEX,
  NAME_REGEX,
  PHONE_REGEX,
  SPECIAL_CHARS_REGEX,
} from '@/constants'

export const scheduleFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Insira o nome completo')
    .min(3, 'O nome deve conter mais de 3 caracteres')
    .regex(SPECIAL_CHARS_REGEX, 'Números e caracteres especiais são inválidos')
    .regex(NAME_REGEX, 'Insira o nome e sobrenome'),
  dateOfBirth: z
    .string()
    .min(1, 'Insira a data de nascimento')
    .regex(DATE_REGEX, 'Data inválida'),
  cpf: z.string().min(1, 'Insira o CPF').regex(CPF_REGEX, 'CPF inválido'),
  phone: z
    .string()
    .min(1, 'Insira o telefone')
    .regex(PHONE_REGEX, 'Telefone inválido'),
  email: z.string().email('E-mail inválido').optional().or(z.literal('')),
  address: z.string().min(1, 'Insira o endereço'),
  price: z.string().min(1, 'Insira o valor da consulta'),
  observations: z.string().optional(),
})

export type ScheduleFormSchema = z.infer<typeof scheduleFormSchema>

export const scheduleFormDefaultValues: ScheduleFormSchema = {
  name: '',
  dateOfBirth: '',
  cpf: '',
  phone: '',
  email: '',
  address: '',
  price: '',
  observations: '',
}
