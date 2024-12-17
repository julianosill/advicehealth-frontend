import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url().default('http://localhost:3333'),
})

export const env = envSchema.parse(import.meta.env)
