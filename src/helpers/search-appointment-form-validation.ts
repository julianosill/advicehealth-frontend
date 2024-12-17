import { z } from 'zod'

import { normalizeText } from './normalize-text'

export const searchAppointmentFormSchema = z.object({
  search: z
    .string()
    .min(3, 'Digite pelo menos 3 letras')
    .optional()
    .transform(data => normalizeText(data)),
})

export type SearchAppointmentFormSchema = z.infer<
  typeof searchAppointmentFormSchema
>

export const searchAppointmentFormDefaultValues: SearchAppointmentFormSchema = {
  search: '',
}
